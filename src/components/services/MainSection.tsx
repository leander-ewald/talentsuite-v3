"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MainSectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function MainSection({ title, description, buttonText, buttonLink = "https://calendar.app.google/QFoADWcRwwuYUoky8", imageSrc, imageAlt }: MainSectionProps) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden" aria-label="Service Hero">
      <div className="glow -top-32 -right-32" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="text-[clamp(1.75rem,4vw,3.25rem)] font-black leading-[1.1] tracking-tight mb-5 overflow-hidden overflow-wrap-[break-word]" style={{ overflowWrap: "break-word" }}>{title}</h1>
            <p className="text-base sm:text-lg text-[rgba(255,255,255,0.6)] leading-relaxed mb-8" style={{ overflowWrap: "break-word" }}>{description}</p>
            <Link href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {buttonText}
              <ArrowUpRight size={18} />
            </Link>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.35)] mt-5 flex items-center gap-3 flex-wrap">
              <span>Kostenlos & unverbindlich</span>
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
              <span>Erste Ergebnisse in 30 Tagen</span>
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
              <span>Kein Risiko</span>
            </p>
          </div>
          <div className="flex justify-center">
            <img src={imageSrc} alt={imageAlt} className="max-w-full h-auto rounded-2xl border border-[rgba(255,255,255,0.06)]" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
