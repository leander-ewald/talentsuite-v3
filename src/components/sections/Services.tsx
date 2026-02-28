"use client";

import Link from "next/link";
import { Users, TrendingUp, ShoppingCart, Megaphone, Video, Code, ArrowUpRight } from "lucide-react";

const serviceData = [
  {
    title: "Performance Recruiting",
    desc: "Innerhalb von 30 Tagen qualifizierte Bewerbungen auf deinem Tisch -- ohne Headhunter, ohne Stellenbörsen. Über Social Media Funnels, die funktionieren.",
    link: "/services/performanceRecruiting",
    badge: "40+ Bewerbungen",
    icon: Users,
  },
  {
    title: "Neukundengewinnung",
    desc: "Planbar 15-40 qualifizierte Kundenanfragen pro Monat -- automatisiert über Ads, Funnels und intelligente Follow-Up-Systeme.",
    link: "/services/customerAcquisition",
    badge: "Planbar skalierbar",
    icon: TrendingUp,
  },
  {
    title: "Fullservice E-Commerce",
    desc: "Von 0 auf Shop oder vom Shop zum Umsatzrekord -- wir bauen, optimieren und skalieren deinen Online-Handel.",
    link: "/services/ecommerce",
    badge: "Ganzheitlich",
    icon: ShoppingCart,
  },
  {
    title: "Social Media Management",
    desc: "Deine Marke auf Autopilot: Strategie, Content & Community-Management, das Engagement und Reichweite messbar steigert.",
    link: "/services/socialMediaManagement",
    badge: "Kanalübergreifend",
    icon: Megaphone,
  },
  {
    title: "Content Produktion",
    desc: "Videos, Ads & Social Formate, die konvertieren -- professionell produziert und auf deine Zielgruppe zugeschnitten.",
    link: "/services/contentProduktion",
    badge: "Conversionstark",
    icon: Video,
  },
  {
    title: "Web & App Development",
    desc: "Individuelle Websites, Plattformen und Apps, die verkaufen -- schnell, skalierbar und auf Conversion optimiert.",
    link: "/services/webDevelopment",
    badge: "Maßgeschneidert",
    icon: Code,
  },
];

export default function Services() {
  return (
    <section className="section relative" aria-label="Unsere Dienstleistungen">
      <div className="glow -top-48 -right-48" />
      <div className="container relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-label mx-auto">Was wir tun</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-tight">
            Unsere Kernleistungen
          </h2>
        </div>

        {/* Grid of all services — 2x3 on desktop, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {serviceData.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link key={i} href={service.link} className="card-glass p-5 sm:p-6 flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(27,152,224,0.08)] border border-[rgba(27,152,224,0.12)] flex items-center justify-center text-[var(--color-accent)]">
                    <Icon size={18} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.04)] flex items-center justify-center text-[rgba(255,255,255,0.3)] group-hover:text-white group-hover:bg-[rgba(27,152,224,0.15)] transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <span className="badge mb-3 self-start">{service.badge}</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed flex-1 break-words">
                  {service.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
