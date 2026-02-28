"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="section" aria-label="Über TalentSuite">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="section-label">Über uns</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black leading-[1.1] tracking-tight mb-5">
              Warum Unternehmen von anderen Agenturen zu uns wechseln
            </h2>
            <p className="text-[var(--color-accent)] font-semibold text-base sm:text-lg mb-6">
              Weil wir nicht bunt präsentieren, sondern messbar liefern.
            </p>
            <div className="space-y-4 text-sm sm:text-base text-[rgba(255,255,255,0.55)] leading-relaxed mb-8">
              <p>
                In den letzten 24 Monaten haben wir für über 50 Unternehmen im DACH-Raum
                nachweislich Fachkräfte gewonnen, Neukunden-Pipelines aufgebaut und
                E-Commerce-Umsätze gesteigert. Nicht mit Bauchgefühl, sondern mit
                skalierbaren Systemen, die ab Woche 1 Ergebnisse liefern.
              </p>
              <p>
                Transparent. Messbar. Reproduzierbar. Wir setzen auf strukturierte Abläufe,
                klare KPIs und echte Performance &mdash; statt leere Versprechen.
              </p>
            </div>
            <Link
              href="https://calendar.app.google/QFoADWcRwwuYUoky8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Jetzt kennenlernen
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Images: Bento Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] group">
                <img
                  src="/assets/about-1.png"
                  alt="TalentSuite Team bei der Strategieentwicklung"
                  loading="lazy"
                  className="w-full h-36 sm:h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] group">
                <img
                  src="/assets/about-2.png"
                  alt="Datengetriebenes Marketing-Dashboard"
                  loading="lazy"
                  className="w-full h-36 sm:h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pt-8 sm:pt-10">
              <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] group">
                <img
                  src="/assets/about-3.png"
                  alt="Erfolgreiche Recruiting-Kampagne"
                  loading="lazy"
                  className="w-full h-full min-h-[240px] sm:min-h-[300px] md:min-h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
