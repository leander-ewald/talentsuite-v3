"use client";

import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    const consent = document.cookie.split(";").find((c) => c.trim().startsWith("cookie_consent="));
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    document.cookie = "cookie_consent=accepted; path=/; max-age=31536000; SameSite=Lax";
    setShow(false);
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  };

  const acceptEssential = () => {
    document.cookie = "cookie_consent=essential; path=/; max-age=31536000; SameSite=Lax";
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[2000] p-4 md:p-5"
      style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
    >
      <div className="max-w-[640px] mx-auto bg-[rgba(9,22,34,0.97)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-5 sm:p-6 backdrop-blur-[40px] shadow-[0_-8px_40px_rgba(0,0,0,0.4)]">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-[rgba(27,152,224,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Shield size={18} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-1.5">
              Wir respektieren deine Privatsphäre
            </h4>
            <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.55)]">
              Wir verwenden Cookies, um dein Erlebnis zu verbessern und unsere Website zu optimieren.{" "}
              <a href="/datenschutz" className="text-[var(--color-accent)] underline underline-offset-2">
                Mehr erfahren
              </a>
            </p>
          </div>
        </div>

        {details && (
          <div className="my-4 p-4 bg-[rgba(255,255,255,0.03)] rounded-xl border border-[rgba(255,255,255,0.06)] text-[13px] text-[rgba(255,255,255,0.5)] leading-relaxed space-y-2.5">
            <p>
              <strong className="text-[rgba(255,255,255,0.8)]">Notwendig:</strong> Session-Cookies,
              Cookie-Einstellung (immer aktiv)
            </p>
            <p>
              <strong className="text-[rgba(255,255,255,0.8)]">Analyse & Marketing:</strong> Google
              Tag Manager, Google Analytics, Meta Pixel &mdash; zur Messung der Website-Performance und
              Optimierung unserer Werbeanzeigen.
            </p>
            <p>
              <strong className="text-[rgba(255,255,255,0.8)]">Drittanbieter:</strong> Videos werden
              über DigitalOcean CDN bereitgestellt. Dabei wird deine IP-Adresse übermittelt.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2.5 mt-4">
          <button onClick={acceptAll} className="btn-primary sm:flex-1 justify-center !py-3.5 !text-sm min-h-[48px]">
            Alle akzeptieren
          </button>
          <button onClick={acceptEssential} className="btn-outline sm:flex-1 justify-center !py-3.5 !text-sm min-h-[48px]">
            Nur notwendige
          </button>
          <button
            onClick={() => setDetails(!details)}
            className="px-4 py-3.5 text-sm text-[rgba(255,255,255,0.4)] hover:text-white bg-transparent border-none cursor-pointer transition-colors min-h-[48px]"
          >
            {details ? "Weniger" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
}
