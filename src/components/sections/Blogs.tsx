"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

const blogData = [
  {
    reading: "5 Min.",
    title: "Wie eine Digitalagentur Ihr Unternehmen voranbringen kann",
    desc: "Unsere Digitalagentur unterstützt Branding-Unternehmen mit ganzheitlichen Strategien. Wir liefern maßgeschneiderte Lösungen, die Sichtbarkeit, Reichweite und Wachstum messbar steigern.",
    link: "/blog/marketing",
  },
  {
    reading: "5 Min.",
    title: "Die neuesten Trends und Strategien mit einer Digitalagentur",
    desc: "Unsere Agentur bleibt stets am Puls der Zeit. Mit innovativen Methoden und fundierter Marktkenntnis entwickeln wir digitale Strategien, die exakt auf Ihr Business zugeschnitten sind.",
    link: "/blog/trends",
  },
  {
    reading: "5 Min.",
    title: "Maximierung des ROI mit der Expertise einer Digitalagentur",
    desc: "Durch transparente Prozesse und enge Zusammenarbeit erzielen wir messbare Ergebnisse. Unsere Experten sorgen dafür, dass jede Maßnahme den maximalen Nutzen für Ihr Unternehmen bringt.",
    link: "/blog/roi",
  },
];

export default function Blogs() {
  return (
    <section className="section" aria-label="Blog">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          <div>
            <span className="section-label">Blog</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black leading-[1.1] tracking-tight">
              Online-Marketing & SEO, die dich messbar nach vorn bringen.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-[rgba(255,255,255,0.55)] leading-relaxed mb-6">
              Wir sind eine spezialisierte Digitalagentur für wachstumsstarke Marken. Mit unserem ganzheitlichen
              Ansatz bringen wir deine Marke auf das nächste Level: strategisch durchdacht
              und messbar erfolgreich.
            </p>
            <Link href="/blog" className="btn-outline">
              Alle Artikel
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {blogData.map((blog, i) => (
            <Link key={i} href={blog.link} className="card-glass p-5 sm:p-6 group block">
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center gap-1.5 text-xs text-[rgba(255,255,255,0.35)] font-medium">
                  <Clock size={12} />
                  {blog.reading}
                </span>
                <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.04)] flex items-center justify-center text-[rgba(255,255,255,0.3)] group-hover:text-white group-hover:bg-[rgba(27,152,224,0.15)] transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-[rgba(255,255,255,0.45)] leading-relaxed line-clamp-4">{blog.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
