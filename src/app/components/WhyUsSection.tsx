import { motion } from "motion/react";
import { Zap, Shield, Heart, Clock, Award, Leaf } from "lucide-react";
import smokeImage from "../../imports/smoke_image.jpg";

const reasons = [
  { icon: Zap, title: "Résultats dès la 1re séance", desc: "Plus de 80% de nos patients arrêtent de fumer immédiatement après une seule séance laser. Efficacité prouvée.", color: "#00C9A7" },
  { icon: Shield, title: "100% naturel, sans médicaments", desc: "Aucun substitut nicotinique, aucun médicament. Le laser stimule votre propre système endorphinique.", color: "#3b82f6" },
  { icon: Heart, title: "Méthode douce et indolore", desc: "Le laser froid (soft laser) est totalement indolore. Pas d'aiguilles, pas d'effets secondaires.", color: "#ef4444" },
  { icon: Clock, title: "Séance rapide 45 minutes", desc: "Une seule séance de 45 minutes suffit pour la majorité des patients. Résultats immédiats et durables.", color: "#f59e0b" },
  { icon: Award, title: "Praticienne certifiée", desc: "Formation spécialisée en laser thérapeutique, auriculothérapie et réflexologie. Protocoles validés.", color: "#8b5cf6" },
  { icon: Leaf, title: "Suivi personnalisé inclus", desc: "Accompagnement téléphonique post-séance pendant 30 à 60 jours pour éviter la rechute.", color: "#00C9A7" },
];

const LASER_IMAGE = smokeImage;

export default function WhyUsSection() {
  return (
    <section className="py-20 px-4 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "#F0F9F7" }}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,201,167,0.2) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00C9A7" }}>Pourquoi SmokeOff ?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F3A] mb-4">La méthode SmokeOff, c'est quoi ?</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Une approche globale, naturelle et efficace pour en finir définitivement avec la cigarette à Évreux.</p>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00C9A7" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={LASER_IMAGE}
                alt="Séance de laser auriculaire pour sevrage tabagique à Évreux — SmokeOff"
                className="w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(to top, rgba(10,31,58,0.6) 0%, transparent 50%)" }} />
            </div>
            {/* Overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-[200px]"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="font-bold text-[#0A1F3A] text-sm">89 avis vérifiés</p>
              <p className="text-gray-400 text-xs">tous notés 5/5</p>
            </motion.div>
            {/* Stat badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-4 -left-4 rounded-2xl p-4 text-center shadow-xl border border-white/20"
              style={{ backgroundColor: "#00C9A7" }}
            >
              <p className="text-white font-bold text-2xl">80%</p>
              <p className="text-white/80 text-xs">réussite<br />dès J1</p>
            </motion.div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: color + "18" }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="text-[#0A1F3A] font-bold text-sm mb-1.5">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "80%+", label: "Taux de réussite dès J1", icon: "🎯" },
            { value: "1", label: "Séance suffit", icon: "⚡" },
            { value: "89+", label: "Patients satisfaits", icon: "⭐" },
            { value: "0", label: "Médicaments utilisés", icon: "🌿" },
          ].map(({ value, label, icon }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.03 }}
              className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-3xl font-bold mb-1" style={{ color: "#00C9A7" }}>{value}</p>
              <p className="text-gray-500 text-xs">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
