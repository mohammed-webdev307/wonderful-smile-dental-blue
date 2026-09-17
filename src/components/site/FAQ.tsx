import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="page-faq scroll-mt-20 py-8 md:py-[60px] lg:py-20">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]">
            {t.faq.heading}
          </h2>
        </Reveal>

        <div className="mt-6 space-y-2 sm:mt-10 sm:space-y-3">
          {t.faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-4 text-start text-base font-semibold text-foreground transition-colors hover:bg-soft/60 sm:min-h-[64px] sm:px-5 sm:py-5 sm:text-lg"
                  >
                    <span className="min-w-0">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!open}
                  className="px-4 pb-4 text-[15px] leading-7 text-muted-foreground sm:px-5 sm:pb-6 sm:text-base sm:leading-8"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
