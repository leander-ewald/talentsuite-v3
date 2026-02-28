"use client";

interface StepItem {
  image: string;
  desc: string;
}

interface StepsProps {
  title: string;
  stepsData: StepItem[];
}

export default function Steps({ title, stepsData }: StepsProps) {
  return (
    <section className="section" aria-label={title}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black tracking-tight">{title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stepsData.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-[rgba(27,152,224,0.06)] border border-[rgba(27,152,224,0.15)] flex items-center justify-center group-hover:bg-[rgba(27,152,224,0.12)] transition-colors">
                <img src={step.image} alt={step.desc} loading="lazy" className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
