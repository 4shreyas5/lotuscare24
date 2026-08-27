import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Container, containerVariants } from "@/components/layout/container";

const sectionVariants = cva("py-16 md:py-24 lg:py-28", {
  variants: {
    surface: {
      default: "bg-background",
      muted: "bg-muted/50",
      primary: "bg-primary text-primary-foreground",
      accent: "bg-accent/8",
    },
  },
  defaultVariants: {
    surface: "default",
  },
});

function Section({
  className,
  surface,
  containerSize = "default",
  container = true,
  as: Comp = "section",
  children,
  ...props
}: React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    as?: React.ElementType;
    /** Set to false to control the inner Container yourself (or omit it entirely). */
    container?: boolean;
    containerSize?: VariantProps<typeof containerVariants>["size"];
  }) {
  return (
    <Comp
      data-slot="section"
      className={cn(sectionVariants({ surface }), className)}
      {...props}
    >
      {container ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Section, sectionVariants };
