import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQ { q: string; a: string; }

export default function FAQSection({ faqs, title = "Questions Fréquentes" }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00C9A7" }}>FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F3A] mb-4">{title}</h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00C9A7" }} />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden" style={{ backgroundColor: open === i ? "#F0F9F7" : "#fff" }}>
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0A1F3A] text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  style={{ color: "#00C9A7" }}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
