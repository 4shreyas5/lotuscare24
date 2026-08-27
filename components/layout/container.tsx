import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      /** Standard section width — cards, grids, service overviews. */
      default: "max-w-7xl px-6 sm:px-8 lg:px-12",
      /** Editorial reading width — long-form copy, FAQ, legal pages. */
      content: "max-w-3xl px-6 sm:px-8",
      /** No max-width — full-bleed imagery. */
      full: "max-w-none px-0",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function Container({
  className,
  size,
  as: Comp = "div",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & { as?: React.ElementType }) {
  return (
    <Comp
      data-slot="container"
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  );
}

export { Container, containerVariants };
