import type { Metadata } from "next";
import MainSection from "@/components/services/MainSection";
import Steps from "@/components/services/Steps";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import Solution from "@/components/services/Solution";
import Traditional from "@/components/services/Traditional";
import Appointment from "@/components/services/Appointment";
import ServiceFaqs from "@/components/services/ServiceFaqs";

const faqData = [
  { question: "Welche Arten von Content produziert TalentSuite?", answer: "Wir produzieren Employer Branding Videos, Imagefilme, Social Media Clips, Produktvideos, professionelle Fotos und animierte Grafiken. Jedes Format wird strategisch auf deine Zielgruppe und Kanäle abgestimmt." },
  { question: "Wie läuft eine Content-Produktion ab?", answer: "Wir starten mit einem Briefing und einer Content-Strategie. Danach folgen Redaktionsplanung, Produktion (Video/Foto/Grafik) und Postproduktion. Am Ende erhältst du fertige Assets, optimiert für deine Kanäle." },
  { question: "Muss ich mich um etwas kümmern?", answer: "Minimal. Wir übernehmen den gesamten Prozess von der Planung bis zur Auslieferung. Du musst lediglich beim Briefing und ggf. beim Dreh anwesend sein. Alles andere machen wir." },
  { question: "Wie viel kostet professionelle Content-Produktion?", answer: "Die Kosten hängen von Umfang, Format und Produktionsaufwand ab. Von einzelnen Social Clips bis hin zu umfangreichen Videoserien -- wir erstellen dir ein transparentes Angebot nach dem Erstgespräch." },
  { question: "Kann ich den Content auch für Ads verwenden?", answer: "Absolut. Unsere Inhalte werden von Anfang an so produziert, dass sie sowohl organisch als auch in bezahlten Kampagnen performen. Wir liefern alle Formate und Schnittversionen, die du brauchst." },
];

export const metadata: Metadata = {
  title: "Content Produktion Agentur | Video, Foto & Social Media | TalentSuite",
  description: "Professionelle Content Produktion: Videos, Fotos, Social Media Content & Employer Branding. Authentisch, strategisch, wirkungsvoll.",
  alternates: { canonical: "https://talentsuite.io/services/contentProduktion" },
};

const traditionalData = [
  { img: "/assets/review-img.png", name: "Kein konsistentes Markenbild" },
  { img: "/assets/review-img.png", name: "Content ohne Strategie oder Zielgruppe" },
  { img: "/assets/review-img.png", name: "Keine professionellen Video- oder Foto-Assets" },
  { img: "/assets/review-img.png", name: "Interne Ressourcen überfordert" },
];

const solutions = [
  { number: "01", title: "Content-Strategie & Redaktionsplanung", desc: "Klare Themen, Formate und Kanäle -- abgestimmt auf deine Business-Ziele." },
  { number: "02", title: "Professionelle Video-Produktion", desc: "Employer Branding Videos, Imagefilme, Social Clips und Produktvideos in Kinoqualität." },
  { number: "03", title: "Fotografie & Bildsprache", desc: "Authentische Team-, Produkt- und Eventfotos, die deine Marke greifbar machen." },
  { number: "04", title: "Social Media Content", desc: "Plattformgerechte Reels, Stories und Posts -- optimiert für Reichweite und Engagement." },
];

const steps = [
  { image: "/assets/step1.svg", desc: "Professionelle Inhalte, die deine Marke stärken" },
  { image: "/assets/step2.svg", desc: "Mehr Engagement durch authentischen Content" },
  { image: "/assets/step3.svg", desc: "Konsistente Bildsprache über alle Kanäle" },
  { image: "/assets/step4.svg", desc: "Zeitersparnis durch Full-Service-Produktion" },
];

const testimonials = [
  { name: "Jessica Pacha-Mollé", role: "Head of HR -- Heizkurier GmbH", from: "Köln/Bonn", to: "Deutschland", img: "/assets/Jessicas.png", review: "Durch hochwertigen Content und gezielte Performance-Recruiting-Kampagnen setzen sie unsere Vorstellungen punktgenau um." },
  { name: "Jan Röhrig", role: "Leitung E-Commerce -- Iserlohn Roosters", from: "Iserlohn", to: "Deutschland", img: "/assets/Jan.png", review: "Das Team versteht es, Marken digital stark und verkaufsfähig zu machen." },
  { name: "Joel Schüssler", role: "COO -- Just Virtual Food Brands", from: "Zürich", to: "Schweiz", img: "/assets/Joel.png", review: "Ob Contentproduktion, Performance Recruiting oder Neukundengewinnung -- alle Bereiche liefern konstant starke Ergebnisse." },
];

export default function ContentProduktionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Content Produktion", provider: { "@type": "MarketingAgency", name: "TalentSuite", url: "https://talentsuite.io", areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Switzerland" }] }, description: "Professionelle Content Produktion: Video, Fotografie, Social Media Content und Employer Branding.", serviceType: "Content Produktion" }) }} />
      <MainSection title={<>Content, der <span className="text-[var(--color-accent)]">wirkt</span> &ndash;<br />nicht nur gefällt.</>} description="Wir produzieren Videos, Fotos und Social Media Content, der deine Marke authentisch zeigt und messbare Ergebnisse liefert." buttonText="Jetzt Content-Beratung buchen" imageSrc="/assets/services-img.png" imageAlt="Content Produktion -- Video, Foto und Social Media Content" />
      <Traditional title="Ohne starken Content bleibt deine Marke unsichtbar." description="In einer Welt voller Reize und kurzer Aufmerksamkeitsspannen entscheidet die Qualität deines Contents über Sichtbarkeit, Vertrauen und Conversions." data={traditionalData} />
      <Solution title="Content Produktion mit Strategie" description="Wir entwickeln und produzieren Content, der auf deine Zielgruppe und Business-Ziele zugeschnitten ist." items={solutions} />
      <Steps title="Was du von uns bekommst" stepsData={steps} />
      <ServiceTestimonials title="Das sagen unsere Kunden" description="Echte Ergebnisse aus der Content-Zusammenarbeit." link="https://calendar.app.google/QFoADWcRwwuYUoky8" linkText="Auch besseren Content? Jetzt Termin sichern" testimonialData={testimonials} />
      <ServiceFaqs title="Häufige Fragen zur Content Produktion" faqData={faqData} />
      <Appointment heading="Lass uns gemeinsam Content produzieren, der deine Marke auf das nächste Level hebt." buttonText="Jetzt Termin anfragen" />
    </>
  );
}
