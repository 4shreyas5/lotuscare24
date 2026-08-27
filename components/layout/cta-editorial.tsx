import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { PlaceholderImage } from "@/components/media/placeholder-image";

type CTAEditorialProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  actions: ReactNode;
  image: { src?: string; alt: string };
  imagePosition?: "left" | "right";
  className?: string;
};

/**
 * CTA variant A — "Editorial": large typography beside an asymmetric image. For the
 * homepage and the six service pages, each of which echoes its own hero photograph
 * here as a deliberate bookend rather than introducing a new image.
 */
function CTAEditorial({
  eyebrow,
  title,
  intro,
  actions,
  image,
  imagePosition = "right",
  className,
}: CTAEditorialProps) {
  return (
    <Section surface="muted" className={className}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal
          className={cn(
            "flex flex-col gap-5 lg:col-span-6",
            imagePosition === "left" && "lg:order-2"
          )}
        >
          {eyebrow ? (
            <span className="text-sm font-medium tracking-wide text-primary uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-display-md text-balance font-medium">{title}</h2>
          {intro ? (
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-3 pt-2">{actions}</div>
        </Reveal>
        <Reveal
          delay={0.1}
          className={cn("lg:col-span-6", imagePosition === "left" && "lg:order-1")}
        >
          <PlaceholderImage
            src={image.src}
            alt={image.alt}
            variant="editorial"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}

export { CTAEditorial };
