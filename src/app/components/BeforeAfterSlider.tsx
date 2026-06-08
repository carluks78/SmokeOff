import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { TrendingUp, Heart, Smile, Euro, Wind, Moon } from "lucide-react";

// Prix paquet = 13€ pour 20 cigarettes → 0.65€/cigarette
const PRICE_PER_CIG = 13 / 20;

const BENEFITS = [
  { icon: Euro, label: "Économies / an", calc: (cigs: number) => `${(cigs * 365 * PRICE_PER_CIG).toFixed(0)} €`, color: "#00C9A7" },
  { icon: Heart, label: "Risque cardiaque", value: "−50%", color: "#ef4444" },
  { icon: Wind, label: "Capacité respiratoire", value: "+30%", color: "#3b82f6" },
  { icon: Smile, label: "Qualité de vie", value: "+80%", color: "#f59e0b" },
  { icon: Moon, label: "Qualité du sommeil", value: "+60%", color: "#8b5cf6" },
  { icon: TrendingUp, label: "Énergie retrouvée", value: "×2", color: "#00C9A7" },
];

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [cigarettes, setCigarettes] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = useCallback((e: MouseEvent) => { if (isDragging) getPosition(e.clientX); }, [isDragging, getPosition]);
  const onTouchMove = useCallback((e: TouchEvent) => { getPosition(e.touches[0].clientX); }, [getPosition]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp); };
  }, [onMouseMove]);

  const monthlySavings = (cigarettes * 30 * PRICE_PER_CIG).toFixed(0);
  const yearlySavings = (cigarettes * 365 * PRICE_PER_CIG).toFixed(0);

  return (
    <section className="py-20 px-4 lg:px-8 overflow-hidden" style={{ background: "linear-gradient(180deg, #F0F9F7 0%, #fff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00C9A7" }}>Avant / Après</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F3A] mb-4">
            Faites glisser pour voir votre transformation
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Glissez vers la droite pour découvrir ce que vous gagnez en arrêtant de fumer avec SmokeOff.
          </p>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00C9A7" }} />
        </div>

        {/* Cigarettes input */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="text-gray-600 text-sm font-medium">Je fume</span>
          <div className="flex items-center gap-2 bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-2">
            <button
              onClick={() => setCigarettes(Math.max(1, cigarettes - 1))}
              className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-gray-500 hover:bg-gray-100 transition-colors"
            >−</button>
            <span className="w-12 text-center font-bold text-xl text-[#0A1F3A]">{cigarettes}</span>
            <button
              onClick={() => setCigarettes(Math.min(60, cigarettes + 1))}
              className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-gray-500 hover:bg-gray-100 transition-colors"
            >+</button>
          </div>
          <span className="text-gray-600 text-sm font-medium">cigarettes / jour</span>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden cursor-ew-resize select-none"
          style={{ height: 420, userSelect: "none" }}
          onMouseDown={onMouseDown}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={(e) => getPosition(e.touches[0].clientX)}
        >
          {/* BEFORE — left side */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1b00 100%)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">AVANT</p>
              <div className="text-6xl mb-4">🚬</div>
              <h3 className="text-white text-2xl font-bold mb-3">Avec la cigarette</h3>
              <div className="space-y-2 text-left">
                {[
                  `💸 ${monthlySavings} €/mois brûlés en cigarettes`,
                  "😮‍💨 Souffle court, toux matinale",
                  "😟 Dépendance & irritabilité",
                  "🏥 Risques cardio-vasculaires ++",
                  "🌑 Fatigue, mauvaise peau, odeur",
                  `📅 ${(cigarettes * 365).toLocaleString()} cig/an`,
                ].map((item) => (
                  <p key={item} className="text-white/70 text-sm flex items-center gap-2">{item}</p>
                ))}
              </div>
            </div>
            {/* Fog effect */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(200,160,80,0.15) 0%, transparent 70%)" }} />
          </div>

          {/* AFTER — right side, clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A1F3A 0%, #083d30 100%)" }}>
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,201,167,0.15) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="text-[#00C9A7] text-xs uppercase tracking-widest mb-3">APRÈS SmokeOff</p>
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="text-white text-2xl font-bold mb-3">Libre du tabac</h3>
                <div className="space-y-2 text-left">
                  {[
                    `💰 ${yearlySavings} € économisés / an`,
                    "💨 Respiration fluide, énergie retrouvée",
                    "😊 Liberté & sérénité retrouvées",
                    "❤️ Risque cardio divisé par 2",
                    "✨ Peau éclatante, pas d'odeur tabac",
                    "🎯 1 séance laser — résultats immédiats",
                  ].map((item) => (
                    <p key={item} className="text-white/80 text-sm flex items-center gap-2">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider handle */}
          <div
            className="absolute top-0 bottom-0 flex items-center justify-center z-20"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-0 bottom-0 w-0.5" style={{ backgroundColor: "#00C9A7" }} />
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border-2 border-white z-10 cursor-ew-resize"
              style={{ backgroundColor: "#00C9A7" }}
            >
              <span className="text-white font-bold text-sm select-none">⟺</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
            AVANT
          </div>
          <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full z-10 text-[#0A1F3A]" style={{ backgroundColor: "#00C9A7" }}>
            APRÈS
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
          {BENEFITS.map(({ icon: Icon, label, calc, value, color }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: color + "20" }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <p className="text-xl font-bold" style={{ color }}>
                {calc ? calc(cigarettes) : value}
              </p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">
            Avec <strong className="text-[#0A1F3A]">{cigarettes} cigarettes/jour</strong>, vous économiseriez{" "}
            <strong style={{ color: "#00C9A7" }}>{yearlySavings} € par an</strong> en arrêtant de fumer.
            Notre séance à 180€ est rentabilisée en{" "}
            <strong className="text-[#0A1F3A]">{Math.ceil(180 / parseFloat(monthlySavings))} mois</strong>.
          </p>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: "#00C9A7" }}
          >
            Réserver ma séance — 180€ →
          </Link>
        </div>
      </div>
    </section>
  );
}
