"use client";

import Link from "next/link";
import { Star, MapPin, ArrowRight, CheckCircle, Phone } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  from: string;
  to: string;
  img: string;
  review: string;
}

interface ServiceTestimonialsProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  testimonialData: Testimonial[];
}

export default function ServiceTestimonials({ title, description, link, linkText, testimonialData }: ServiceTestimonialsProps) {
  return (
    <section className="section" aria-label="Kundenstimmen">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="section-label mx-auto">Kundenstimmen</span>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black tracking-tight mb-4">{title}</h2>
          <p className="text-[rgba(255,255,255,0.55)] mb-6">{description}</p>
          <Link
            href={link || "https://calendar.app.google/QFoADWcRwwuYUoky8"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mx-auto"
          >
            {linkText || "Jetzt Termin sichern"}
            <Phone size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonialData.map((t, i) => (
            <article key={i} className="card-glass p-5 sm:p-6 flex flex-col" aria-label={`Bewertung von ${t.name}`}>
              <div className="flex items-center gap-3 mb-4">
                <img src={t.img} alt={`${t.name}, ${t.role}`} loading="lazy" className="w-11 h-11 rounded-full object-cover border-2 border-[rgba(255,255,255,0.08)] flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm leading-tight">{t.name}</h3>
                  <p className="text-[11px] text-[rgba(255,255,255,0.4)] leading-tight mt-0.5">{t.role}</p>
                </div>
                <div className="flex gap-0.5 flex-shrink-0" aria-label="5 von 5 Sternen">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />)}
                </div>
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed flex-1">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] text-xs text-[rgba(255,255,255,0.4)]">
                <div className="flex items-center gap-1.5">
                  <MapPin size={11} />{t.from}
                  <ArrowRight size={10} />{t.to}
                </div>
                <span className="flex items-center gap-1 text-[rgba(27,152,224,0.8)]">
                  <CheckCircle size={11} />Verifiziert
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
