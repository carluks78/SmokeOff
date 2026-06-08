import { Link } from "react-router";
import { Check, Phone, Star, Zap, Clock, Shield } from "lucide-react";
import { motion } from "motion/react";
import { FORFAITS, PHONE_LINK, PHONE, WHATSAPP_NUMBER } from "../lib/seoData";

export default function Forfaits() {
  return (
    <>
      <section className="py-20 px-4 lg:px-8" style={{ backgroundColor: "#0A1F3A" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Forfaits & Tarifs — <span style={{ color: "#00C9A7" }}>Sevrage Tabagique Laser</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Des tarifs transparents et accessibles pour arrêter de fumer. Investissez dans votre santé — récupérez votre mise dès le premier mois d'économies.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8" style={{ backgroundColor: "#F0F9F7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {FORFAITS.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-white rounded-3xl p-9 shadow-lg relative ${f.popular ? "ring-2 ring-[#00C9A7]" : ""}`}
              >
                {f.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#0A1F3A] px-5 py-2 rounded-full" style={{ backgroundColor: "#00C9A7" }}>
                      <Star className="w-3.5 h-3.5" fill="currentColor" /> LE PLUS POPULAIRE
                    </span>
                  </div>
                )}
                <div className="text-center mb-7 mt-3">
                  <h2 className="text-2xl font-bold text-[#0A1F3A] mb-2">{f.name}</h2>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-bold" style={{ color: "#00C9A7" }}>{f.label}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{f.desc}</p>
                </div>
                <ul className="space-y-3.5 mb-8">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-gray-600 text-sm">
                      <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#00C9A7" }} /> {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/reservation"
                  className="block w-full text-center font-bold py-4 rounded-2xl transition-all hover:opacity-90"
                  style={{ backgroundColor: "#00C9A7", color: "#0A1F3A" }}
                >
                  Réserver ce forfait
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Why invest */}
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-10">
            <h2 className="text-xl font-bold text-[#0A1F3A] mb-6 text-center">Pourquoi c'est un bon investissement ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "1 mois d'économies", desc: "Un fumeur à 10 cig/jour dépense ~150–180€/mois. La séance est amortie en 1 mois !" },
                { icon: Clock, title: "Toute une vie gagnée", desc: "Santé préservée, années de vie retrouvées. Bénéfices priceless." },
                { icon: Shield, title: "Résultats garantis", desc: "80% de réussite dès la 1re séance. Si rechute, séance complémentaire à tarif réduit." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(0,201,167,0.12)" }}>
                    <Icon className="w-6 h-6" style={{ color: "#00C9A7" }} />
                  </div>
                  <h3 className="font-bold text-[#0A1F3A] text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">Des questions sur nos forfaits ?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full" style={{ backgroundColor: "#0A1F3A" }}>
                <Phone className="w-5 h-5" /> {PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je voudrais des infos sur vos forfaits. ")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
