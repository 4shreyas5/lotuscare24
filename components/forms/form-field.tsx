import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  multiline?: boolean;
  rows?: number;
  autoComplete?: string;
  placeholder?: string;
  defaultValue?: string;
  hint?: string;
  className?: string;
};

/** Accessible label + input/textarea + error, wired for Server Action `useActionState` field errors. */
function FormField({
  label,
  name,
  type = "text",
  required,
  error,
  multiline,
  rows = 4,
  autoComplete,
  placeholder,
  defaultValue,
  hint,
  className,
}: FormFieldProps) {
  const errorId = `${name}-error`;
  const hintId = `${name}-hint`;
  const describedBy =
    [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {multiline ? (
        <Textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(className)}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(className)}
        />
      )}
      {hint ? (
        <p id={hintId} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { FormField };
