import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * The clay accent's one deliberate job: a hand-drawn-feeling underline stroke
 * beneath an emphasised word or phrase inside a heading. Reserved for a single
 * moment per page — see docs/DESIGN-SYSTEM.md. Not a general-purpose highlight.
 */
function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -bottom-1 h-[0.2em] w-full text-accent/70"
      >
        <path
          d="M0 6.5C20 3 40 2 50 3.5C63 5.5 80 6 100 3"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

export { Accent };
