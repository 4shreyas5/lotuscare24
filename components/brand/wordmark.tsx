import { cn } from "@/lib/utils";

/**
 * Placeholder wordmark treatment — a real logo/brand mark is explicitly deferred
 * (see docs/CONTENT-REQUIREMENTS.md). Pure typographic lockup, no icon.
 */
function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading text-xl font-medium tracking-tight text-foreground",
        className
      )}
    >
      Lotus<span className="text-primary">Care</span>
      <span className="text-accent">24</span>
    </span>
  );
}

export { Wordmark };
