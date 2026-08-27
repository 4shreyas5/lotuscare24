"use client";

import { useActionState } from "react";

import { cn } from "@/lib/utils";
import {
  submitKennismakenForm,
  type KennismakenFormState,
} from "@/lib/actions/kennismaken";
import { FormField } from "@/components/forms/form-field";
import { FormErrorBanner } from "@/components/forms/form-error-banner";
import { FormSuccess } from "@/components/forms/form-success";
import { HoneypotField } from "@/components/forms/honeypot-field";
import { SubmitButton } from "@/components/forms/submit-button";

const contactMethods = [
  { value: "telefonisch", label: "Telefonisch" },
  { value: "e-mail", label: "Per e-mail" },
  { value: "geen-voorkeur", label: "Geen voorkeur" },
];

const initialState: KennismakenFormState = { status: "idle", errors: {} };

function KennismakenForm() {
  const [state, formAction] = useActionState(
    submitKennismakenForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <FormSuccess title="Aanvraag verzonden" message={state.message} devNote={state.devNote} />
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

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-foreground">
          Gewenste contactmethode
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        </legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          {contactMethods.map((method) => (
            <label
              key={method.value}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <input
                type="radio"
                name="contactmethode"
                value={method.value}
                required
                className="size-4 accent-primary"
                aria-describedby={
                  state.errors.contactmethode ? "contactmethode-error" : undefined
                }
              />
              {method.label}
            </label>
          ))}
        </div>
        {state.errors.contactmethode ? (
          <p
            id="contactmethode-error"
            role="alert"
            className="text-xs font-medium text-destructive"
          >
            {state.errors.contactmethode}
          </p>
        ) : null}
      </fieldset>

      <FormField
        label="Korte omschrijving van uw hulpvraag"
        name="omschrijving"
        multiline
        rows={4}
        required
        hint="Geen medische details nodig — een korte omschrijving is voldoende om het gesprek voor te bereiden."
        error={state.errors.omschrijving}
      />

      <p className={cn("text-xs text-muted-foreground")}>
        Door dit formulier te versturen gaat u ermee akkoord dat wij uw
        gegevens gebruiken om contact met u op te nemen. Zie onze{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          privacyverklaring
        </a>
        .
      </p>
      <SubmitButton label="Vraag een kennismaking aan" className="sm:self-start" />
    </form>
  );
}

export { KennismakenForm };
