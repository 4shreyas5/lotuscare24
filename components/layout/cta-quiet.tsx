import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

type CTAQuietProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  actions: ReactNode;
  className?: string;
};

/**
 * CTA variant B — "Quiet": minimal warm-ivory close, no image. For informational
 * pages (FAQ, kwaliteit, zorgplanning, hoe het werkt, and similar) where the page
 * itself has already made the case and the close just needs to stay out of the way.
 */
function CTAQuiet({ eyebrow, title, intro, actions, className }: CTAQuietProps) {
  return (
    <Section className={cn("border-t border-border", className)}>
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        {eyebrow ? (
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-balance text-2xl leading-tight font-medium sm:text-3xl">
          {title}
        </h2>
        {intro ? (
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        ) : null}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {actions}
        </div>
      </Reveal>
    </Section>
  );
}

export { CTAQuiet };
