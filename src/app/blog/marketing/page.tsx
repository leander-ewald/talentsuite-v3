import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Blog | Strategien für digitales Wachstum | TalentSuite",
  description:
    "Praxiswissen zu Performance Marketing, Content Marketing, Social Media und Neukundengewinnung. Strategien und Tipps für messbar mehr Sichtbarkeit und Wachstum.",
  alternates: { canonical: "https://talentsuite.io/blog/marketing" },
};

const MARKETING_CATEGORIES = [
  "Performance Marketing",
  "Neukundengewinnung",
  "B2B Marketing",
  "Content Marketing",
  "Social Media",
  "Online Marketing",
  "SEO",
  "Conversion",
];

const blogArticles = [
  { id: 14, reading: "10 Min.", title: "Neukundengewinnung: 10 digitale Strategien", desc: "10 bewährte Strategien für planbare Kundenanfragen: Meta Ads, Google Ads, SEO, E-Mail Marketing und mehr.", link: "/blog/neukundengewinnung-strategien", category: "Neukundengewinnung" },
  { id: 15, reading: "8 Min.", title: "Meta Ads für Leadgenerierung", desc: "Facebook und Instagram Ads richtig einsetzen: Targeting, Budget, Anzeigen und Lead-Qualifikation.", link: "/blog/meta-ads-leadgenerierung", category: "Performance Marketing" },
  { id: 16, reading: "8 Min.", title: "B2B Leadgenerierung: Strategien für Geschäftskontakte", desc: "LinkedIn, Content Marketing, Cold Outreach und Marketing Automation für planbare B2B-Leads.", link: "/blog/b2b-leadgenerierung", category: "B2B Marketing" },
  { id: 17, reading: "8 Min.", title: "Digitale Neukundengewinnung für Handwerker", desc: "Wie Handwerksbetriebe online Kundenanfragen generieren: Von Google Ads bis Social Media.", link: "/blog/digitale-neukundengewinnung-handwerk", category: "Neukundengewinnung" },
  { id: 18, reading: "8 Min.", title: "Facebook Werbung Kosten 2026", desc: "Was Facebook Werbung wirklich kostet: CPC, CPM, Budget-Empfehlungen und Branchen-Benchmarks.", link: "/blog/facebook-werbung-kosten", category: "Performance Marketing" },
  { id: 19, reading: "8 Min.", title: "Landingpage Optimierung: 12 Conversion-Tipps", desc: "12 bewährte Tipps für höhere Conversion Rates: Headline, CTA, Formulardesign und mobile UX.", link: "/blog/landing-page-optimierung", category: "Conversion" },
  { id: 20, reading: "8 Min.", title: "Conversion Rate Optimierung", desc: "Mehr Kunden und Bewerbungen aus dem gleichen Traffic: CRO Strategien und Best Practices.", link: "/blog/conversion-rate-optimierung", category: "Conversion" },
  { id: 21, reading: "8 Min.", title: "Social Media Marketing für KMU", desc: "Leitfaden für kleine Unternehmen: Plattformen, Strategien und Budgettipps für Social Media.", link: "/blog/social-media-marketing-kmu", category: "Social Media" },
  { id: 22, reading: "8 Min.", title: "Was kostet Social Media Marketing?", desc: "Preise und Budgets im Überblick: Agenturbetreuung, Content-Produktion und Werbeanzeigen.", link: "/blog/was-kostet-social-media-marketing", category: "Social Media" },
  { id: 23, reading: "8 Min.", title: "Content Marketing Strategie für KMU", desc: "Von der Planung über SEO-Content bis zur Distribution: Content Marketing Schritt für Schritt.", link: "/blog/content-marketing-strategie", category: "Content Marketing" },
  { id: 26, reading: "8 Min.", title: "SEO für Handwerker: Bei Google gefunden werden", desc: "Wie Handwerksbetriebe über Google neue Kunden gewinnen: Lokales SEO Schritt für Schritt.", link: "/blog/seo-fuer-handwerker", category: "SEO" },
  { id: 27, reading: "8 Min.", title: "Google Ads für Handwerksbetriebe", desc: "Kunden und Mitarbeiter über Google Werbung finden: Budget, Keywords und Praxistipps.", link: "/blog/google-ads-handwerk", category: "Online Marketing" },
];

export default function BlogMarketing() {
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

          <span className="section-label">Marketing</span>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Marketing, SEO & Neukundengewinnung
          </h1>
          <p className="text-base md:text-lg text-[rgba(255,255,255,0.6)] mb-8 max-w-2xl">
            Praxiswissen zu Performance Marketing, Content Marketing, Social
            Media und digitaler Neukundengewinnung. Strategien und Tipps für
            messbar mehr Sichtbarkeit und Wachstum.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "1.5rem",
            }}
          >
            {MARKETING_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="badge"
                style={{
                  padding: "4px 12px",
                  fontSize: "0.8rem",
                }}
              >
                {cat}
              </span>
            ))}
          </div>

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
