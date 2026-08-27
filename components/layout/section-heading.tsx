import * as React from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  actions,
  className,
  as = "h2",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  actions?: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const Heading = as;

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        actions && align === "left" && "sm:flex-row sm:items-end sm:justify-between sm:gap-8",
        className
      )}
    >
      <div className={cn("flex max-w-2xl flex-col gap-3", align === "center" && "items-center")}>
        {eyebrow ? (
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
        ) : null}
        <Heading className="text-balance text-2xl leading-tight font-medium sm:text-3xl lg:text-4xl">
          {title}
        </Heading>
        {intro ? (
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </Reveal>
  );
}

export { SectionHeading };
