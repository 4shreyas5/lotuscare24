function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateRequired(
  value: FormDataEntryValue | null,
  fieldLabel: string
): string | undefined {
  if (asString(value).length === 0) {
    return `${fieldLabel} is verplicht.`;
  }
  return undefined;
}

export function validateEmail(
  value: FormDataEntryValue | null
): string | undefined {
  const str = asString(value);
  if (!str) return "E-mailadres is verplicht.";
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(str)) return "Voer een geldig e-mailadres in.";
  return undefined;
}

export function validatePhone(
  value: FormDataEntryValue | null,
  required = false
): string | undefined {
  const str = asString(value);
  if (!str) return required ? "Telefoonnummer is verplicht." : undefined;
  const pattern = /^[0-9+()\s-]{6,20}$/;
  if (!pattern.test(str)) return "Voer een geldig telefoonnummer in.";
  return undefined;
}

export function validateMaxLength(
  value: FormDataEntryValue | null,
  fieldLabel: string,
  maxLength: number
): string | undefined {
  const str = asString(value);
  if (str.length > maxLength) {
    return `${fieldLabel} mag maximaal ${maxLength} tekens bevatten.`;
  }
  return undefined;
}
