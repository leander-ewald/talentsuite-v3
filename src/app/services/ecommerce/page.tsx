import type { Metadata } from "next";
import MainSection from "@/components/services/MainSection";
import Steps from "@/components/services/Steps";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import Solution from "@/components/services/Solution";
import Traditional from "@/components/services/Traditional";
import Appointment from "@/components/services/Appointment";

export const metadata: Metadata = {
  title: "E-Commerce Agentur | Shopify Entwicklung & Marketing | TalentSuite",
  description: "Fullservice E-Commerce Agentur: Shopify-Entwicklung, Logistik, SEO & Performance Marketing. Mehr Umsatz für deinen Online-Shop.",
  alternates: { canonical: "https://talentsuite.io/services/ecommerce" },
};

const traditionalData = [
  { img: "/assets/review-img.png", name: "Keine klare E-Commerce-Strategie" },
  { img: "/assets/review-img.png", name: "Hohe Abbruchraten im Bestellprozess" },
  { img: "/assets/review-img.png", name: "Fehlende Verzahnung von Marketing und Technik" },
  { img: "/assets/review-img.png", name: "Mangelnde Skalierbarkeit und Performance" },
];

const solutions = [
  { number: "01", title: "E-Commerce Strategie & Consulting", desc: "Marktanalyse, Zielgruppendefinition und Wettbewerbspositionierung." },
  { number: "02", title: "Shop-Entwicklung & Technik", desc: "Performante, skalierbare Plattformen auf Basis von Shopify." },
  { number: "03", title: "Logistik & Automatisierung", desc: "Moderne Fulfillment- und Logistikprozesse für maximale Effizienz." },
  { number: "04", title: "Content & Marketing", desc: "Produkttexte, SEO, Paid Ads und Social Media -- alles aus einer Hand." },
];

const steps = [
  { image: "/assets/step1.svg", desc: "Maßgeschneiderte Shop-Lösung" },
  { image: "/assets/step2.svg", desc: "Optimierte Nutzererfahrung für höhere Umsätze" },
  { image: "/assets/step3.svg", desc: "Mehr Sichtbarkeit durch gezieltes Marketing" },
  { image: "/assets/step4.svg", desc: "Skalierbarkeit für nachhaltiges Wachstum" },
];

const testimonials = [
  { name: "Jan Röhrig", role: "Leitung E-Commerce -- Iserlohn Roosters", from: "Iserlohn", to: "Deutschland", img: "/assets/Jan.png", review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben -- von der Shopstruktur bis zur technischen Umsetzung." },
  { name: "Viktor Brehm", role: "CEO -- Schlafplatz", from: "München", to: "Deutschland", img: "/assets/Viktior.png", review: "Mit TalentSuite haben wir unser Wachstum systematisiert: automatisierte Abläufe und eine Webplattform, die skaliert." },
  { name: "Joel Schüssler", role: "COO -- Just Virtual Food Brands", from: "Zürich", to: "Schweiz", img: "/assets/Joel.png", review: "Alle Bereiche liefern konstant starke Ergebnisse -- ein echtes Fullservice-Erlebnis." },
];

export default function ECommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Fullservice E-Commerce", provider: { "@type": "MarketingAgency", name: "TalentSuite", url: "https://talentsuite.io", areaServed: ["DE", "AT", "CH"] }, description: "Fullservice E-Commerce: Shopify-Entwicklung, Logistik, SEO und Performance Marketing.", serviceType: "E-Commerce Entwicklung" }) }} />
      <MainSection title={<>Dein E-Commerce braucht<br />mehr als nur <span className="text-[var(--color-accent)]">einen Shop.</span></>} description="Wir begleiten dich von der Strategie über Technik bis hin zu Marketing -- damit dein Onlinehandel nachhaltig wächst." buttonText="Jetzt Beratungsgespräch anfragen" imageSrc="/assets/services-img.png" imageAlt="E-Commerce Agentur -- Shopify Entwicklung und Marketing" />
      <Traditional title="Viele E-Commerce Projekte scheitern an fehlender Strategie." description="Ein Onlineshop allein reicht heute nicht aus. Komplexe technische Anforderungen und ein dynamisches Wettbewerbsumfeld stellen viele Händler vor große Herausforderungen." data={traditionalData} />
      <Solution title="Fullservice E-Commerce aus einer Hand" description="Wir entwickeln individuelle E-Commerce-Strategien und setzen sie technisch und marketingseitig konsequent um." items={solutions} />
      <Steps title="Deine Vorteile" stepsData={steps} />
      <ServiceTestimonials title="Das sagen unsere Kunden" description="Echte Ergebnisse aus dem E-Commerce." link="https://calendar.app.google/QFoADWcRwwuYUoky8" linkText="Auch so wachsen? Jetzt Termin sichern" testimonialData={testimonials} />
      <Appointment heading="Lass uns gemeinsam deine E-Commerce-Potenziale entfesseln." buttonText="Jetzt Termin anfragen" />
    </>
  );
}
