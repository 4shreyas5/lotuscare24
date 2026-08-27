import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { PlaceholderImage, type ImageVariant } from "@/components/media/placeholder-image";
import { Reveal } from "@/components/motion/reveal";

type SplitSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  image: { src?: string; alt: string };
  imagePosition?: "left" | "right";
  /** "even" (default) keeps the original 50/50 split; "asymmetric" gives the image more room. */
  balance?: "even" | "asymmetric";
  /** Passed through to PlaceholderImage — defaults to "split" (the original contained-square treatment). */
  imageVariant?: ImageVariant;
  className?: string;
};

/** Image/text split — reusable for introductie, persoonlijke aanpak, and similar sections. */
function SplitSection({
  eyebrow,
  title,
  children,
  image,
  imagePosition = "right",
  balance = "even",
  imageVariant = "split",
  className,
}: SplitSectionProps) {
  const asymmetric = balance === "asymmetric";

  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:gap-16",
        asymmetric ? "lg:grid-cols-12" : "lg:grid-cols-2",
        className
      )}
    >
      <Reveal
        className={cn(
          "flex flex-col gap-4",
          asymmetric && "lg:col-span-5",
          imagePosition === "left" && "lg:order-2"
        )}
      >
        {eyebrow ? (
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-balance text-2xl leading-tight font-medium sm:text-3xl">
          {title}
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </div>
      </Reveal>
      <Reveal
        delay={0.1}
        className={cn(asymmetric && "lg:col-span-7", imagePosition === "left" && "lg:order-1")}
      >
        <PlaceholderImage
          src={image.src}
          alt={image.alt}
          variant={imageVariant}
          sizes={asymmetric ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
        />
      </Reveal>
    </div>
  );
}

export { SplitSection };
