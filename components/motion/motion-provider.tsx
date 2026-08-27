"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** Global motion config — "user" defers to the OS prefers-reduced-motion setting. */
function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export { MotionProvider };
