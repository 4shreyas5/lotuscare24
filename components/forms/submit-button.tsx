"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

function SubmitButton({
  label,
  pendingLabel = "Bezig met verzenden…",
  className,
}: {
  label: string;
  pendingLabel?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className={className}>
      {pending ? pendingLabel : label}
    </Button>
  );
}

export { SubmitButton };
