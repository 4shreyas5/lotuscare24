import { CircleCheckBig } from "lucide-react";

function FormSuccess({
  title,
  message,
  devNote,
}: {
  title: string;
  message?: string;
  devNote?: string;
}) {
  return (
    <div
      role="status"
      className="flex flex-col items-start gap-3 rounded-xl border border-primary/25 bg-primary/5 p-6"
    >
      <CircleCheckBig className="size-6 text-primary" aria-hidden="true" />
      <p className="text-base font-medium text-foreground">{title}</p>
      {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
      {devNote ? <p className="text-xs text-muted-foreground/70">{devNote}</p> : null}
    </div>
  );
}

export { FormSuccess };
