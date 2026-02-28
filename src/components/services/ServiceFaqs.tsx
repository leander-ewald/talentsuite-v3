"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqsProps {
  title?: string;
  description?: string;
  faqData: FaqItem[];
}

export default function ServiceFaqs({
  title = "Häufig gestellte Fragen",
  description,
  faqData,
}: ServiceFaqsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="section relative" aria-label="Häufig gestellte Fragen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label mx-auto">FAQ</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-sm sm:text-base text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "border-[rgba(27,152,224,0.2)]" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
                itemProp="name"
              >
                <span>{faq.question}</span>
                <span className={`faq-icon ${openIndex === i ? "bg-[rgba(27,152,224,0.2)] rotate-0" : ""}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <div
                className="faq-answer"
                data-open={openIndex === i ? "true" : "false"}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div>
                  <div className="faq-answer-inner" itemProp="text">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
