import type { Metadata } from "next";
import MainSection from "@/components/services/MainSection";
import Steps from "@/components/services/Steps";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import Solution from "@/components/services/Solution";
import Traditional from "@/components/services/Traditional";
import Appointment from "@/components/services/Appointment";

export const metadata: Metadata = {
  title: "Webentwicklung Agentur | UX Design & SEO | TalentSuite",
  description: "Professionelle Webentwicklung: UX/UI Design, React & Next.js, SEO-Optimierung und Wartung. Websites, die überzeugen und konvertieren.",
  alternates: { canonical: "https://talentsuite.io/services/webDevelopment" },
};

const traditionalData = [
  { img: "/assets/review-img.png", name: "Veraltetes Design, das nicht überzeugt" },
  { img: "/assets/review-img.png", name: "Keine mobile Optimierung" },
  { img: "/assets/review-img.png", name: "Langsame Ladezeiten und schlechte Performance" },
  { img: "/assets/review-img.png", name: "Keine Conversion-Optimierung" },
];

const solutions = [
  { number: "01", title: "UX/UI Design & Konzeption", desc: "Nutzerzentriertes Design, das überzeugt und konvertiert -- auf jedem Gerät." },
  { number: "02", title: "Webentwicklung & Programmierung", desc: "Moderne Technologien (React, Next.js, Shopify) für maximale Performance." },
  { number: "03", title: "SEO & Performance", desc: "Technisches SEO, Core Web Vitals und schnelle Ladezeiten für bessere Rankings." },
  { number: "04", title: "Wartung & Weiterentwicklung", desc: "Kontinuierliche Optimierung, Updates und Support für deine Website." },
];

const steps = [
  { image: "/assets/step1.svg", desc: "Professionelle Website, die Vertrauen schafft" },
  { image: "/assets/step2.svg", desc: "Bessere Rankings durch technisches SEO" },
  { image: "/assets/step3.svg", desc: "Höhere Conversion durch optimierte UX" },
  { image: "/assets/step4.svg", desc: "Zukunftssichere Technologie" },
];

const testimonials = [
  { name: "Jan Röhrig", role: "Leitung E-Commerce -- Iserlohn Roosters", from: "Iserlohn", to: "Deutschland", img: "/assets/Jan.png", review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben -- von der Shopstruktur bis zur technischen Umsetzung." },
  { name: "Viktor Brehm", role: "CEO -- Schlafplatz", from: "München", to: "Deutschland", img: "/assets/Viktior.png", review: "Automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert und zuverlässig." },
  { name: "Joel Schüssler", role: "COO -- Just Virtual Food Brands", from: "Zürich", to: "Schweiz", img: "/assets/Joel.png", review: "Alle Bereiche liefern konstant starke Ergebnisse." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Webentwicklung", provider: { "@type": "MarketingAgency", name: "TalentSuite", url: "https://talentsuite.io", areaServed: ["DE", "AT", "CH"] }, description: "Professionelle Webentwicklung: UX/UI Design, React & Next.js, SEO und Wartung.", serviceType: "Webentwicklung" }) }} />
      <MainSection title={<>Deine Website ist dein<br />bester <span className="text-[var(--color-accent)]">Vertriebler</span> &ndash; 24/7.</>} description="Wir entwickeln performante, SEO-optimierte Websites, die Vertrauen schaffen und Besucher in Kunden verwandeln." buttonText="Jetzt Web-Beratung buchen" imageSrc="/assets/services-img.png" imageAlt="Webentwicklung -- Moderne Websites mit React und Next.js" />
      <Traditional title="Deine Website verliert Kunden -- jeden Tag." description="Eine veraltete, langsame oder schlecht strukturierte Website kostet dich täglich potenzielle Kunden. Ohne moderne Technik und klare Nutzerführung verlierst du Umsatz." data={traditionalData} />
      <Solution title="Webentwicklung, die konvertiert" description="Websites, die nicht nur gut aussehen, sondern messbar performen -- von der Konzeption über die Entwicklung bis zur SEO-Optimierung." items={solutions} />
      <Steps title="Was du von uns bekommst" stepsData={steps} />
      <ServiceTestimonials title="Das sagen unsere Kunden" description="Echte Ergebnisse aus der Web-Zusammenarbeit." link="https://calendar.app.google/QFoADWcRwwuYUoky8" linkText="Auch eine bessere Website? Jetzt Termin sichern" testimonialData={testimonials} />
      <Appointment heading="Lass uns gemeinsam eine Website bauen, die Vertrauen schafft und Kunden gewinnt." buttonText="Jetzt Termin anfragen" />
    </>
  );
}
