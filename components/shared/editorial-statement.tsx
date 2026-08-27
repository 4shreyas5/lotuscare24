import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/**
 * A single considered sentence or two, set larger than body copy but smaller
 * than a section heading — a textual "beat" used to break up runs of lists
 * (service pages) or introduce a hub page, without another heading+paragraph
 * block or a card. Not for long-form content.
 */
function EditorialStatement({
  eyebrow,
  statement,
  align = "left",
  className,
}: {
  eyebrow?: string;
  statement: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-medium tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <p className="text-balance text-xl leading-snug font-medium text-foreground sm:text-2xl">
        {statement}
      </p>
    </Reveal>
  );
}

export { EditorialStatement };
