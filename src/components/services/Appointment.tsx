import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AppointmentProps {
  heading: string;
  buttonText: string;
  buttonLink?: string;
}

export default function Appointment({ heading, buttonText, buttonLink = "https://calendar.app.google/QFoADWcRwwuYUoky8" }: AppointmentProps) {
  return (
    <section className="section relative overflow-hidden" aria-label="Termin vereinbaren">
      <div className="glow top-0 left-1/2 -translate-x-1/2" />
      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <div className="w-16 h-[2px] bg-[var(--color-accent)] mx-auto mb-8" />
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-black tracking-tight mb-8 leading-tight">{heading}</h2>
        <Link href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
          {buttonText}
          <ArrowUpRight size={18} />
        </Link>
        <div className="flex items-center justify-center gap-4 sm:gap-8 mt-6 text-sm text-[rgba(255,255,255,0.35)] flex-wrap">
          <span>100% kostenlos</span>
          <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
          <span>Unverbindlich</span>
          <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
          <span>Nächster Termin in 48h</span>
        </div>
      </div>
    </section>
  );
}
