"use client";

import { TrendingUp, Video, Target, PenSquare, Users } from "lucide-react";

const capabilities = [
  {
    title: "Social Media Wachstum",
    desc: "Steigere deine Online-Präsenz mit gezielten Strategien, die Follower und Engagement erhöhen.",
    icon: TrendingUp,
  },
  {
    title: "Werbefilme",
    desc: "Erstelle fesselnde Kurzvideos, die Aufmerksamkeit erregen und auf allen Plattformen Ergebnisse liefern.",
    icon: Video,
  },
  {
    title: "Performance Marketing",
    desc: "Optimiere dein Werbebudget mit datengetriebenen Kampagnen auf Meta und Google für maximalen ROI.",
    icon: Target,
  },
  {
    title: "Werbetexte & Strategien",
    desc: "Erstelle überzeugende Inhalte und strategische Botschaften, die bei deiner Zielgruppe Anklang finden.",
    icon: PenSquare,
  },
  {
    title: "Neukundengewinnung",
    desc: "Werde online sichtbar und baue nachhaltige Geschäftsbeziehungen mit potenziellen Neukunden auf.",
    icon: Users,
  },
];

const platforms = [
  { name: "TikTok", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.4a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 3.76.92V6.69Z" },
  { name: "YouTube", path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" },
  { name: "Instagram", path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" },
  { name: "Facebook", path: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07Z" },
  { name: "LinkedIn", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.22 0Z" },
];

export default function Campaigns() {
  return (
    <section className="section relative" aria-label="Kampagnen">
      <div className="glow -bottom-32 left-1/2 -translate-x-1/2" />
      <div className="container relative z-10">
        {/* Platform Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[rgba(27,152,224,0.06)] border border-[rgba(27,152,224,0.12)] flex items-center justify-center text-[var(--color-accent)]"
              title={p.name}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path d={p.path} />
              </svg>
            </div>
          ))}
        </div>

        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-tight">
            Wir entwickeln Kampagnen{" "}
            <span className="text-[var(--color-accent)]">die performen</span>
          </h2>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {capabilities.slice(0, 3).map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i} className="card-glass p-5 sm:p-6 group">
                <div className="w-10 h-10 rounded-xl bg-[rgba(27,152,224,0.08)] border border-[rgba(27,152,224,0.12)] flex items-center justify-center text-[var(--color-accent)] mb-4 group-hover:bg-[rgba(27,152,224,0.15)] transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5 max-w-full sm:max-w-[calc(66.666%-6px)] lg:max-w-[calc(66.666%-8px)] mx-auto">
          {capabilities.slice(3).map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i + 3} className="card-glass p-5 sm:p-6 group">
                <div className="w-10 h-10 rounded-xl bg-[rgba(27,152,224,0.08)] border border-[rgba(27,152,224,0.12)] flex items-center justify-center text-[var(--color-accent)] mb-4 group-hover:bg-[rgba(27,152,224,0.15)] transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
