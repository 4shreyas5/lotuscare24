"use client";

import { useState } from "react";

import { HONEYPOT_FIELD_NAME, TIMESTAMP_FIELD_NAME } from "@/lib/forms/spam";

/** Invisible spam trap shared by all three forms: a decoy field real visitors
 * never see or reach by keyboard (aria-hidden + tabIndex -1), plus a hidden
 * render timestamp used to catch instant, no-read submissions. See
 * lib/forms/spam.ts for how these are checked server-side. The timestamp is
 * read via useState's lazy initializer (runs once, outside normal render) —
 * calling Date.now() directly in the render body would make the component
 * impure. */
function HoneypotField() {
  const [renderedAt] = useState(() => Date.now());

  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label htmlFor={HONEYPOT_FIELD_NAME}>Laat dit veld leeg</label>
      <input
        id={HONEYPOT_FIELD_NAME}
        name={HONEYPOT_FIELD_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
      <input type="hidden" name={TIMESTAMP_FIELD_NAME} defaultValue={renderedAt} />
    </div>
  );
}

export { HoneypotField };
