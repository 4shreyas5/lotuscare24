import { Quote } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { PullQuote } from "@/components/shared/pull-quote";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

/**
 * Testimonial architecture, ready for real content. No invented names/quotes —
 * renders a calm empty state until testimonials are supplied and consented to.
 */
function TestimonialsSection({
  testimonials = [],
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <Section surface="muted">
      <SectionHeading
        eyebrow="Ervaringen"
        title="Wat cliënten en families zeggen"
      />
      <Reveal delay={0.1} className="mt-12">
        {testimonials.length > 0 ? (
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
        ) : (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <Quote className="size-6 text-accent" aria-hidden="true" />
            <PullQuote className="max-w-xl text-muted-foreground">
              Binnenkort delen cliënten en families hier hun ervaringen met
              LotusCare24.
            </PullQuote>
          </div>
        )}
      </Reveal>
    </Section>
  );
}

export { TestimonialsSection };
