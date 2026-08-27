"use client";

import { useActionState } from "react";

import {
  submitContactForm,
  type ContactFormState,
} from "@/lib/actions/contact";
import { FormField } from "@/components/forms/form-field";
import { FormErrorBanner } from "@/components/forms/form-error-banner";
import { FormSuccess } from "@/components/forms/form-success";
import { HoneypotField } from "@/components/forms/honeypot-field";
import { SubmitButton } from "@/components/forms/submit-button";

const initialState: ContactFormState = { status: "idle", errors: {} };

function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <FormSuccess title="Bericht verzonden" message={state.message} devNote={state.devNote} />
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <HoneypotField />
      {state.status === "error" && state.message ? (
        <FormErrorBanner message={state.message} />
      ) : null}
      <FormField
        label="Naam"
        name="naam"
        autoComplete="name"
        required
        error={state.errors.naam}
      />
      <FormField
        label="E-mailadres"
        name="email"
        type="email"
        autoComplete="email"
        required
        error={state.errors.email}
      />
      <FormField
        label="Telefoonnummer"
        name="telefoon"
        type="tel"
        autoComplete="tel"
        hint="Optioneel"
        error={state.errors.telefoon}
      />
      <FormField
        label="Onderwerp"
        name="onderwerp"
        required
        error={state.errors.onderwerp}
      />
      <FormField
        label="Bericht"
        name="bericht"
        multiline
        rows={5}
        required
        error={state.errors.bericht}
      />
      <p className="text-xs text-muted-foreground">
        Door dit formulier te versturen gaat u ermee akkoord dat wij uw
        gegevens gebruiken om contact met u op te nemen. Zie onze{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          privacyverklaring
        </a>
        .
      </p>
      <SubmitButton label="Verstuur bericht" className="sm:self-start" />
    </form>
  );
}

export { ContactForm };
