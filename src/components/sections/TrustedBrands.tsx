"use client";

const logos = [
  { src: "/logos/4D-Elements.svg", alt: "4D Elements" },
  { src: "/logos/cre8ify.svg", alt: "Cre8ify" },
  { src: "/logos/deutsche.svg", alt: "Deutsche" },
  { src: "/logos/hk_logo.svg", alt: "HK Logo" },
  { src: "/logos/Jonuschies.svg", alt: "Jonuschies" },
  { src: "/logos/lds.svg", alt: "LDS" },
  { src: "/logos/lebenswert.svg", alt: "Lebenswert" },
  { src: "/logos/Culture_Station_Logo.svg", alt: "Culture Station" },
  { src: "/logos/frangipani-logo-300x158.svg", alt: "Frangipani" },
  { src: "/logos/Handyklinik-Iserlohn.svg", alt: "Handyklinik Iserlohn" },
];

const logos2 = [
  { src: "/logos/happy-buns.svg", alt: "Happy Buns" },
  { src: "/logos/IEC_Roosters-Logo.svg", alt: "Iserlohn Roosters" },
  { src: "/logos/Just-Virtual-Food-Brands.svg", alt: "Just Virtual Food Brands" },
  { src: "/logos/Kundenlogos.svg", alt: "Kundenlogos" },
  { src: "/logos/logo_Hagebaumarkt.svg", alt: "Hagebaumarkt" },
  { src: "/logos/Logo_UME_RLK.svg", alt: "UME RLK" },
  { src: "/logos/MAD_Logo.svg", alt: "MAD" },
  { src: "/logos/MD_Physio_Logo.svg", alt: "MD Physio" },
];

export default function TrustedBrands() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden" aria-label="Vertrauenswürdige Marken">
      <div className="container text-center mb-10 sm:mb-14">
        <span className="section-label mx-auto">Vertrauen</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
          Diese Brands setzen auf uns.
        </h2>
      </div>

      {/* Row 1: scroll left */}
      <div className="overflow-hidden py-3 relative">
        <div className="absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />
        <div className="scroll-row scroll-left">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={`top-${i}`} className="scroll-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: scroll right */}
      <div className="overflow-hidden py-3 relative mt-4">
        <div className="absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />
        <div className="scroll-row scroll-right">
          {[...logos2, ...logos2, ...logos2].map((logo, i) => (
            <div key={`bottom-${i}`} className="scroll-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
