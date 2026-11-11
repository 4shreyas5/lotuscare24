import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const ratioClasses = {
  video: "aspect-video",
  portrait: "aspect-3/4",
  tall: "aspect-3/5",
  square: "aspect-square",
  wide: "aspect-16/7",
} as const;

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-lg",
  lg: "rounded-2xl",
} as const;

type ImageRatio = keyof typeof ratioClasses;
type ImageRadius = keyof typeof radiusClasses;

/**
 * Named compositions for the editorial redesign — each is a sensible default for
 * ratio/radius, always overridable via the explicit `ratio`/`radius` props. `split`
 * matches the original component's behaviour exactly, so every pre-existing caller
 * (which always passes `ratio` explicitly) is unaffected by this default.
 */
const variantDefaults: Record<string, { ratio?: ImageRatio; radius: ImageRadius }> = {
  split: { ratio: "square", radius: "lg" },
  editorial: { ratio: "tall", radius: "sm" },
  portrait: { ratio: "tall", radius: "sm" },
  overlap: { ratio: "portrait", radius: "sm" },
  inset: { ratio: "square", radius: "lg" },
  atmospheric: { ratio: "wide", radius: "none" },
  fullBleed: { radius: "none" },
};

type ImageVariant = keyof typeof variantDefaults;

type PlaceholderImageProps = {
  /** Real photography source. Omit to render a clearly-marked placeholder — see docs/CONTENT-REQUIREMENTS.md. */
  src?: string;
  alt: string;
  ratio?: ImageRatio;
  /** Legacy corner control — `true` (default) = radius "lg", `false` = radius "none". Prefer `radius` in new code. */
  rounded?: boolean;
  /** Explicit corner treatment; overrides `rounded` and the variant default. */
  radius?: ImageRadius;
  /** Named composition — sets sensible ratio/radius defaults. Defaults to "split" (original behaviour). */
  variant?: ImageVariant;
  /** Apply the shared warm photographic treatment. Default true. */
  treatment?: boolean;
  /** Gradient scrim for legibility when text overlaps the image. */
  overlay?: "none" | "bottom";
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Shared image treatment — a design tool with several intentional compositions
 * (see `variant`), not just a contained placeholder box. Renders an explicit
 * "beeldmateriaal volgt" placeholder when no `src` is given. Never render stock
 * imagery here implying real Lotus Vitaal staff or clients (docs/DESIGN-SYSTEM.md).
 */
function PlaceholderImage({
  src,
  alt,
  ratio,
  rounded,
  radius,
  variant = "split",
  treatment = true,
  overlay = "none",
  caption,
  className,
  priority,
  sizes = "100vw",
}: PlaceholderImageProps) {
  const preset = variantDefaults[variant];
  const resolvedRatio = ratio ?? preset.ratio;
  const resolvedRadius =
    radius ?? (rounded === false ? "none" : rounded === true ? "lg" : preset.radius);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        resolvedRatio ? ratioClasses[resolvedRatio] : "h-full w-full",
        radiusClasses[resolvedRadius],
        className
      )}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", treatment && "photo-warm")}
          />
          {overlay === "bottom" ? (
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/60 via-black/15 to-transparent"
            />
          ) : null}
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border text-center text-muted-foreground">
          <ImageIcon className="size-6" aria-hidden="true" />
          <span className="max-w-64 px-4 text-xs text-balance">
            {caption ?? `Beeldmateriaal volgt — ${alt}`}
          </span>
        </div>
      )}
    </div>
  );
}

export { PlaceholderImage };
export type { ImageVariant, ImageRatio, ImageRadius };
