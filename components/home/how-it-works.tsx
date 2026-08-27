import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    title: "Kennismaken",
    description: "Een eerste, vrijblijvend gesprek — telefonisch of bij u thuis.",
  },
  {
    title: "Uw situatie bespreken",
    description: "Wat heeft u nodig, en wat is voor u belangrijk in de zorg?",
  },
  {
    title: "Persoonlijke zorg afspreken",
    description: "Samen stellen we vast welke zorg bij u past, en door wie.",
  },
  {
    title: "Zorg ontvangen — en bijstellen",
    description: "Met ruimte om mee te bewegen als uw situatie verandert.",
  },
];

/** Four-step journey — reduces anxiety about starting care by making the process concrete. */
function HowItWorks() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Hoe het werkt"
        title="Een rustige start, stap voor stap"
        intro="Zorg aanvragen voelt vaak spannend. Daarom houden wij het overzichtelijk."
      />
      <Reveal delay={0.1} className="mt-12">
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <span
                className="font-heading text-3xl text-accent"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

export { HowItWorks };
