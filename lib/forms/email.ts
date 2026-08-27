import { Resend } from "resend";

import { env } from "@/lib/env";

export type EmailResult =
  | { delivered: true }
  | { delivered: false; reason: "not_configured" | "send_failed" };

let cachedClient: Resend | null | undefined;

function getClient(): Resend | null {
  if (cachedClient !== undefined) return cachedClient;
  const apiKey = env.resendApiKey();
  cachedClient = apiKey ? new Resend(apiKey) : null;
  return cachedClient;
}

/** Sends a plain-text internal notification via Resend. Returns a result
 * instead of throwing so callers (the form actions) can decide how to react —
 * a missing API key is not the same failure mode as Resend rejecting the
 * request, and the two need different user-facing behavior. Never throws. */
export async function sendNotificationEmail(options: {
  to: string | undefined;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<EmailResult> {
  const resend = getClient();
  const from = env.resendFromEmail();

  if (!resend || !from || !options.to) {
    console.warn(
      `[forms] E-mail niet verzonden — ontbrekende configuratie (RESEND_API_KEY, RESEND_FROM_EMAIL of ontvanger-adres). Onderwerp: "${options.subject}".`
    );
    return { delivered: false, reason: "not_configured" };
  }

  try {
    const { error } = await resend.emails.send({
      from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      replyTo: options.replyTo,
    });

    if (error) {
      console.error("[forms] Resend gaf een fout terug:", error);
      return { delivered: false, reason: "send_failed" };
    }

    return { delivered: true };
  } catch (err) {
    console.error("[forms] Versturen van e-mail via Resend is mislukt:", err);
    return { delivered: false, reason: "send_failed" };
  }
}
