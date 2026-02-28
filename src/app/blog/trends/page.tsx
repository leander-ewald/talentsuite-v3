import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Trends & Strategien 2026 | Recruiting & Digitalisierung | TalentSuite",
  description:
    "Die neuesten Trends in Recruiting, Employer Branding und digitalem Marketing. Aktuelle Strategien, neue Plattformen und innovative Methoden für 2026.",
  alternates: { canonical: "https://talentsuite.io/blog/trends" },
};

const blogArticles = [
  { id: 29, reading: "8 Min.", title: "Personalgewinnung 2026: Trends und Strategien", desc: "Die wichtigsten Trends und Strategien für erfolgreiche Mitarbeitergewinnung im Jahr 2026.", link: "/blog/personalgewinnung-2026", category: "HR-Wissen" },
  { id: 28, reading: "8 Min.", title: "Fachkräftemangel Deutschland 2026", desc: "Aktuelle Zahlen, am stärksten betroffene Branchen und konkrete Lösungsansätze für Unternehmen.", link: "/blog/fachkraeftemangel-deutschland", category: "HR-Wissen" },
  { id: 1, reading: "8 Min.", title: "Performance Recruiting: Was ist das und wie funktioniert es?", desc: "Performance Recruiting einfach erklärt: Definition, Ablauf, Kosten und warum 80% der Fachkräfte nur über Social Media erreichbar sind.", link: "/blog/performance-recruiting-was-ist-das", category: "Performance Recruiting" },
  { id: 3, reading: "10 Min.", title: "Social Media Recruiting: Der komplette Leitfaden", desc: "Social Media Recruiting von A bis Z: Plattformen, Strategien, häufige Fehler und der optimale Prozess für erfolgreiche Personalgewinnung.", link: "/blog/social-media-recruiting-leitfaden", category: "Social Recruiting" },
  { id: 12, reading: "8 Min.", title: "TikTok Recruiting: Azubis und junge Fachkräfte", desc: "Wie Unternehmen über TikTok die Gen Z erreichen: Strategie, Content-Ideen und Best Practices.", link: "/blog/tiktok-recruiting", category: "Social Recruiting" },
  { id: 13, reading: "8 Min.", title: "LinkedIn Recruiting: Fach- und Führungskräfte gewinnen", desc: "LinkedIn Recruiting Strategie: Active Sourcing, Content und Ads für qualifizierte Kandidaten.", link: "/blog/linkedin-recruiting-strategie", category: "Social Recruiting" },
  { id: 10, reading: "7 Min.", title: "Employer Branding im Handwerk", desc: "5 Säulen für eine starke Arbeitgebermarke: Authentische Einblicke, Benefits, Mitarbeiter-Botschafter und mehr.", link: "/blog/employer-branding-handwerk", category: "Employer Branding" },
  { id: 11, reading: "8 Min.", title: "Employer Branding Video: Recruiting-Videos produzieren", desc: "Formate, Kosten und Best Practices für überzeugende Employer Branding und Recruiting Videos.", link: "/blog/employer-branding-video", category: "Employer Branding" },
  { id: 4, reading: "8 Min.", title: "Bewerberfunnel erstellen: Mobile Recruiting-Funnels", desc: "Schritt-für-Schritt Anleitung: Aufbau, Best Practices und Conversion-Tipps für Bewerberfunnels im Performance Recruiting.", link: "/blog/bewerberfunnel-erstellen", category: "Recruiting Technik" },
];

export default function BlogTrends() {
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

          <span className="section-label">Trends & Strategien</span>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Die neuesten Trends und Strategien mit einer Digitalagentur
          </h1>
          <p className="text-base md:text-lg text-[rgba(255,255,255,0.6)] mb-8 max-w-2xl">
            Unsere Agentur bleibt stets am Puls der Zeit. Mit innovativen
            Methoden und fundierter Marktkenntnis entwickeln wir digitale
            Strategien, die exakt auf dein Business zugeschnitten sind.
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
