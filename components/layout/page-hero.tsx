import type { ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { PlaceholderImage, type ImageVariant } from "@/components/media/placeholder-image";

type PageHeroVariant = "editorial" | "hub" | "minimal" | "fullBleed" | "careers";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  /** Only used when size="large" (or a variant that implies it). Inner-page heroes stay text-only. */
  image?: { src?: string; alt: string };
  /**
   * A named preset for size/align/imageVariant. Explicit props below still
   * override individual pieces of the preset. "fullBleed"/"careers" render an
   * entirely different composition (image-as-background) — see docs/DESIGN-SYSTEM.md.
   */
  variant?: PageHeroVariant;
  /** Which side the image sits on. Default "right". */
  imagePosition?: "left" | "right";
  /**
   * Passed through to PlaceholderImage to control crop/aspect. Omit for the
   * original behaviour (a contained portrait-ratio, rounded-2xl image) — note
   * this is NOT the same as PlaceholderImage's "portrait" variant, which is a
   * different (taller) preset; pass it explicitly if that taller crop is wanted.
   */
  imageVariant?: ImageVariant;
  align?: "left" | "center";
  size?: "default" | "large";
  /** Extra vertical padding and a narrower text column, for quieter/more contemplative subjects. */
  spacious?: boolean;
  className?: string;
};

const variantPresets: Partial<
  Record<PageHeroVariant, Pick<PageHeroProps, "size" | "align" | "imageVariant">>
> = {
  editorial: { size: "large", imageVariant: "editorial" },
  hub: { size: "large", imageVariant: "atmospheric" },
  minimal: { size: "default", align: "center" },
};

/**
 * Shared hero — one component covering five archetypes (see docs/DESIGN-SYSTEM.md):
 * editorial (asymmetric image), hub (image-led index pages), minimal (text-only,
 * for FAQ/legal/quality), and fullBleed/careers (image-as-background, used
 * sparingly — currently only /werken-bij). `variant` is a shorthand preset;
 * any explicit prop still overrides it, so existing callers passing their own
 * imagePosition/imageVariant/size are unaffected.
 */
function PageHero({
  eyebrow,
  title,
  intro,
  actions,
  image,
  variant,
  imagePosition,
  imageVariant,
  align,
  size,
  spacious = false,
  className,
}: PageHeroProps) {
  const preset = variant ? variantPresets[variant] : undefined;
  const resolvedSize = size ?? preset?.size ?? "default";
  const resolvedAlign = align ?? preset?.align ?? "left";
  const resolvedImagePosition = imagePosition ?? "right";
  const resolvedImageVariant = imageVariant ?? preset?.imageVariant;

  if (variant === "fullBleed" || variant === "careers") {
    return (
      <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-primary sm:min-h-[70svh]">
        {image?.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover photo-warm"
          />
        ) : null}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/75 via-black/30 to-transparent"
        />
        <Container size="default" className="relative w-full pt-28 pb-12 sm:pb-16">
          <div className="max-w-2xl">
            <Reveal>
              {eyebrow ? (
                <span className="text-sm font-medium tracking-wide text-primary-foreground/80 uppercase">
                  {eyebrow}
                </span>
              ) : null}
              <h1 className="text-display-md mt-4 text-balance font-heading font-medium text-primary-foreground">
                {title}
              </h1>
            </Reveal>
            {intro ? (
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  {intro}
                </p>
              </Reveal>
            ) : null}
            {actions ? (
              <Reveal delay={0.2} className="mt-7 flex flex-wrap items-center gap-3">
                {actions}
              </Reveal>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  const hasImage = resolvedSize === "large" && Boolean(image);

  return (
    <Section
      className={cn(
        spacious
          ? "pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32"
          : "pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24",
        className
      )}
    >
      <div
        className={cn(
          "grid items-center gap-10 lg:gap-16",
          hasImage ? "lg:grid-cols-2" : "grid-cols-1"
        )}
      >
        <Reveal
          className={cn(
            "flex flex-col gap-6",
            !hasImage && "max-w-2xl",
            hasImage && spacious && "max-w-md",
            !hasImage && resolvedAlign === "center" && "mx-auto items-center text-center",
            hasImage && resolvedImagePosition === "left" && "lg:order-2"
          )}
        >
          {eyebrow ? (
            <span className="text-sm font-medium tracking-wide text-primary uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h1
            className={cn(
              "text-balance leading-[1.1] font-medium",
              resolvedSize === "large"
                ? "text-display-md"
                : "text-3xl sm:text-4xl lg:text-5xl"
            )}
          >
            {title}
          </h1>
          {intro ? (
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {intro}
            </p>
          ) : null}
          {actions ? (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {actions}
            </div>
          ) : null}
        </Reveal>
        {hasImage && image ? (
          <Reveal delay={0.1} className={cn(resolvedImagePosition === "left" && "lg:order-1")}>
            <PlaceholderImage
              src={image.src}
              alt={image.alt}
              {...(resolvedImageVariant ? { variant: resolvedImageVariant } : { ratio: "portrait" as const })}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}

export { PageHero };
