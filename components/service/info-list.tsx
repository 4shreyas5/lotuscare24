import { CircleCheckBig } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

/** Reusable "Voor wie" / "Wat kunt u verwachten" list used across service pages. */
function InfoList({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <h2 className="text-2xl leading-tight font-medium sm:text-3xl">
        {title}
      </h2>
      <ul className="mt-6 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CircleCheckBig
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="text-base leading-relaxed text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export { InfoList };
