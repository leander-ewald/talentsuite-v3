"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { href: "/services/performanceRecruiting", label: "Performance Recruiting" },
  { href: "/services/customerAcquisition", label: "Neukundengewinnung" },
  { href: "/services/ecommerce", label: "Fullservice E-Commerce" },
  { href: "/services/socialMediaManagement", label: "Social Media Management" },
  { href: "/services/contentProduktion", label: "Content Produktion" },
  { href: "/services/webDevelopment", label: "Webentwicklung" },
];

const socialLinks = [
  {
    href: "https://www.tiktok.com/@talentsuite",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.4a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 3.76.92V6.69Z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@talentsuite",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/talentsuite.io/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/talentsuiteio/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.22 0Z" />
      </svg>
    ),
  },
];

const regionLinks = [
  { href: "/blog/mitarbeitergewinnung-maerkischer-kreis", label: "Märkischer Kreis" },
  { href: "/blog/mitarbeitergewinnung-suedwestfalen", label: "Südwestfalen" },
  { href: "/blog/mitarbeitergewinnung-iserlohn", label: "Iserlohn" },
  { href: "/blog/mitarbeitergewinnung-hemer", label: "Hemer" },
  { href: "/blog/mitarbeitergewinnung-menden", label: "Menden" },
  { href: "/blog/mitarbeitergewinnung-hagen", label: "Hagen" },
  { href: "/blog/mitarbeitergewinnung-luedenscheid", label: "Lüdenscheid" },
  { href: "/blog/mitarbeitergewinnung-dortmund", label: "Dortmund" },
  { href: "/blog/mitarbeitergewinnung-arnsberg", label: "Arnsberg" },
  { href: "/blog/mitarbeitergewinnung-unna", label: "Unna" },
  { href: "/blog/mitarbeitergewinnung-schwerte", label: "Schwerte" },
  { href: "/blog/mitarbeitergewinnung-altena", label: "Altena" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/madeByMe") return null;

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="section relative overflow-hidden" aria-label="Jetzt starten">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(27,152,224,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-[2px] bg-[var(--color-accent)] mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] mb-6">
              Bereit für<br />
              <span className="text-[var(--color-accent)]">messbares Wachstum?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              In einem kostenlosen Erstgespräch analysieren wir deine Situation und zeigen dir,
              welche Hebel für dein Unternehmen den größten Impact haben.
            </p>
            <Link
              href="https://calendar.app.google/QFoADWcRwwuYUoky8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Kostenlose Potenzialanalyse buchen
              <ArrowUpRight size={18} />
            </Link>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mt-8 text-sm text-[rgba(255,255,255,0.4)] flex-wrap">
              <span>100% kostenlos</span>
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
              <span>Unverbindlich</span>
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
              <span>Nächster Termin in 48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(0,0,0,0.25)] border-t border-[rgba(255,255,255,0.06)]">
        <div className="container py-16 lg:py-20 pb-[max(4rem,env(safe-area-inset-bottom))]">
          {/* Top: Logo + Social */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14">
            <Link href="/" aria-label="TalentSuite Startseite">
              <img src="/logo.png" alt="TalentSuite Logo" className="h-8 w-auto" />
            </Link>
            <nav className="flex items-center gap-3" aria-label="Social Media">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(255,255,255,0.45)] hover:text-white hover:border-[var(--color-accent)] hover:bg-[rgba(27,152,224,0.1)] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(255,255,255,0.06)] mb-14" />

          {/* Grid: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 mb-14">
            <div>
              <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Über TalentSuite</h4>
              <p className="text-sm text-[rgba(255,255,255,0.45)] leading-relaxed">
                Fullservice-Agentur für Performance Recruiting, Neukundengewinnung und E-Commerce im DACH-Raum.
                50+ Unternehmen vertrauen auf unsere Systeme.
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Dienstleistungen</h4>
              <nav className="flex flex-col gap-1" aria-label="Services Navigation">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200 py-2.5"
                  >
                    {s.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Ressourcen</h4>
              <nav className="flex flex-col gap-1">
                <Link href="/blog" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200 py-1.5">
                  Blog
                </Link>
                <Link href="/so-funktionierts" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200 py-1.5">
                  So funktioniert&apos;s
                </Link>
                <Link href="/preise" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200 py-1.5">
                  Preise
                </Link>
                <Link href="/case-studies" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200 py-1.5">
                  Case Studies
                </Link>
                <a
                  href="https://calendar.app.google/QFoADWcRwwuYUoky8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200 py-1.5"
                >
                  Termin buchen
                </a>
              </nav>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Kontakt</h4>
              <div className="flex flex-col gap-3 text-sm text-[rgba(255,255,255,0.45)]">
                <span className="font-medium text-[rgba(255,255,255,0.6)]">TalentSuite</span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-[var(--color-accent)] flex-shrink-0" />
                  Iserlohn, NRW
                </span>
                <a href="mailto:info@talentsuite.io" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <Mail size={14} className="text-[var(--color-accent)] flex-shrink-0" />
                  info@talentsuite.io
                </a>
              </div>
            </div>
          </div>

          {/* Regional Links */}
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 mb-8">
            <p className="text-[11px] font-semibold text-[rgba(255,255,255,0.3)] uppercase tracking-[0.15em] mb-3">
              Mitarbeitergewinnung in der Region
            </p>
            <nav className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Regionale Seiten">
              {regionLinks.map((r, i) => (
                <span key={r.href} className="flex items-center gap-3">
                  <Link
                    href={r.href}
                    className="text-xs text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200 py-1.5"
                  >
                    {r.label}
                  </Link>
                  {i < regionLinks.length - 1 && <span className="text-[rgba(255,255,255,0.1)]">|</span>}
                </span>
              ))}
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[rgba(255,255,255,0.3)]">
              &copy; {currentYear} TalentSuite &mdash; Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs text-[rgba(255,255,255,0.3)]">
              <Link href="/datenschutz" className="hover:text-white transition-colors duration-200 py-2">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-white transition-colors duration-200 py-2">
                AGB
              </Link>
              <Link href="/impressum" className="hover:text-white transition-colors duration-200 py-2">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
