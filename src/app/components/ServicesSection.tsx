import { Link } from "react-router";
import { motion } from "motion/react";
import { Zap, Radio, Smile, ArrowRight } from "lucide-react";
import { SERVICES } from "../lib/seoData";

const iconMap: Record<string, React.ElementType> = { Zap, Radio, Smile };

// Real images: laser therapy on face/nose · laser on ear (auriculotherapy) · facial reflexology massage
const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1719471497337-d140858e6ba7?w=600&q=80",
  "https://images.unsplash.com/photo-1632568851266-b8e23c1738f5?w=600&q=80",
  "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=600&q=80",
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00C9A7" }}>Nos Techniques</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F3A] mb-4">
            3 approches pour arrêter de fumer définitivement
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Un protocole unique à Évreux combinant laser auriculaire, auriculothérapie et réflexologie faciale pour des résultats durables.
          </p>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00C9A7" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={`/${service.slug}`}
                  className="group block rounded-3xl overflow-hidden border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-2xl transition-all duration-300 h-full bg-white"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={SERVICE_IMAGES[i]}
                      alt={`${service.name} — SmokeOff Évreux`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,31,58,0.7) 0%, transparent 60%)" }} />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#00C9A7" }}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-[#0A1F3A]">
                      {i === 0 ? "Technique principale" : i === 1 ? "Complémentaire" : "Renforcement"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-[#0A1F3A] text-lg font-bold mb-2 group-hover:text-[#00C9A7] transition-colors">{service.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "#00C9A7" }}>
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0A1F3A 0%, #0d2d4a 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,201,167,0.15) 0%, transparent 70%)" }} />
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00C9A7" }}>Prêt(e) à commencer ?</p>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Arrêtez de fumer dès aujourd'hui</h3>
          <p className="text-white/60 mb-7">1 séance · 45 min · Résultats immédiats · Forfait Solo 180€</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation" className="inline-flex items-center justify-center gap-2 text-[#0A1F3A] font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105" style={{ backgroundColor: "#00C9A7" }}>
              Réserver maintenant
            </Link>
            <a href="tel:+33678525945" className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full border-2 border-white/20 hover:border-white/50 transition-all">
              06 78 52 59 45
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
