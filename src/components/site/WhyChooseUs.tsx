import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function WhyChooseUs({ limit, homePage = false }: { limit?: number; homePage?: boolean }) {
  const { t } = useLanguage();
  const items = limit ? t.why.items.slice(0, limit) : t.why.items;

  return (
    <section id="why" className={`scroll-mt-20 py-8 md:py-[60px] lg:py-20 ${homePage ? "home-why" : ""}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]">
            {t.why.heading}
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full min-w-0 rounded-3xl border border-border bg-card p-4 sm:p-7">
                <span className="font-latin text-2xl font-extrabold text-soft-foreground text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground sm:mt-4">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted-foreground sm:mt-3 sm:text-base sm:leading-8">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
