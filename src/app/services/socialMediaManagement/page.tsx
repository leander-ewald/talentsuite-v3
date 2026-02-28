import type { Metadata } from "next";
import MainSection from "@/components/services/MainSection";
import Steps from "@/components/services/Steps";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import Solution from "@/components/services/Solution";
import Traditional from "@/components/services/Traditional";
import Appointment from "@/components/services/Appointment";

export const metadata: Metadata = {
  title: "Social Media Management Agentur | Content & Strategie | TalentSuite",
  description: "Professionelles Social Media Management: Strategie, Content-Produktion, Community Management & Reporting. Mehr Reichweite, mehr Wirkung.",
  alternates: { canonical: "https://talentsuite.io/services/socialMediaManagement" },
};

const traditionalData = [
  { img: "/assets/review-img.png", name: "Unregelmäßige Content-Planung" },
  { img: "/assets/review-img.png", name: "Keine klare Markenpositionierung" },
  { img: "/assets/review-img.png", name: "Geringe Reichweite trotz hohem Aufwand" },
  { img: "/assets/review-img.png", name: "Keine Verknüpfung mit Sales oder Recruiting" },
];

const solutions = [
  { number: "01", title: "Social Audit & Strategie", desc: "Wir analysieren Status quo, Zielgruppe und Kanäle -- und definieren klare Ziele." },
  { number: "02", title: "Redaktionsplanung & Content", desc: "Planung, Text, Bild & Video -- abgestimmt auf Plattform und Zielgruppe." },
  { number: "03", title: "Community Management", desc: "Aktiver Dialog mit deiner Zielgruppe -- inklusive Reporting & Optimierung." },
  { number: "04", title: "Business-Integration", desc: "Ob Recruiting, Leadgenerierung oder Branding -- wir denken Social Media ganzheitlich." },
];

const steps = [
  { image: "/assets/step1.svg", desc: "Klare Social-Media-Strategie" },
  { image: "/assets/step2.svg", desc: "Kreative Inhalte mit Wiedererkennungswert" },
  { image: "/assets/step3.svg", desc: "Professionelles Community Management" },
  { image: "/assets/step4.svg", desc: "Analyse & Reporting mit Impact-Fokus" },
];

const testimonials = [
  { name: "Jessica Pacha-Mollé", role: "Head of HR -- Heizkurier GmbH", from: "Köln/Bonn", to: "Deutschland", img: "/assets/Jessicas.png", review: "Mit TalentSuite haben wir unsere Employer Brand spürbar gestärkt. Durch hochwertigen Content und gezielte Kampagnen setzen sie unsere Vorstellungen punktgenau um." },
  { name: "Joel Schüssler", role: "COO -- Just Virtual Food Brands", from: "Zürich", to: "Schweiz", img: "/assets/Joel.png", review: "Ob Contentproduktion oder Neukundengewinnung -- alle Bereiche liefern konstant starke Ergebnisse." },
  { name: "Anton Specht", role: "CEO -- Specht Immobilien", from: "Frankfurt", to: "Deutschland", img: "/assets/Anton.png", review: "Unser Social Media Auftritt hat sich komplett verändert. Die Prozesse laufen sauber und messbar." },
];

export default function SocialMediaManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Social Media Management", provider: { "@type": "MarketingAgency", name: "TalentSuite", url: "https://talentsuite.io", areaServed: ["DE", "AT", "CH"] }, description: "Professionelles Social Media Management: Strategie, Content, Community Management und Reporting.", serviceType: "Social Media Management" }) }} />
      <MainSection title={<>Social Media, das <span className="text-[var(--color-accent)]">konvertiert</span> &ndash;<br />mehr Sichtbarkeit, mehr Wirkung.</>} description="Wir managen deine Social-Media-Kanäle strategisch, kreativ und datengetrieben -- damit aus Reichweite echte Ergebnisse werden." buttonText="Jetzt Social-Media-Beratung buchen" imageSrc="/assets/services-img.png" imageAlt="Social Media Management -- Professionelle Kanalbetreuung" />
      <Traditional title="Social Media ist voll -- aber oft leer an Wirkung." description="Viele Unternehmen posten regelmäßig -- aber ohne Strategie, klare Botschaft oder Plan. So verpufft das Potenzial: keine Community, kein Engagement, kein messbarer Return." data={traditionalData} />
      <Solution title="Deine Kanäle professionell gemanagt" description="Wir übernehmen die komplette Betreuung deiner Social-Media-Kanäle oder begleiten dein Team strategisch." items={solutions} />
      <Steps title="Was du von uns bekommst" stepsData={steps} />
      <ServiceTestimonials title="Das sagen unsere Kunden" description="Echte Ergebnisse aus dem Social Media Bereich." link="https://calendar.app.google/QFoADWcRwwuYUoky8" linkText="Auch mehr Reichweite? Jetzt Termin sichern" testimonialData={testimonials} />
      <Appointment heading="Lass uns deine Marke in den sozialen Medien sichtbar und erfolgreich machen." buttonText="Jetzt Strategiegespräch vereinbaren" />
    </>
  );
}
