"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Pause } from "lucide-react";

const stats = [
  { value: "50+", label: "Unternehmen" },
  { value: "5M+", label: "Impressionen" },
  { value: "6M+", label: "Werbebudget (EUR)" },
];

const socialLinks = [
  { href: "https://www.tiktok.com/@talentsuite", label: "TK" },
  { href: "https://www.youtube.com/@talentsuite", label: "YT" },
  { href: "https://www.instagram.com/talentsuite.io/", label: "IG" },
  { href: "https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE", label: "FB" },
  { href: "https://www.linkedin.com/company/talentsuiteio/", label: "LI" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <section className="hero-section relative min-h-[100svh] flex items-end pb-12 sm:pb-16 lg:pb-20 pt-32 overflow-hidden" aria-label="Startbereich">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
        aria-hidden="true"
        src="https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/video.mp4"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[rgba(9,22,34,0.65)] to-[rgba(9,22,34,0.3)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,22,34,0.5)] to-transparent" />

      {/* Video Control */}
      <button
        ref={playBtnRef}
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
        aria-label="Video steuern"
      >
        <Play size={24} className="group-hover:hidden" />
        <Pause size={24} className="hidden group-hover:block" />
      </button>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-xs font-medium text-[rgba(255,255,255,0.7)] tracking-wide">DACH-weit aktiv</span>
            </div>

            <h1 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-6">
              Keine Bewerber?{" "}
              <br className="hidden sm:block" />
              Keine Neukunden?{" "}
              <br />
              <span className="text-[var(--color-accent)]">Wir ändern das.</span>
            </h1>

            <p className="text-base sm:text-lg text-[rgba(255,255,255,0.6)] mb-8 max-w-lg leading-relaxed">
              50+ Unternehmen im DACH-Raum vertrauen auf TalentSuite als ihre
              Fullservice-Agentur für Performance Recruiting, Neukundengewinnung
              und E-Commerce. Messbar, planbar, ab Woche 1.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="https://calendar.app.google/QFoADWcRwwuYUoky8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Kostenlose Potenzialanalyse
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.35)] mt-5 flex items-center gap-3 flex-wrap">
              <span>Kostenlos & unverbindlich</span>
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
              <span>Erste Ergebnisse in 30 Tagen</span>
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
              <span>Kein Risiko</span>
            </p>

            {/* Partner Logos */}
            <div className="flex items-center gap-6 mt-8">
              <img src="/assets/meta-logo.svg" alt="Offizieller Meta Business Partner" className="h-7 sm:h-8 opacity-50 hover:opacity-80 transition-opacity" />
              <img src="/assets/google-logo.svg" alt="Google Partner Agentur" className="h-7 sm:h-8 opacity-50 hover:opacity-80 transition-opacity" />
            </div>
          </div>

          {/* Right: Stats Bar */}
          <div className="flex lg:flex-col items-center lg:items-stretch bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center lg:flex-col">
                <div className="text-center px-5 sm:px-8 lg:px-10 py-5 lg:py-7">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white stat-number">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[rgba(255,255,255,0.45)] mt-1 block tracking-wide">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <>
                    <div className="w-px h-10 bg-[rgba(255,255,255,0.08)] lg:hidden" />
                    <div className="hidden lg:block h-px w-3/4 mx-auto bg-[rgba(255,255,255,0.06)]" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Sidebar (Desktop) */}
      <div className="hidden lg:flex absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`TalentSuite auf ${s.label}`}
            className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[11px] font-semibold text-[rgba(255,255,255,0.4)] hover:text-white hover:border-[rgba(255,255,255,0.25)] transition-all duration-300"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
