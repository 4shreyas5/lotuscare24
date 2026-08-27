import { TriangleAlert } from "lucide-react";

/** Form-level error banner for failures that aren't tied to one field (rate
 * limiting, a failed email send) — field-specific errors stay inline on the
 * relevant FormField instead. */
function FormErrorBanner({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4"
    >
      <TriangleAlert className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" />
      <p className="text-sm text-foreground">{message}</p>
    </div>
  );
}

export { FormErrorBanner };
