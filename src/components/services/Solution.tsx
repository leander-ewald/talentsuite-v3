"use client";

interface SolutionItem {
  number: string;
  title: string;
  desc: string;
}

interface SolutionProps {
  title: string;
  description: string;
  items: SolutionItem[];
}

export default function Solution({ title, description, items }: SolutionProps) {
  return (
    <section className="section relative" aria-label="Unsere Lösung">
      <div className="glow -bottom-32 -left-32" />
      <div className="container relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <span className="section-label mx-auto">Lösung</span>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black tracking-tight mb-4">{title}</h2>
          <p className="text-[rgba(255,255,255,0.55)] leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div key={i} className="card-glass p-6">
              <span className="block text-[2rem] font-black text-[rgba(27,152,224,0.2)] leading-none stat-number mb-3">
                {item.number}
              </span>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
