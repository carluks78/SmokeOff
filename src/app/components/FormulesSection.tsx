import { Link } from "react-router";
import { motion } from "motion/react";
import { Check, Phone, Star } from "lucide-react";
import { FORFAITS, PHONE_LINK, WHATSAPP_NUMBER } from "../lib/seoData";

export default function FormulesSection() {
  return (
    <section className="py-20 px-4 lg:px-8" style={{ background: "linear-gradient(135deg, #0A1F3A 0%, #0d2d4a 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00C9A7" }}>Tarifs transparents</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Forfaits Sevrage Tabagique</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Investissez dans votre santé. Le coût d'une séance est récupéré en quelques semaines d'économies sur les cigarettes.
          </p>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00C9A7" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {FORFAITS.map((forfait, i) => (
            <motion.div
              key={forfait.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`rounded-2xl p-8 relative ${forfait.popular ? "border-2 ring-4 ring-[#00C9A7]/20" : "border border-white/10"}`}
              style={{
                backgroundColor: forfait.popular ? "rgba(0,201,167,0.1)" : "rgba(255,255,255,0.05)",
                borderColor: forfait.popular ? "#00C9A7" : undefined,
              }}
            >
              {forfait.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 text-xs font-bold text-[#0A1F3A] px-4 py-1.5 rounded-full" style={{ backgroundColor: "#00C9A7" }}>
                    <Star className="w-3 h-3" fill="currentColor" /> LE PLUS POPULAIRE
                  </span>
                </div>
              )}

              <div className="text-center mb-6 mt-2">
                <h3 className="text-white text-2xl font-bold mb-1">{forfait.name}</h3>
                <div className="flex items-baseline justify-center gap-1 my-3">
                  <span className="text-5xl font-bold" style={{ color: "#00C9A7" }}>{forfait.label}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{forfait.desc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {forfait.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00C9A7" }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link
                  to="/reservation"
                  className="block w-full text-center font-bold py-3.5 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={forfait.popular ? { backgroundColor: "#00C9A7", color: "#0A1F3A" } : { backgroundColor: "rgba(0,201,167,0.15)", color: "#00C9A7", border: "1px solid rgba(0,201,167,0.3)" }}
                >
                  Réserver ce forfait
                </Link>
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-2 w-full text-center text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" /> Ou appelez le 06 78 52 59 45
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            💡 Un fumeur à 10 cigarettes/jour dépense environ 150–180€/mois. Une seule séance s'autofinance en un mois d'économies.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {["Séance 100% remboursée si efficace → sur devis", "Paiement en 2× possible", "Aucun frais cachés"].map((txt) => (
              <div key={txt} className="flex items-center gap-2 text-white/50 text-sm">
                <Check className="w-4 h-4" style={{ color: "#00C9A7" }} /> {txt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
