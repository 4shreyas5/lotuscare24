"use server";

import { env } from "@/lib/env";
import { sendNotificationEmail } from "@/lib/forms/email";
import { getRateLimitKey, isRateLimited } from "@/lib/forms/rate-limit";
import { isLikelySpam } from "@/lib/forms/spam";
import { errorState, type FormState, notConfiguredDevNote, successState } from "@/lib/forms/state";
import { validateEmail, validateMaxLength, validatePhone, validateRequired } from "@/lib/validation";

export type KennismakenFields =
  | "naam"
  | "email"
  | "telefoon"
  | "contactmethode"
  | "omschrijving";
export type KennismakenFormState = FormState<KennismakenFields>;

const OMSCHRIJVING_MAX_LENGTH = 1000;
const SUCCESS_MESSAGE =
  "Bedankt. We nemen op de door u gekozen manier contact met u op om een kennismaking in te plannen.";

/** Deliberately does not collect health/medical details, only a short
 * free-text description of the care question — see CLAUDE.md §"IMPORTANT
 * PRIVACY / HEALTHCARE RULE". */
export async function submitKennismakenForm(
  _prevState: KennismakenFormState,
  formData: FormData
): Promise<KennismakenFormState> {
  if (isLikelySpam(formData)) {
    return successState(SUCCESS_MESSAGE);
  }

  if (isRateLimited(await getRateLimitKey("kennismaken"))) {
    return errorState(
      {},
      "Er zijn zojuist al meerdere aanvragen vanaf dit netwerk verstuurd. Probeert u het over enkele minuten opnieuw."
    );
  }

  const errors: Partial<Record<KennismakenFields, string>> = {};

  const naam = formData.get("naam");
  const naamError = validateRequired(naam, "Naam");
  if (naamError) errors.naam = naamError;

  const email = formData.get("email");
  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const telefoon = formData.get("telefoon");
  const telefoonError = validatePhone(telefoon, false);
  if (telefoonError) errors.telefoon = telefoonError;

  const contactmethode = formData.get("contactmethode");
  const contactmethodeError = validateRequired(contactmethode, "Gewenste contactmethode");
  if (contactmethodeError) errors.contactmethode = contactmethodeError;

  const omschrijving = formData.get("omschrijving");
  const omschrijvingError =
    validateRequired(omschrijving, "Omschrijving van de hulpvraag") ??
    validateMaxLength(omschrijving, "Omschrijving van de hulpvraag", OMSCHRIJVING_MAX_LENGTH);
  if (omschrijvingError) errors.omschrijving = omschrijvingError;

  if (Object.keys(errors).length > 0) {
    return errorState(errors);
  }

  const naamStr = String(naam ?? "").trim();
  const emailStr = String(email ?? "").trim();
  const telefoonStr = String(telefoon ?? "").trim();
  const contactmethodeStr = String(contactmethode ?? "").trim();
  const omschrijvingStr = String(omschrijving ?? "").trim();

  const result = await sendNotificationEmail({
    to: env.contactEmail(),
    subject: `Nieuwe kennismakingsaanvraag van ${naamStr}`,
    replyTo: emailStr,
    text: [
      `Naam: ${naamStr}`,
      `E-mailadres: ${emailStr}`,
      telefoonStr ? `Telefoonnummer: ${telefoonStr}` : null,
      `Gewenste contactmethode: ${contactmethodeStr}`,
      "",
      `Omschrijving van de hulpvraag:`,
      omschrijvingStr,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (!result.delivered && result.reason === "send_failed") {
    return errorState(
      {},
      "Er ging iets mis bij het versturen van uw aanvraag. Probeert u het opnieuw, of neem telefonisch contact met ons op."
    );
  }

  return successState(SUCCESS_MESSAGE, result.delivered ? undefined : notConfiguredDevNote());
}
