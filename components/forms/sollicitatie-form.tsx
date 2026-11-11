"use client";

import { useActionState } from "react";
import { CloudUpload } from "lucide-react";

import {
  submitSollicitatieForm,
  type SollicitatieFormState,
} from "@/lib/actions/sollicitatie";
import { vacancies, openSollicitatieOption } from "@/lib/vacancies";
import { FormField } from "@/components/forms/form-field";
import { FormErrorBanner } from "@/components/forms/form-error-banner";
import { FormSuccess } from "@/components/forms/form-success";
import { HoneypotField } from "@/components/forms/honeypot-field";
import { SubmitButton } from "@/components/forms/submit-button";

const initialState: SollicitatieFormState = { status: "idle", errors: {} };

function SollicitatieForm({ defaultFunctie }: { defaultFunctie?: string }) {
  const [state, formAction] = useActionState(
    submitSollicitatieForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <FormSuccess title="Sollicitatie verzonden" message={state.message} devNote={state.devNote} />
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      encType="multipart/form-data"
      className="flex flex-col gap-5"
    >
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

      <div className="flex flex-col gap-1.5">
        <label htmlFor="functie" className="text-sm font-medium text-foreground">
          Functie
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        </label>
        <select
          id="functie"
          name="functie"
          required
          defaultValue={defaultFunctie ?? ""}
          aria-invalid={state.errors.functie ? true : undefined}
          aria-describedby={state.errors.functie ? "functie-error" : undefined}
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-base text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
        >
          <option value="" disabled>
            Kies een functie
          </option>
          {vacancies.map((vacancy) => (
            <option key={vacancy.slug} value={vacancy.slug}>
              {vacancy.title}
            </option>
          ))}
          <option value={openSollicitatieOption}>Open sollicitatie</option>
        </select>
        {state.errors.functie ? (
          <p id="functie-error" role="alert" className="text-xs font-medium text-destructive">
            {state.errors.functie}
          </p>
        ) : null}
      </div>

      <FormField
        label="Motivatie"
        name="motivatie"
        multiline
        rows={5}
        required
        hint="Vertel kort waarom u bij Lotus Vitaal wilt werken."
        error={state.errors.motivatie}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cv" className="text-sm font-medium text-foreground">
          Cv <span className="text-muted-foreground">(optioneel)</span>
        </label>
        <div className="flex items-center gap-3 rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
          <CloudUpload className="size-4 shrink-0" aria-hidden="true" />
          <input
            id="cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            aria-invalid={state.errors.cv ? true : undefined}
            aria-describedby={state.errors.cv ? "cv-error" : "cv-hint"}
            className="w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-secondary-foreground"
          />
        </div>
        <p id="cv-hint" className="text-xs text-muted-foreground">
          PDF of Word-document, maximaal 5 MB.
        </p>
        {state.errors.cv ? (
          <p id="cv-error" role="alert" className="text-xs font-medium text-destructive">
            {state.errors.cv}
          </p>
        ) : null}
      </div>

      <p className="text-xs text-muted-foreground">
        Door dit formulier te versturen gaat u ermee akkoord dat wij uw
        gegevens gebruiken om uw sollicitatie te behandelen. Zie onze{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          privacyverklaring
        </a>
        .
      </p>
      <SubmitButton label="Verstuur sollicitatie" className="sm:self-start" />
    </form>
  );
}

export { SollicitatieForm };
