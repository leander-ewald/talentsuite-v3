"use client";

const processData = [
  {
    num: "01",
    image: "/assets/step1.svg",
    heading: "Analyse & Audit",
    desc: "Wir analysieren deine aktuelle Situation, Zielgruppe und Wettbewerb -- und identifizieren die größten Wachstumshebel für dein Unternehmen.",
  },
  {
    num: "02",
    image: "/assets/step2.svg",
    heading: "Strategie & Konzept",
    desc: "Auf Basis der Daten entwickeln wir eine maßgeschneiderte Strategie mit klaren KPIs und messbaren Meilensteinen.",
  },
  {
    num: "03",
    image: "/assets/step3.svg",
    heading: "Umsetzung & Launch",
    desc: "Unser Team setzt Kampagnen, Content und Systeme um -- professionell und schnell. Erste Ergebnisse ab Woche 1.",
  },
  {
    num: "04",
    image: "/assets/step4.svg",
    heading: "Optimierung & Skalierung",
    desc: "Durch laufende Datenanalyse optimieren wir kontinuierlich und skalieren, was nachweislich funktioniert.",
  },
];

export default function Process() {
  return (
    <section className="section" aria-label="Unser Prozess">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-label mx-auto">So arbeiten wir</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-tight">
            In 4 Schritten zu{" "}
            <span className="text-[var(--color-accent)]">messbarem Wachstum</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(27,152,224,0.25)] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processData.map((step, i) => (
              <div key={i} className="relative text-center group">
                {/* Step Number */}
                <div className="relative z-10 mb-4 sm:mb-6">
                  <span className="block text-[2.5rem] sm:text-[3rem] font-black text-[rgba(27,152,224,0.12)] leading-none stat-number">
                    {step.num}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-[rgba(27,152,224,0.06)] border border-[rgba(27,152,224,0.15)] flex items-center justify-center group-hover:bg-[rgba(27,152,224,0.12)] group-hover:border-[rgba(27,152,224,0.3)] transition-all duration-300">
                  <img src={step.image} alt={`Schritt ${step.num}: ${step.heading}`} className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3">{step.heading}</h3>
                <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.45)] leading-relaxed break-words">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
