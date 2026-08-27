import type { ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

type CTAImageProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  actions: ReactNode;
  image: { src?: string; alt: string };
  className?: string;
};

/**
 * CTA variant C — "Image-led": photography fills the band with a restrained dark
 * overlay for legible text on top. For careers, about, and hub pages — the pages
 * that most benefit from one more warm, human moment before the visitor leaves.
 */
function CTAImage({ eyebrow, title, intro, actions, image, className }: CTAImageProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-primary", className)}>
      {image.src ? (
        <Image
          src={image.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover photo-warm"
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/75 via-black/50 to-black/25"
      />
      <Container size="default" className="relative py-20 md:py-28 lg:py-32">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center text-primary-foreground">
          {eyebrow ? (
            <span className="text-sm font-medium tracking-wide text-primary-foreground/75 uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-balance text-3xl leading-tight font-medium sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="max-w-md text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {intro}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {actions}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { CTAImage };
