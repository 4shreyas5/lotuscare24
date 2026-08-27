"use server";

import { env } from "@/lib/env";
import { sendNotificationEmail } from "@/lib/forms/email";
import { getRateLimitKey, isRateLimited } from "@/lib/forms/rate-limit";
import { isLikelySpam } from "@/lib/forms/spam";
import { errorState, type FormState, notConfiguredDevNote, successState } from "@/lib/forms/state";
import { validateEmail, validateMaxLength, validatePhone, validateRequired } from "@/lib/validation";

export type ContactFields = "naam" | "email" | "telefoon" | "onderwerp" | "bericht";
export type ContactFormState = FormState<ContactFields>;

const MESSAGE_MAX_LENGTH = 2000;
const SUCCESS_MESSAGE = "Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (isLikelySpam(formData)) {
    return successState(SUCCESS_MESSAGE);
  }

  if (isRateLimited(await getRateLimitKey("contact"))) {
    return errorState(
      {},
      "Er zijn zojuist al meerdere berichten vanaf dit netwerk verstuurd. Probeert u het over enkele minuten opnieuw."
    );
  }

  const errors: Partial<Record<ContactFields, string>> = {};

  const naam = formData.get("naam");
  const naamError = validateRequired(naam, "Naam");
  if (naamError) errors.naam = naamError;

  const email = formData.get("email");
  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const telefoon = formData.get("telefoon");
  const telefoonError = validatePhone(telefoon, false);
  if (telefoonError) errors.telefoon = telefoonError;

  const onderwerp = formData.get("onderwerp");
  const onderwerpError = validateRequired(onderwerp, "Onderwerp");
  if (onderwerpError) errors.onderwerp = onderwerpError;

  const bericht = formData.get("bericht");
  const berichtError =
    validateRequired(bericht, "Bericht") ?? validateMaxLength(bericht, "Bericht", MESSAGE_MAX_LENGTH);
  if (berichtError) errors.bericht = berichtError;

  if (Object.keys(errors).length > 0) {
    return errorState(errors);
  }

  const naamStr = String(naam ?? "").trim();
  const emailStr = String(email ?? "").trim();
  const telefoonStr = String(telefoon ?? "").trim();
  const onderwerpStr = String(onderwerp ?? "").trim();
  const berichtStr = String(bericht ?? "").trim();

  const result = await sendNotificationEmail({
    to: env.contactEmail(),
    subject: `Nieuw contactformulier: ${onderwerpStr}`,
    replyTo: emailStr,
    text: [
      `Naam: ${naamStr}`,
      `E-mailadres: ${emailStr}`,
      telefoonStr ? `Telefoonnummer: ${telefoonStr}` : null,
      `Onderwerp: ${onderwerpStr}`,
      "",
      berichtStr,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (!result.delivered && result.reason === "send_failed") {
    return errorState(
      {},
      "Er ging iets mis bij het versturen van uw bericht. Probeert u het opnieuw, of neem telefonisch contact met ons op."
    );
  }

  return successState(SUCCESS_MESSAGE, result.delivered ? undefined : notConfiguredDevNote());
}
