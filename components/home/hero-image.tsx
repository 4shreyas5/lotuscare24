"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Full-bleed hero background: a soft fade/scale-in on mount, plus a very subtle
 * scroll-linked drift (a few percent of vertical travel, never a dramatic
 * parallax). Isolated in its own client component so the Hero itself can stay a
 * server component — only this leaf needs the scroll/reduced-motion hooks.
 *
 * The mount fade is a plain CSS animation (not a Motion `initial`/`animate` value)
 * so the site's global `prefers-reduced-motion` rule neutralizes it directly —
 * `useReducedMotion()` resolves to `null` on first render and only settles after an
 * effect, which raced with a JS-driven animate value and left the image stuck at
 * opacity 0 for reduced-motion users.
 *
 * The `style` prop below always has the same `{ y }` shape on server and client —
 * switching it to `undefined` on one side (even briefly, while reduceMotion is
 * still resolving) is what causes a hydration mismatch. Instead the *range* the
 * transform maps to is what's conditional: at scroll position 0 (true at mount,
 * on both server and client) the output is 0 regardless of range, so this is safe.
 */
function HeroImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion === true ? [0, 0] : [0, 36]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className={cn("absolute inset-0 animate-hero-in")} style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover photo-warm"
        />
      </motion.div>
    </div>
  );
}

export { HeroImage };
