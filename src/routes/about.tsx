import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { PageChrome, PageHeader, ActionCta } from "@/components/site/PageChrome";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "عن عيادة البسمة الرائعة لطب الأسنان" }, { name: "description", content: "تعرّف على عيادة البسمة الرائعة لطب الأسنان ونهجها في تقديم رعاية مريحة ومتكاملة." }] }),
  component: AboutPage,
});

function AboutPage() {
  const { t, lang } = useLanguage();
  return <PageChrome theme="about"><main><PageHeader eyebrow={t.brand.name} title={lang === "ar" ? "عن عيادة البسمة الرائعة لطب الأسنان" : "About Wonderful Smile Dental Clinic"} description={t.about.text} /><About /><section className="page-about-why"><WhyChooseUs /></section><ActionCta title={lang === "ar" ? "ابتسامة صحية لحياة أجمل" : "A healthy smile for a better life"} text={t.cta.text} /></main></PageChrome>;
}
