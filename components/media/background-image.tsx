import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/images";

const intensityClasses = {
  subtle: "opacity-20",
  soft: "opacity-30",
} as const;

const positionClasses = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
} as const;

type BackgroundImageIntensity = keyof typeof intensityClasses;
type BackgroundImagePosition = keyof typeof positionClasses;

/**
 * Optional atmospheric backdrop for a section — a very low-opacity, softened
 * photo behind text, not a foreground image. Requires a `relative` ancestor;
 * place as the first child of that ancestor, then wrap the real content in
 * `relative z-10`. Purely decorative (no parallax, no motion, nothing to
 * disable for prefers-reduced-motion) — see docs/DESIGN-SYSTEM.md before
 * reaching for this on more than the occasional section: it reads as a
 * considered exception, not a default page treatment.
 */
function BackgroundImage({
  image,
  intensity = "soft",
  position = "center",
  className,
}: {
  image: ImageAsset;
  intensity?: BackgroundImageIntensity;
  position?: BackgroundImagePosition;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <Image
        src={image.src}
        alt=""
        fill
        sizes="100vw"
        className={cn(
          "scale-105 object-cover grayscale-[15%] blur-[2px]",
          intensityClasses[intensity],
          positionClasses[position]
        )}
      />
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}

export { BackgroundImage };
