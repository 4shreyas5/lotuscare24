import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Newsreader italic pull-quote treatment — the site's recurring typographic
 * signature for a single emphasised statement (mantelzorg callout, testimonials
 * empty state). Not for ordinary body copy.
 */
function PullQuote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-balance font-heading text-2xl leading-snug font-normal italic text-foreground sm:text-3xl",
        className
      )}
    >
      {children}
    </p>
  );
}

export { PullQuote };
