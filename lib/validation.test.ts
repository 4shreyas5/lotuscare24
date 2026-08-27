import { describe, expect, it } from "vitest";

import { validateEmail, validateMaxLength, validatePhone, validateRequired } from "@/lib/validation";

describe("validateRequired", () => {
  it("rejects empty values", () => {
    expect(validateRequired("", "Naam")).toBe("Naam is verplicht.");
    expect(validateRequired("   ", "Naam")).toBe("Naam is verplicht.");
    expect(validateRequired(null, "Naam")).toBe("Naam is verplicht.");
  });

  it("accepts a non-empty value", () => {
    expect(validateRequired("Jan", "Naam")).toBeUndefined();
  });
});

describe("validateEmail", () => {
  it("rejects missing or malformed addresses", () => {
    expect(validateEmail("")).toBe("E-mailadres is verplicht.");
    expect(validateEmail("not-an-email")).toBe("Voer een geldig e-mailadres in.");
  });

  it("accepts a well-formed address", () => {
    expect(validateEmail("jan@example.com")).toBeUndefined();
  });
});

describe("validatePhone", () => {
  it("is optional by default", () => {
    expect(validatePhone("")).toBeUndefined();
  });

  it("is required when asked", () => {
    expect(validatePhone("", true)).toBe("Telefoonnummer is verplicht.");
  });

  it("rejects an invalid format", () => {
    expect(validatePhone("abc")).toBe("Voer een geldig telefoonnummer in.");
  });

  it("accepts a valid Dutch-style number", () => {
    expect(validatePhone("06-12345678")).toBeUndefined();
  });
});

describe("validateMaxLength", () => {
  it("accepts a value within the limit", () => {
    expect(validateMaxLength("hallo", "Bericht", 10)).toBeUndefined();
  });

  it("rejects a value over the limit", () => {
    expect(validateMaxLength("a".repeat(11), "Bericht", 10)).toBe(
      "Bericht mag maximaal 10 tekens bevatten."
    );
  });
});
