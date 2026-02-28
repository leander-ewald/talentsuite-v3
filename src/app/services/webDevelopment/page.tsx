import type { Metadata } from "next";
import MainSection from "@/components/services/MainSection";
import Steps from "@/components/services/Steps";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import Solution from "@/components/services/Solution";
import Traditional from "@/components/services/Traditional";
import Appointment from "@/components/services/Appointment";
import ServiceFaqs from "@/components/services/ServiceFaqs";

const faqData = [
  { question: "Welche Technologien nutzt TalentSuite für Webentwicklung?", answer: "Wir arbeiten mit React, Next.js und Shopify -- je nach Projektanforderung. Für maximale Performance, SEO und Skalierbarkeit setzen wir auf moderne Frameworks statt auf veraltete CMS-Lösungen." },
  { question: "Wie lange dauert eine Website-Entwicklung?", answer: "Ein typisches Projekt dauert 4--8 Wochen von der Konzeption bis zum Launch. Komplexere Projekte wie E-Commerce-Plattformen oder Webapps können 8--12 Wochen in Anspruch nehmen." },
  { question: "Ist SEO in der Webentwicklung enthalten?", answer: "Ja. Technisches SEO ist Standard bei jedem Projekt -- schnelle Ladezeiten, saubere URL-Strukturen, Schema Markup, Meta-Tags und Core Web Vitals Optimierung sind immer inklusive." },
  { question: "Bietet ihr auch Wartung und Support an?", answer: "Ja. Nach dem Launch bieten wir kontinuierliche Wartung, Updates, Performance-Monitoring und Weiterentwicklung an. So bleibt deine Website immer aktuell und sicher." },
  { question: "Was kostet eine professionelle Website?", answer: "Die Kosten richten sich nach Umfang und Komplexität. Eine einfache Corporate Website startet ab ca. 3.000 EUR, komplexere Projekte individuell. Wir erstellen dir nach dem Erstgespräch ein transparentes Angebot." },
];

export const metadata: Metadata = {
  title: "Webentwicklung Agentur | UX Design & SEO | TalentSuite",
  description: "Professionelle Webentwicklung: UX/UI Design, React & Next.js, SEO-Optimierung und Wartung. Websites, die überzeugen und konvertieren. Jetzt Beratung buchen.",
  alternates: { canonical: "https://talentsuite.io/services/webDevelopment" },
};

const traditionalData = [
  { img: "/assets/review-img.png", name: "Veraltetes Design, das nicht mehr überzeugt" },
  { img: "/assets/review-img.png", name: "Keine mobile Optimierung" },
  { img: "/assets/review-img.png", name: "Langsame Ladezeiten und schlechte Performance" },
  { img: "/assets/review-img.png", name: "Keine Conversion-Optimierung" },
];

const solutions = [
  { number: "01", title: "UX/UI Design & Konzeption", desc: "Nutzerzentriertes Design, das überzeugt und konvertiert -- auf jedem Gerät." },
  { number: "02", title: "Webentwicklung & Programmierung", desc: "Moderne Technologien (React, Next.js, Shopify) für maximale Performance und Skalierbarkeit." },
  { number: "03", title: "SEO & Performance", desc: "Technisches SEO, Core Web Vitals und schnelle Ladezeiten für bessere Rankings." },
  { number: "04", title: "Wartung & Weiterentwicklung", desc: "Kontinuierliche Optimierung, Updates und Support -- damit deine Website immer aktuell bleibt." },
];

const steps = [
  { image: "/assets/step1.svg", desc: "Professionelle Website, die Vertrauen schafft" },
  { image: "/assets/step2.svg", desc: "Bessere Rankings durch technisches SEO" },
  { image: "/assets/step3.svg", desc: "Höhere Conversion durch optimierte User Experience" },
  { image: "/assets/step4.svg", desc: "Zukunftssichere Technologie, die mitwächst" },
];

const testimonials = [
  { name: "Jan Röhrig", role: "Leitung E-Commerce -- Iserlohn Roosters", from: "Iserlohn", to: "Deutschland", img: "/assets/Jan.png", review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben -- von der Shopstruktur bis zur technischen Umsetzung." },
  { name: "Viktor Brehm", role: "CEO -- Schlafplatz", from: "München", to: "Deutschland", img: "/assets/Viktior.png", review: "Automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert und zuverlässig." },
  { name: "Joel Schüssler", role: "COO -- Just Virtual Food Brands", from: "Zürich", to: "Schweiz", img: "/assets/Joel.png", review: "Alle Bereiche liefern konstant starke Ergebnisse." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Webentwicklung", provider: { "@type": "MarketingAgency", name: "TalentSuite", url: "https://talentsuite.io", areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Switzerland" }] }, description: "Professionelle Webentwicklung: UX/UI Design, React & Next.js, SEO und Wartung.", serviceType: "Webentwicklung" }) }} />
      <MainSection title={<>Deine Website ist dein<br />bester <span className="text-[var(--color-accent)]">Vertriebler</span> &ndash; 24/7.</>} description="Wir entwickeln performante, SEO-optimierte Websites, die Vertrauen schaffen und Besucher in Kunden verwandeln." buttonText="Jetzt Web-Beratung buchen" imageSrc="/assets/services-img.png" imageAlt="Webentwicklung -- Moderne Websites mit React und Next.js" />
      <Traditional title="Deine Website verliert Kunden -- jeden Tag." description="Eine veraltete, langsame oder schlecht strukturierte Website kostet dich täglich potenzielle Kunden. Ohne moderne Technik und klare Nutzerführung verlierst du Umsatz." data={traditionalData} />
      <Solution title="Webentwicklung, die konvertiert" description="Websites, die nicht nur gut aussehen, sondern messbar performen -- von der Konzeption über die Entwicklung bis zur SEO-Optimierung." items={solutions} />
      <Steps title="Was du von uns bekommst" stepsData={steps} />
      <ServiceTestimonials title="Das sagen unsere Kunden" description="Echte Ergebnisse aus der Web-Zusammenarbeit." link="https://calendar.app.google/QFoADWcRwwuYUoky8" linkText="Auch eine bessere Website? Jetzt Termin sichern" testimonialData={testimonials} />
      <ServiceFaqs title="Häufige Fragen zur Webentwicklung" faqData={faqData} />
      <Appointment heading="Lass uns gemeinsam eine Website bauen, die Vertrauen schafft und Kunden gewinnt." buttonText="Jetzt Termin anfragen" />
    </>
  );
}
