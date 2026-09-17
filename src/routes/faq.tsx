import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";
import { PageChrome, PageHeader, ActionCta } from "@/components/site/PageChrome";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "الأسئلة الشائعة | عيادة البسمة الرائعة" }, { name: "description", content: "إجابات عن الأسئلة الشائعة حول الخدمات والتواصل والمواعيد." }] }),
  component: FaqPage,
});

function FaqPage() {
  const { t, lang } = useLanguage();
  return <PageChrome theme="faq"><main><PageHeader title={lang === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"} description={t.faq.items[0]?.a} /><FAQ /><ActionCta title={lang === "ar" ? "لم تجد إجابة لسؤالك؟" : "Could not find your answer?"} text={t.cta.text} /></main></PageChrome>;
}
