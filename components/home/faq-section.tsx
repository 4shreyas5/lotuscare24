import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hoe vraag ik zorg aan bij Lotus Vitaal?",
    answer:
      "Neem contact met ons op via het contactformulier of telefonisch. In een vrijblijvend gesprek bespreken we uw situatie en bekijken we samen welke zorg passend is.",
  },
  {
    question: "Kan de zorg worden afgestemd op mijn persoonlijke situatie?",
    answer:
      "Ja. We starten altijd met een gesprek over uw situatie en wensen, en stemmen de zorg daarop af — in plaats van een standaardpakket aan te bieden.",
  },
  {
    question: "Kan mijn familie of mantelzorger betrokken worden?",
    answer:
      "Zeker. We begrijpen dat zorg ook impact heeft op de mensen om de cliënt heen, en denken graag mee over hoe familie en mantelzorgers betrokken kunnen blijven.",
  },
  {
    question: "Hoe verloopt een eerste kennismaking?",
    answer:
      "Een kennismaking is vrijblijvend en laagdrempelig. We luisteren naar uw situatie en leggen uit hoe Lotus Vitaal te werk gaat, zodat u een goed beeld heeft voordat u een keuze maakt.",
  },
];

/** Homepage FAQ preview — only questions answerable from confirmed content; no pricing/insurance/legal claims. */
function FAQSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Veelgestelde vragen" title="Nog vragen?" />
      <Reveal delay={0.1} className="mt-10 max-w-2xl">
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

export { FAQSection };
