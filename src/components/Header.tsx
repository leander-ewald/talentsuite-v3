"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, Menu, X, ArrowRight } from "lucide-react";

const services = [
  { href: "/services/performanceRecruiting", label: "Performance Recruiting" },
  { href: "/services/customerAcquisition", label: "Neukundengewinnung" },
  { href: "/services/ecommerce", label: "Fullservice E-Commerce" },
  { href: "/services/socialMediaManagement", label: "Social Media Management" },
  { href: "/services/contentProduktion", label: "Content Produktion" },
  { href: "/services/webDevelopment", label: "Webentwicklung" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 100) setVisible(true);
      else if (y > lastScrollY.current) setVisible(false);
      else setVisible(true);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const hideHeader = pathname === "/madeByMe";
  if (hideHeader) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1001] transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`sm:mx-5 sm:mt-4 sm:rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(9,22,34,0.92)] backdrop-blur-xl sm:border sm:border-[rgba(255,255,255,0.06)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" aria-label="TalentSuite Startseite" className="flex-shrink-0">
            <img src="/logo.png" alt="TalentSuite" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-[rgba(255,255,255,0.7)] hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Startseite
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[rgba(255,255,255,0.7)] hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Dienstleistungen
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-[rgba(9,22,34,0.97)] backdrop-blur-2xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-2 min-w-[260px] shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="h-px bg-[rgba(255,255,255,0.06)] my-1.5" />
                  <a
                    href="https://made-by-mee.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-[rgba(255,255,255,0.4)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all"
                  >
                    MadeByMEE
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary !py-2.5 !px-6 !text-sm"
          >
            Erstgespräch vereinbaren
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Navigation schließen" : "Navigation öffnen"}
          >
            {mobileOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[rgba(9,22,34,0.98)] backdrop-blur-2xl z-[1002] transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="flex flex-col items-center justify-center h-full gap-5 px-6 overflow-y-auto"
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)", paddingLeft: "max(24px, env(safe-area-inset-left))", paddingRight: "max(24px, env(safe-area-inset-right))" }}
        >
          <Link href="/" className="text-xl font-semibold text-white" onClick={() => setMobileOpen(false)}>
            Startseite
          </Link>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors py-2 px-4 min-h-[44px] flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <div className="h-px w-20 bg-[rgba(255,255,255,0.1)] my-2" />
          <Link
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Erstgespräch vereinbaren
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
