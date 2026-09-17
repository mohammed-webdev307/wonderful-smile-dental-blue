import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, ClipboardCheck, HeartHandshake, MessageCircle, ScanSearch, Sparkles, Syringe, type LucideIcon } from "lucide-react";
import { useLanguage, serviceKeys, type ServiceKey } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import childrenImage from "@/assets/children.png";
import dentureImage from "@/assets/denture.png";
import extractionImage from "@/assets/extraction.png";
import fillingsImage from "@/assets/fillings.png";
import rootCanalImage from "@/assets/root-canal.png";
import cleaningImage from "@/assets/cleaning.png";

const serviceImages: Record<ServiceKey, string> = {
  denture: dentureImage,
  rootcanal: rootCanalImage,
  fillings: fillingsImage,
  extraction: extractionImage,
  children: childrenImage,
  cleaning: cleaningImage,
};

const serviceIcons: Record<ServiceKey, LucideIcon> = {
  denture: HeartHandshake,
  rootcanal: Syringe,
  fillings: Sparkles,
  extraction: CheckCircle2,
  children: HeartHandshake,
  cleaning: Sparkles,
};

const servicePageFeatures = [
  { ar: "تشخيص دقيق", en: "Accurate diagnosis", icon: ScanSearch },
  { ar: "خطة علاج مناسبة", en: "A tailored treatment plan", icon: ClipboardCheck },
  { ar: "متابعة واهتمام", en: "Care and follow-up", icon: HeartHandshake },
] as const;

export function Services({ limit, homePage = false, servicesPage = false }: { limit?: number; homePage?: boolean; servicesPage?: boolean }) {
  const { t, lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const visibleKeys = limit ? serviceKeys.slice(0, limit) : serviceKeys;
  const pageTitle = lang === "ar" ? "خدمات طب الأسنان" : "Dental services";
  const pageLead = lang === "ar" ? "رعاية متكاملة لابتسامة صحية وجميلة" : "Complete care for a healthy, beautiful smile";
  const pageDescription = lang === "ar" ? "نقدم مجموعة من خدمات طب الأسنان العلاجية والتجميلية باستخدام أساليب حديثة مع الاهتمام براحة المريض." : "We provide restorative and cosmetic dental care using modern approaches with your comfort in mind.";
  return (
    <section className={`services-page-section home-services px-4 py-12 sm:px-6 sm:py-20 lg:px-8 ${homePage ? "home-services--light" : ""} ${servicesPage ? "services-page-section--full" : ""}`}>
      {servicesPage ? <div className="services-page-intro mx-auto max-w-[1280px]">
        <Reveal>
          <p className="text-sm font-bold text-[#064F9E]">{t.brand.name}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-[#542F39] sm:text-5xl lg:text-6xl">{pageTitle}</h1>
          <p className="mt-4 text-xl font-bold text-[#064F9E] sm:text-2xl">{pageLead}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#6F5960] sm:text-lg">{pageDescription}</p>
        </Reveal>
        <div className="services-page-features mt-8 grid gap-3 sm:grid-cols-3">
          {servicePageFeatures.map(({ ar, en, icon: Icon }) => <div key={ar} className="services-page-feature"><Icon className="h-5 w-5 shrink-0 text-[#064F9E]" aria-hidden="true" /><span>{lang === "ar" ? ar : en}</span></div>)}
        </div>
      </div> : null}
      <div className="mx-auto w-full max-w-[1280px]">
        {!servicesPage ? <div className="max-w-2xl"><p className="text-sm font-bold text-primary">{t.brand.name}</p><h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">{t.services.heading}</h2><p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">{t.services.desc}</p></div> : <div className="services-page-heading"><h2>{t.services.heading}</h2><p>{t.services.desc}</p></div>}
        <div className="services-page-grid mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibleKeys.map((key, index) => { const item = t.services.items[key]; const Icon = serviceIcons[key]; return <Reveal key={key} delay={index * 60}><article className="service-card flex h-full flex-col overflow-hidden rounded-[24px] border border-[#B9DCF5] bg-white shadow-[0_15px_40px_rgba(83,35,50,0.10)] transition-transform duration-300 hover:-translate-y-1"><img src={serviceImages[key]} alt={item.title} width={900} height={600} loading="lazy" className="service-card-image aspect-[4/3] w-full object-cover" /><div className="flex grow flex-col p-5 sm:p-6"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-extrabold text-[#542F39]">{item.title}</h3><Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#064F9E]" aria-hidden="true" /></div><p className="mt-3 grow text-sm leading-7 text-[#6F5960]">{item.desc}</p><Link to="/booking" className="service-card-link mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-[linear-gradient(110deg,#064F9E,#2F8FCE)] px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">{t.services.cta}<Arrow className="h-4 w-4" /></Link></div></article></Reveal>; })}</div>
        {limit ? <div className="mt-8 text-center"><Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-[#064F9E] px-6 py-3.5 text-sm font-bold text-white">{lang === "ar" ? "عرض كل الخدمات" : "View all services"}<Arrow className="h-4 w-4" /></Link></div> : null}
        {servicesPage ? <div className="services-page-cta mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center"><div><h2>{lang === "ar" ? "غير متأكد أي خدمة تناسب حالتك؟" : "Not sure which service is right for you?"}</h2><p>{lang === "ar" ? "تواصل معنا وسنساعدك في اختيار الموعد والخدمة المناسبة." : "Contact us and we will help you choose the right service and appointment."}</p></div><div className="flex flex-wrap gap-3"><Link to="/booking" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[linear-gradient(110deg,#064F9E,#2F8FCE)] px-6 py-3.5 text-sm font-bold text-white"><CalendarCheck className="h-4 w-4" />{lang === "ar" ? "احجز موعدك" : "Book an appointment"}</Link><Link to="/booking" hash="contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#064F9E]/40 bg-white px-6 py-3.5 text-sm font-bold text-[#713B49]"><MessageCircle className="h-4 w-4" />{lang === "ar" ? "تواصل معنا" : "Contact us"}</Link></div></div> : null}
      </div>
    </section>
  );
}
