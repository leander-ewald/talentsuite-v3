import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ROI & Erfolg messen | Recruiting & Marketing KPIs | TalentSuite",
  description:
    "Recruiting ROI berechnen, Cost-per-Hire senken und Marketing-Erfolg messbar machen. Benchmarks, KPIs und datenbasierte Strategien für bessere Ergebnisse.",
  alternates: { canonical: "https://talentsuite.io/blog/roi" },
};

const blogArticles = [
  { id: 5, reading: "8 Min.", title: "Recruiting ROI berechnen: Erfolg messbar machen", desc: "Die wichtigsten KPIs: Cost-per-Hire, Cost-per-Application, Time-to-Hire und Quality-of-Hire mit konkreten Benchmarks.", link: "/blog/recruiting-roi-berechnen", category: "HR-Wissen" },
  { id: 2, reading: "7 Min.", title: "Was kostet Performance Recruiting? Preise, Modelle & ROI", desc: "Transparente Kostenübersicht: Agenturhonorar, Werbebudget, Kosten pro Bewerbung und ROI-Vergleich mit Headhuntern und Jobbörsen.", link: "/blog/performance-recruiting-kosten", category: "Performance Recruiting" },
  { id: 19, reading: "8 Min.", title: "Landingpage Optimierung: 12 Conversion-Tipps", desc: "12 bewährte Tipps für höhere Conversion Rates: Headline, CTA, Formulardesign und mobile UX.", link: "/blog/landing-page-optimierung", category: "Conversion" },
  { id: 20, reading: "8 Min.", title: "Conversion Rate Optimierung", desc: "Mehr Kunden und Bewerbungen aus dem gleichen Traffic: CRO Strategien und Best Practices.", link: "/blog/conversion-rate-optimierung", category: "Conversion" },
  { id: 18, reading: "8 Min.", title: "Facebook Werbung Kosten 2026", desc: "Was Facebook Werbung wirklich kostet: CPC, CPM, Budget-Empfehlungen und Branchen-Benchmarks.", link: "/blog/facebook-werbung-kosten", category: "Performance Marketing" },
  { id: 30, reading: "8 Min.", title: "Recruiting Agentur Vergleich: Den richtigen Partner finden", desc: "Worauf du bei der Auswahl einer Recruiting Agentur achten musst: Leistungen, Kosten und Warnsignale.", link: "/blog/recruiting-agentur-vergleich", category: "HR-Wissen" },
  { id: 22, reading: "8 Min.", title: "Was kostet Social Media Marketing?", desc: "Preise und Budgets im Überblick: Agenturbetreuung, Content-Produktion und Werbeanzeigen.", link: "/blog/was-kostet-social-media-marketing", category: "Social Media" },
  { id: 24, reading: "8 Min.", title: "Website erstellen lassen: Kosten und Anbieter", desc: "Was eine professionelle Website kostet, wie lange es dauert und worauf du achten musst.", link: "/blog/website-erstellen-lassen-kosten", category: "Webentwicklung" },
];

export default function BlogROI() {
  return (
    <div style={{ minHeight: "60vh" }}>
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[rgba(255,255,255,0.5)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Zurück zum Blog
          </Link>

          <span className="section-label">ROI & Kosten</span>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Maximierung des ROI mit der Expertise einer Digitalagentur
          </h1>
          <p className="text-base md:text-lg text-[rgba(255,255,255,0.6)] mb-8 max-w-2xl">
            Durch transparente Prozesse und enge Zusammenarbeit erzielen wir
            messbare Ergebnisse. Unsere Experten sorgen dafür, dass jede
            Maßnahme den maximalen Nutzen für dein Unternehmen bringt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogArticles.map((article) => (
              <Link
                key={article.id}
                href={article.link}
                className="card-glass p-5 block group"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span className="badge">{article.category}</span>
                  <span
                    className="flex items-center gap-1"
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    <Clock size={11} />
                    {article.reading}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
                  {article.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog" className="btn-outline">
              Alle Artikel ansehen
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
