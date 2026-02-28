"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Star, MapPin, ArrowRight, CheckCircle, Phone } from "lucide-react";

const testimonialData = [
  {
    name: "Anton Specht",
    role: "CEO - SPECHT IMMOBILIEN",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "Dank TalentSuite konnten wir in kürzester Zeit qualifizierte Immobilienberater über Social Recruiting gewinnen. Die Prozesse laufen sauber, messbar und bringen genau die Kandidaten, die wirklich zu uns passen.",
  },
  {
    name: "Joel Schüssler",
    role: "COO - Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Ob Contentproduktion, Performance Recruiting oder Neukundengewinnung -- alle Bereiche liefern konstant starke Ergebnisse.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Mit TalentSuite haben wir unser Wachstum systematisiert: neue Kundenanfragen täglich, automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert, effizient und absolut zuverlässig.",
  },
  {
    name: "Jan Röhrig",
    role: "Leitung Merchandise & E-Commerce - Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/Jan.png",
    review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben -- von der Shopstruktur bis zur technischen Umsetzung. Das Team versteht es, Marken digital stark und verkaufsfähig zu machen.",
  },
  {
    name: "Jessica Pacha-Mollé",
    role: "Head of HR Heizkurier GmbH",
    from: "Köln/Bonn",
    to: "Deutschland",
    img: "/assets/Jessicas.png",
    review: "Mit TalentSuite haben wir unsere Employer Brand spürbar gestärkt. Durch hochwertigen Content und gezielte Performance-Recruiting-Kampagnen setzen sie unsere Vorstellungen punktgenau um.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(testimonialData.length);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);
  const activePageRef = useRef(0);
  const totalPagesRef = useRef(testimonialData.length);

  // Calculate total pages based on how many cards fit in view
  const updatePageCount = useCallback(() => {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) return;
    const firstCard = container.children[0] as HTMLElement;
    const gap = 20; // gap-5 = 20px
    const cardWidth = firstCard.offsetWidth + gap;
    const visibleCards = Math.max(1, Math.floor((container.offsetWidth + gap) / cardWidth));
    const pages = Math.max(1, testimonialData.length - visibleCards + 1);
    setTotalPages(pages);
    totalPagesRef.current = pages;
    // Clamp active page if needed
    if (activePageRef.current >= pages) {
      setActivePage(pages - 1);
      activePageRef.current = pages - 1;
    }
  }, []);

  useEffect(() => {
    updatePageCount();
    window.addEventListener("resize", updatePageCount);
    return () => window.removeEventListener("resize", updatePageCount);
  }, [updatePageCount]);

  const scrollToPage = useCallback((pageIndex: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[pageIndex] as HTMLElement;
    if (!card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft - 16,
      behavior: "smooth",
    });
    setActivePage(pageIndex);
    activePageRef.current = pageIndex;
  }, []);

  // Detect active page from scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const children = Array.from(container.children) as HTMLElement[];
        const containerLeft = container.scrollLeft + container.offsetLeft;
        let closest = 0;
        let minDist = Infinity;
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - containerLeft - 16);
          if (dist < minDist) { minDist = dist; closest = i; }
        });
        const page = Math.min(closest, totalPagesRef.current - 1);
        setActivePage(page);
        activePageRef.current = page;
      }, 80);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance every 5s with pause on interaction
  useEffect(() => {
    const scheduleNext = () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
      autoPlayRef.current = setTimeout(() => {
        if (pausedRef.current) return;
        const next = (activePageRef.current + 1) % totalPagesRef.current;
        scrollToPage(next);
        scheduleNext();
      }, 5000);
    };

    scheduleNext();

    const container = scrollRef.current;
    if (!container) return;

    const pause = () => {
      pausedRef.current = true;
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    };

    const resume = () => {
      pausedRef.current = false;
      scheduleNext();
    };

    container.addEventListener("pointerdown", pause);
    container.addEventListener("pointerup", resume);
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("touchend", resume);

    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
      container.removeEventListener("pointerdown", pause);
      container.removeEventListener("pointerup", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, [scrollToPage]);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "TalentSuite",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: testimonialData.length.toString(),
    },
    review: testimonialData.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: t.review,
    })),
  };

  return (
    <section className="section" aria-label="Kundenstimmen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-xl">
            <span className="section-label">Testimonials</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-tight mb-3">
              Das sagen unsere Kunden
            </h2>
            <p className="text-sm sm:text-base text-[rgba(255,255,255,0.5)]">
              Echte Ergebnisse, echte Stimmen aus Handwerk, E-Commerce und Dienstleistung.
            </p>
          </div>
          <Link
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Auch so wachsen?
            <Phone size={16} />
          </Link>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        >
          {testimonialData.map((t, i) => (
            <article
              key={i}
              className="card-glass flex-shrink-0 w-[85vw] sm:w-[340px] md:w-[380px] snap-start p-5 sm:p-6 flex flex-col"
              aria-label={`Bewertung von ${t.name}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.role}`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[rgba(255,255,255,0.08)]"
                />
                <div>
                  <h3 className="font-semibold text-[15px]">{t.name}</h3>
                  <p className="text-xs text-[rgba(255,255,255,0.45)] truncate max-w-[220px]">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 von 5 Sternen">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Location + Verified */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-1.5 text-xs text-[rgba(255,255,255,0.45)]">
                  <MapPin size={12} />
                  {t.from}
                  <ArrowRight size={10} className="mx-0.5" />
                  {t.to}
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[rgba(27,152,224,0.8)]">
                  <CheckCircle size={12} />
                  Verifiziert
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Page Dots — dynamically matches visible pages */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activePage
                  ? "w-8 bg-[var(--color-accent)]"
                  : "w-2 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]"
              }`}
              aria-label={`Seite ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
