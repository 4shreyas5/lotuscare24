import { randomUUID } from "node:crypto";

import { put } from "@vercel/blob";

import { env } from "@/lib/env";

const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

/** File-type allowlist checked by magic bytes, not by the client-supplied
 * filename extension or MIME type — both are attacker-controlled and easy to
 * spoof (a .exe renamed to cv.pdf still reports type="application/pdf" if the
 * sender says so). */
const ALLOWED_SIGNATURES: {
  extension: string;
  match: (bytes: Uint8Array) => boolean;
}[] = [
  {
    extension: "pdf",
    match: (b) => b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46, // %PDF
  },
  {
    // .docx is a zip container (OOXML); this only confirms "it's a zip", the
    // same signature as plain .zip — acceptable here since the extension is
    // fixed to .docx by us on upload and the file is never executed, only
    // stored and later opened by a human.
    extension: "docx",
    match: (b) => b[0] === 0x50 && b[1] === 0x4b && b[2] === 0x03 && b[3] === 0x04, // PK..
  },
  {
    extension: "doc",
    match: (b) =>
      b[0] === 0xd0 &&
      b[1] === 0xcf &&
      b[2] === 0x11 &&
      b[3] === 0xe0 &&
      b[4] === 0xa1 &&
      b[5] === 0xb1 &&
      b[6] === 0x1a &&
      b[7] === 0xe1, // OLE compound file
  },
];

export type CvValidationResult =
  | { valid: true; extension: string }
  | { valid: false; reason: string };

export async function validateCvFile(file: File): Promise<CvValidationResult> {
  if (file.size === 0) {
    return { valid: false, reason: "Het bestand is leeg." };
  }
  if (file.size > MAX_CV_SIZE_BYTES) {
    return { valid: false, reason: "Het bestand is groter dan 5 MB." };
  }

  const head = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  const signature = ALLOWED_SIGNATURES.find((s) => s.match(head));

  if (!signature) {
    return {
      valid: false,
      reason: "Alleen PDF- of Word-bestanden (.pdf, .doc, .docx) zijn toegestaan.",
    };
  }

  return { valid: true, extension: signature.extension };
}

export type CvStorageResult =
  | { stored: true; pathname: string }
  | { stored: false; reason: "not_configured" | "upload_failed" };

/**
 * Stores a validated CV in Vercel Blob under `access: "private"` — the
 * resulting pathname is not a fetchable public URL; reading it back requires
 * an authenticated server-side `get()`/`head()` call with the same token
 * (see @vercel/blob docs). The filename is a random UUID, never the
 * applicant's name or the original filename, so nothing in the storage path
 * identifies the person.
 *
 * No admin UI reads these back yet — there's no authenticated internal area
 * in this repo to build one into. Until one exists, retrieval is a manual
 * Vercel dashboard/API operation. See docs/FORMS.md.
 */
export async function storeCv(file: File, extension: string): Promise<CvStorageResult> {
  const token = env.blobToken();
  if (!token) {
    console.warn("[forms] Cv niet opgeslagen: BLOB_READ_WRITE_TOKEN ontbreekt in deze omgeving.");
    return { stored: false, reason: "not_configured" };
  }

  try {
    const pathname = `sollicitaties/${randomUUID()}.${extension}`;
    const blob = await put(pathname, file, {
      access: "private",
      contentType: file.type || undefined,
      token,
    });
    return { stored: true, pathname: blob.pathname };
  } catch (err) {
    console.error("[forms] Uploaden van cv naar Vercel Blob is mislukt:", err);
    return { stored: false, reason: "upload_failed" };
  }
}
