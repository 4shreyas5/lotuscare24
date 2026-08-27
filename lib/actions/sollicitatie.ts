"use server";

import { env } from "@/lib/env";
import { storeCv, validateCvFile } from "@/lib/forms/blob";
import { sendNotificationEmail } from "@/lib/forms/email";
import { getRateLimitKey, isRateLimited } from "@/lib/forms/rate-limit";
import { isLikelySpam } from "@/lib/forms/spam";
import { errorState, type FormState, notConfiguredDevNote, successState } from "@/lib/forms/state";
import { validateEmail, validateMaxLength, validatePhone, validateRequired } from "@/lib/validation";
import { openSollicitatieOption, vacancies } from "@/lib/vacancies";

export type SollicitatieFields = "naam" | "email" | "telefoon" | "functie" | "motivatie" | "cv";
export type SollicitatieFormState = FormState<SollicitatieFields>;

const MOTIVATIE_MAX_LENGTH = 2000;

function functieLabel(slug: string): string {
  if (slug === openSollicitatieOption) return "Open sollicitatie";
  return vacancies.find((v) => v.slug === slug)?.title ?? slug;
}

export async function submitSollicitatieForm(
  _prevState: SollicitatieFormState,
  formData: FormData
): Promise<SollicitatieFormState> {
  if (isLikelySpam(formData)) {
    return successState("Bedankt voor uw sollicitatie. We hebben uw gegevens goed ontvangen.");
  }

  if (isRateLimited(await getRateLimitKey("sollicitatie"))) {
    return errorState(
      {},
      "Er zijn zojuist al meerdere sollicitaties vanaf dit netwerk verstuurd. Probeert u het over enkele minuten opnieuw."
    );
  }

  const errors: Partial<Record<SollicitatieFields, string>> = {};

  const naam = formData.get("naam");
  const naamError = validateRequired(naam, "Naam");
  if (naamError) errors.naam = naamError;

  const email = formData.get("email");
  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const telefoon = formData.get("telefoon");
  const telefoonError = validatePhone(telefoon, false);
  if (telefoonError) errors.telefoon = telefoonError;

  const functie = formData.get("functie");
  const functieError = validateRequired(functie, "Functie");
  if (functieError) errors.functie = functieError;

  const motivatie = formData.get("motivatie");
  const motivatieError =
    validateRequired(motivatie, "Motivatie") ??
    validateMaxLength(motivatie, "Motivatie", MOTIVATIE_MAX_LENGTH);
  if (motivatieError) errors.motivatie = motivatieError;

  const cv = formData.get("cv");
  const hasCv = cv instanceof File && cv.size > 0;
  let cvExtension: string | undefined;
  if (hasCv) {
    const cvValidation = await validateCvFile(cv);
    if (!cvValidation.valid) {
      errors.cv = cvValidation.reason;
    } else {
      cvExtension = cvValidation.extension;
    }
  }

  if (Object.keys(errors).length > 0) {
    return errorState(errors);
  }

  const naamStr = String(naam ?? "").trim();
  const emailStr = String(email ?? "").trim();
  const telefoonStr = String(telefoon ?? "").trim();
  const functieStr = String(functie ?? "").trim();
  const motivatieStr = String(motivatie ?? "").trim();

  let cvLine = "Cv: niet meegestuurd.";
  if (hasCv && cvExtension) {
    const storage = await storeCv(cv as File, cvExtension);
    cvLine =
      storage.stored
        ? `Cv: ontvangen en privé opgeslagen (${storage.pathname}).`
        : storage.reason === "not_configured"
          ? "Cv: ontvangen, maar cv-opslag is niet geconfigureerd in deze omgeving — vraag de kandidaat het cv later opnieuw te sturen."
          : "Cv: ontvangen, maar opslaan is mislukt — vraag de kandidaat het cv later opnieuw te sturen.";
  }

  const result = await sendNotificationEmail({
    to: env.applicationEmail(),
    subject: `Nieuwe sollicitatie: ${functieLabel(functieStr)} — ${naamStr}`,
    replyTo: emailStr,
    text: [
      `Naam: ${naamStr}`,
      `E-mailadres: ${emailStr}`,
      telefoonStr ? `Telefoonnummer: ${telefoonStr}` : null,
      `Functie: ${functieLabel(functieStr)}`,
      cvLine,
      "",
      "Motivatie:",
      motivatieStr,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (!result.delivered && result.reason === "send_failed") {
    return errorState(
      {},
      "Er ging iets mis bij het versturen van uw sollicitatie. Probeert u het opnieuw, of neem telefonisch contact met ons op."
    );
  }

  return successState(
    "Bedankt voor uw sollicitatie. We hebben uw gegevens goed ontvangen.",
    result.delivered ? undefined : notConfiguredDevNote()
  );
}
