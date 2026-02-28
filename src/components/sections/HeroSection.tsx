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
  { href: "https://www.tiktok.com/@talentsuite", label: "TikTok", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.98a8.21 8.21 0 0 0 4.76 1.52V7.05a4.84 4.84 0 0 1-1-.36z"/></svg> },
  { href: "https://www.youtube.com/@talentsuite", label: "YouTube", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg> },
  { href: "https://www.instagram.com/talentsuite.io/", label: "Instagram", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.07 4.07 0 0 1-.98 1.51 4.07 4.07 0 0 1-1.51.98c-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51a4.07 4.07 0 0 1 1.51-.98c.47-.17 1.27-.36 2.44-.41C8.84 2.17 9.22 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.77 5.77 0 0 0-2.09 1.36A5.77 5.77 0 0 0 .69 4.08C.39 4.84.19 5.72.13 6.99.07 8.27.06 8.68.06 11.94s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.36 2.09a5.77 5.77 0 0 0 2.09 1.36c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.77 5.77 0 0 0 2.09-1.36 5.77 5.77 0 0 0 1.36-2.09c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.77 5.77 0 0 0-1.36-2.09A5.77 5.77 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg> },
  { href: "https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE", label: "Facebook", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg> },
  { href: "https://www.linkedin.com/company/talentsuiteio/", label: "LinkedIn", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg> },
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] text-white flex items-center justify-center opacity-30 sm:opacity-0 sm:hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
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

            {/* Partner Badges */}
            <div className="flex items-center gap-4 sm:gap-6 mt-8">
              <img src="/assets/meta-logo.svg" alt="Offizieller Meta Business Partner" className="h-10 sm:h-12 rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/assets/google-logo.svg" alt="Google Partner Agentur" className="h-10 sm:h-12 rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
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
                  <span className="text-xs text-[rgba(255,255,255,0.45)] mt-1 block tracking-wide">
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
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
