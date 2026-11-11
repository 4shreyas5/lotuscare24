import { Quote } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

/**
 * Testimonial architecture, ready for real content. No invented names/quotes —
 * renders nothing until testimonials are supplied and consented to.
 */
function TestimonialsSection({
  testimonials = [],
}: {
  testimonials?: Testimonial[];
}) {
  // Without real, consented testimonials the section is not rendered at all.
  if (testimonials.length === 0) return null;

  return (
    <Section surface="muted">
      <SectionHeading
        eyebrow="Ervaringen"
        title="Wat cliënten en families zeggen"
      />
      <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <CardContent className="flex flex-col gap-4">
                  <Quote
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-base leading-relaxed text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.name}
                    {item.role ? `, ${item.role}` : null}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
      </Reveal>
    </Section>
  );
}

export { TestimonialsSection };
