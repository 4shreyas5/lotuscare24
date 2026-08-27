import { isProduction } from "@/lib/env";

/** Shared shape for every form's `useActionState`. `errors` is keyed by field
 * name for inline messages; `message` is a form-level message (used for the
 * success confirmation, or for non-field errors like rate limiting). */
export type FormState<TFields extends string = string> = {
  status: "idle" | "success" | "error";
  errors: Partial<Record<TFields, string>>;
  message?: string;
  /** Development-only note (e.g. "email not sent, no API key configured").
   * Never populated in production; see notConfiguredDevNote(). */
  devNote?: string;
};

export function idleState<TFields extends string>(): FormState<TFields> {
  return { status: "idle", errors: {} };
}

export function errorState<TFields extends string>(
  errors: Partial<Record<TFields, string>>,
  message?: string
): FormState<TFields> {
  return { status: "error", errors, message };
}

export function successState<TFields extends string>(
  message: string,
  devNote?: string
): FormState<TFields> {
  return { status: "success", errors: {}, message, devNote };
}

/** Dev-only explanation shown under a success message when email delivery was
 * skipped because Resend isn't configured in this environment. Never shown in
 * production — there it's a server-log-only warning, since a misconfigured
 * production deployment is an ops problem, not something to expose to visitors. */
export function notConfiguredDevNote(): string | undefined {
  if (isProduction()) return undefined;
  return "Ontwikkelmodus: e-mail is niet verzonden (RESEND_API_KEY, RESEND_FROM_EMAIL of het ontvanger-e-mailadres ontbreekt). Zie serverlogs.";
}
