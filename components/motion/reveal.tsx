"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Subtle fade + rise when a section scrolls into view. Reserved for entrances/reveals
 * only (see docs/DESIGN-SYSTEM.md motion principles) — not for hover states or chrome,
 * which use plain CSS transitions already present in the shadcn primitives.
 */
function Reveal({
  children,
  className,
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export { Reveal };
