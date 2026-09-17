import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { Location } from "@/components/site/Location";
import { PageChrome, PageHeader } from "@/components/site/PageChrome";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title: "حجز موعد | عيادة البسمة الرائعة" }, { name: "description", content: "تواصل مع عيادة البسمة الرائعة لطب الأسنان لتجهيز طلب الموعد والاستفسار عن الخدمة المناسبة." }] }),
  component: BookingPage,
});

function BookingPage() {
  const { t, lang } = useLanguage();
  return <PageChrome theme="contact"><main><PageHeader title={lang === "ar" ? "احجز موعدك الآن" : "Book an appointment"} description={lang === "ar" ? "نحن هنا لخدمتك. اختر الخدمة المناسبة وتواصل معنا لتأكيد الموعد." : "We are here to help. Choose a service and contact us to confirm your appointment."} /><Contact selectedService="" /><Location /></main></PageChrome>;
}
