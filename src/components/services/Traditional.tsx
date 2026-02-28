"use client";

import { AlertTriangle } from "lucide-react";

interface TraditionalItem {
  img: string;
  name: string;
}

interface TraditionalProps {
  title: string;
  description: string;
  data: TraditionalItem[];
}

export default function Traditional({ title, description, data }: TraditionalProps) {
  return (
    <section className="section" aria-label="Herausforderungen">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((item, i) => (
              <div key={i} className="card-glass p-5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(239,68,68,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle size={14} className="text-[var(--color-danger)]" />
                </div>
                <h3 className="text-sm font-medium text-[rgba(255,255,255,0.75)] leading-snug">{item.name}</h3>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black leading-[1.15] tracking-tight mb-5">{title}</h2>
            <p className="text-base text-[rgba(255,255,255,0.55)] leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
