import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { PageChrome } from "@/components/site/PageChrome";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "خدمات طب الأسنان | عيادة البسمة الرائعة" }, { name: "description", content: "مجموعة متكاملة من خدمات طب الأسنان لتلبية احتياجاتك." }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return <PageChrome theme="services"><main><Services servicesPage /></main></PageChrome>;
}
