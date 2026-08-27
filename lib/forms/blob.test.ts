import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { storeCv, validateCvFile } from "@/lib/forms/blob";

function fileFromBytes(bytes: number[], name: string, type: string): File {
  return new File([new Uint8Array(bytes)], name, { type });
}

const PDF_HEADER = [0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x37]; // "%PDF-1.7"
const DOCX_HEADER = [0x50, 0x4b, 0x03, 0x04, 0, 0, 0, 0]; // zip/OOXML
const DOC_HEADER = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]; // OLE

describe("validateCvFile", () => {
  it("accepts a real pdf by signature", async () => {
    const file = fileFromBytes(PDF_HEADER, "cv.pdf", "application/pdf");
    const result = await validateCvFile(file);
    expect(result).toEqual({ valid: true, extension: "pdf" });
  });

  it("accepts a real docx by signature", async () => {
    const file = fileFromBytes(DOCX_HEADER, "cv.docx", "application/vnd.openxmlformats");
    const result = await validateCvFile(file);
    expect(result).toEqual({ valid: true, extension: "docx" });
  });

  it("accepts a real doc by signature", async () => {
    const file = fileFromBytes(DOC_HEADER, "cv.doc", "application/msword");
    const result = await validateCvFile(file);
    expect(result).toEqual({ valid: true, extension: "doc" });
  });

  it("rejects a file whose bytes don't match any allowed signature, regardless of claimed type", async () => {
    const fakeExe = [0x4d, 0x5a, 0x90, 0x00, 0x03, 0x00, 0x00, 0x00]; // "MZ" — Windows executable
    const file = fileFromBytes(fakeExe, "cv.pdf", "application/pdf");
    const result = await validateCvFile(file);
    expect(result.valid).toBe(false);
  });

  it("rejects an empty file", async () => {
    const file = fileFromBytes([], "cv.pdf", "application/pdf");
    const result = await validateCvFile(file);
    expect(result.valid).toBe(false);
  });

  it("rejects a file over 5MB", async () => {
    const big = new Uint8Array(5 * 1024 * 1024 + 1);
    big.set(PDF_HEADER);
    const file = new File([big], "cv.pdf", { type: "application/pdf" });
    const result = await validateCvFile(file);
    expect(result.valid).toBe(false);
  });
});

describe("storeCv", () => {
  const originalToken = process.env.BLOB_READ_WRITE_TOKEN;

  beforeEach(() => {
    delete process.env.BLOB_READ_WRITE_TOKEN;
  });

  afterEach(() => {
    if (originalToken === undefined) delete process.env.BLOB_READ_WRITE_TOKEN;
    else process.env.BLOB_READ_WRITE_TOKEN = originalToken;
  });

  it("reports not_configured instead of throwing when no token is set", async () => {
    const file = fileFromBytes(PDF_HEADER, "cv.pdf", "application/pdf");
    const result = await storeCv(file, "pdf");
    expect(result).toEqual({ stored: false, reason: "not_configured" });
  });
});
