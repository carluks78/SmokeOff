import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../lib/seoData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00C9A7" }}>Témoignages</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F3A] mb-4">Ils ont arrêté de fumer grâce à SmokeOff</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Découvrez les témoignages authentiques de patients qui ont retrouvé leur liberté face au tabac.</p>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00C9A7" }} />
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5" fill="#00C9A7" style={{ color: "#00C9A7" }} />)}
            <span className="ml-2 font-bold text-[#0A1F3A]">5/5</span>
            <span className="text-gray-400 ml-1 text-sm">— 89 avis patients</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4" fill="#00C9A7" style={{ color: "#00C9A7" }} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#00C9A7" }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0A1F3A]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
