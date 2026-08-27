// Deliberately not "website"/"url"/"address2" or similar — common honeypot
// names that browser autofill sometimes matches against saved profile data
// even with autoComplete="off", which would false-flag a real visitor.
export const HONEYPOT_FIELD_NAME = "bericht_referentiecode";
export const TIMESTAMP_FIELD_NAME = "form_rendered_at";

/** Genuine visitors take at least this long to read and fill a field; bots
 * that submit immediately after fetching the page trip this. */
const MIN_FILL_TIME_MS = 1500;

function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

/** Combines a classic honeypot field (a decoy input real users never see or
 * fill) with a minimum-fill-time check (a hidden timestamp set when the form
 * mounted). Either signal alone has false positives; together they're a
 * reasonable, accessible, zero-dependency first line of defense. Callers
 * should treat a positive as spam without revealing why — see
 * lib/actions/*.ts, which return the normal success state without sending
 * anything, so the sender learns nothing about the check. */
export function isLikelySpam(formData: FormData): boolean {
  if (asString(formData.get(HONEYPOT_FIELD_NAME)).trim().length > 0) {
    return true;
  }

  const renderedAt = Number(asString(formData.get(TIMESTAMP_FIELD_NAME)));
  if (Number.isFinite(renderedAt) && renderedAt > 0) {
    if (Date.now() - renderedAt < MIN_FILL_TIME_MS) {
      return true;
    }
  }

  return false;
}
