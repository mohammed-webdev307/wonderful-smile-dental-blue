import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { PageChrome, ActionCta } from "@/components/site/PageChrome";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "عيادة البسمة الرائعة لطب الأسنان | Wonderful Smile Dental Clinic" }, { name: "description", content: "رعاية شاملة للأسنان في بيئة مريحة واهتمام شخصي بكل حالة." }] }),
  component: Home,
});

function Home() {
  const { t, lang } = useLanguage();
  return <PageChrome homePage theme="home"><main><Hero /><Services limit={3} homePage /><WhyChooseUs limit={3} homePage /><ActionCta title={lang === "ar" ? "هل أنت مستعد لابتسامة أجمل؟" : "Ready for a brighter smile?"} text={t.cta.text} /></main></PageChrome>;
}
