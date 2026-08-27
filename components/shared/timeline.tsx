import { PlaceholderImage } from "@/components/media/placeholder-image";
import type { ImageAsset } from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";

type TimelineStep = {
  title: string;
  description: string;
  /** Occasional imagery only — pass on a step that deserves a moment, not every step. */
  image?: ImageAsset;
};

/**
 * Vertical numbered journey, not a UI-component-feeling stepper: large filled
 * numeral badges, generous vertical rhythm, and imagery on the odd step where
 * it earns its place.
 */
function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="flex flex-col gap-14 border-l border-border pl-10 sm:gap-16 sm:pl-14">
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.06} className="relative">
          {/* Badge centered on the border-l line: offset = -(half diameter) - (ol padding). */}
          <span
            className="absolute top-0 -left-15 flex size-10 items-center justify-center rounded-full bg-primary font-heading text-base text-primary-foreground sm:-left-21 sm:size-14 sm:text-lg"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <h3 className="text-xl font-medium text-foreground sm:text-2xl">
            {step.title}
          </h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {step.description}
          </p>
          {step.image ? (
            <PlaceholderImage
              src={step.image.src}
              alt={step.image.alt}
              variant="editorial"
              className="mt-6 max-w-md"
              sizes="(min-width: 1024px) 30vw, 80vw"
            />
          ) : null}
        </Reveal>
      ))}
    </ol>
  );
}

export { Timeline };
export type { TimelineStep };
