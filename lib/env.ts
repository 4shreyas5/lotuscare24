function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

/** Central, typed access to form-related environment variables. Never hard-code
 * the values these read — see .env.example and docs/FORMS.md. */
export const env = {
  resendApiKey: () => readEnv("RESEND_API_KEY"),
  resendFromEmail: () => readEnv("RESEND_FROM_EMAIL"),
  contactEmail: () => readEnv("CONTACT_EMAIL"),
  applicationEmail: () => readEnv("APPLICATION_EMAIL"),
  blobToken: () => readEnv("BLOB_READ_WRITE_TOKEN"),
};

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}
