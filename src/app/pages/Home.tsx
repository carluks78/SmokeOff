import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import FormulesSection from "../components/FormulesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ZonesBand from "../components/ZonesBand";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { GoogleReviewSection } from "../components/GoogleReviewButton";
import { HOME_FAQS } from "../lib/seoData";
import { Link } from "react-router";
import { motion } from "motion/react";

const internalLinks = [
  { to: "/sevrage-tabagique-laser-evreux", label: "Sevrage Tabagique Laser Évreux" },
  { to: "/auriculotherapie-laser-evreux", label: "Auriculothérapie Laser Évreux" },
  { to: "/reflexologie-faciale-evreux", label: "Réflexologie Faciale Évreux" },
  { to: "/forfaits", label: "Forfaits & Tarifs" },
  { to: "/reservation", label: "Prendre Rendez-vous" },
  { to: "/arret-tabac-laser-louviers", label: "Arrêt Tabac Louviers" },
  { to: "/arret-tabac-laser-vernon", label: "Arrêt Tabac Vernon" },
  { to: "/arret-tabac-laser-pacy-sur-eure", label: "Arrêt Tabac Pacy-sur-Eure" },
  { to: "/arret-tabac-laser-rouen", label: "Arrêt Tabac Rouen" },
  { to: "/contact", label: "Nous Contacter" },
];

// ─── Bannière promotionnelle été ───────────────────────────────────────────
const PROMO_START = new Date("2025-07-25");
const PROMO_END   = new Date("2025-08-15T23:59:59");

function PromoBanner() {
  const now = new Date();
  if (now < PROMO_START || now > PROMO_END) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-4 lg:mx-8 mt-6 mb-2 rounded-2xl overflow-hidden border border-[#00C9A7]/25"
      style={{
        background: "linear-gradient(135deg, #0A1F3A 0%, #0d2d52 60%, #0A3A2A 100%)",
      }}
    >
      <div className="relative px-7 py-7 md:px-10 md:py-8 z-10">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 bg-[#00C9A7]/15 border border-[#00C9A7]/40 text-[#00C9A7] text-[11px] font-medium px-3 py-1 rounded-full uppercase tracking-wide">
          🌞 Offre été
        </span>
        <p className="text-white/50 text-xs mt-1">25 juillet → 15 août 2025</p>

        {/* Headline */}
        <h2 className="text-white text-xl md:text-2xl font-semibold mt-3 mb-2 leading-snug">
          Profitez de vos vacances pour dire adieu au tabac
        </h2>
        <p className="text-white/70 text-sm max-w-xl leading-relaxed">
          L'été, c'est le moment idéal pour prendre soin de vous. Moins de stress,
          plus de sérénité — les conditions parfaites pour réussir votre sevrage.
        </p>

        {/* Offers */}
        <div className="flex flex-wrap gap-3 mt-5">
          {[
            { label: "Forfait Solo", old: "170 €", price: "150 €", saving: "– 20 € cet été" },
            { label: "Forfait Duo",  old: "350 €", price: "290 €", saving: "– 60 € cet été" },
          ].map(({ label, old, price, saving }) => (
            <div
              key={label}
              className="bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3 min-w-[155px]"
            >
              <p className="text-white/50 text-[11px] uppercase tracking-widest">{label}</p>
              <div className="flex items-baseline gap-2 mt-1.5">
                <span className="text-white/30 text-sm line-through">{old}</span>
                <span className="text-[#00C9A7] text-2xl font-semibold">{price}</span>
              </div>
              <span className="inline-block mt-1.5 bg-[#00C9A7]/20 text-[#00C9A7] text-[11px] px-2 py-0.5 rounded">
                {saving}
              </span>
            </div>
          ))}

          {/* CTA */}
          <div className="flex items-center ml-auto">
            <Link
              to="/reservation"
              className="inline-flex items-center gap-2 bg-[#00C9A7] hover:bg-[#00b396] text-[#0A1F3A] font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Je réserve →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
// ──────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 🌞 Bannière promo été — visible uniquement du 25/07 au 15/08 */}
      <PromoBanner />

      {/* Process steps */}
      <section className="py-14 px-4 lg:px-8 bg-white border-b border-gray-100">
        {/* ... inchangé ... */}
      </section>

      <ServicesSection />
      <BeforeAfterSlider />
      <WhyUsSection />
      <FormulesSection />
      <TestimonialsSection />
      <GoogleReviewSection />
      <ZonesBand />
      <FAQSection faqs={HOME_FAQS} title="Questions fréquentes — Sevrage tabagique laser Évreux" />

      {/* Internal links SEO */}
      <section className="py-10 px-4 lg:px-8 bg-gray-50">
        {/* ... inchangé ... */}
      </section>

      {/* Rich SEO text block — PRIX MIS À JOUR */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1F3A] mb-5">Centre de Sevrage Tabagique Laser à Évreux — SmokeOff</h2>
          <div className="prose prose-sm max-w-none text-gray-500 space-y-4">
            <p>
              Situé au <strong className="text-gray-700">34 rue des Alouettes à Évreux</strong> (Eure, 27000), le centre{" "}
              <strong className="text-gray-700">SmokeOff</strong> est le spécialiste du{" "}
              <strong className="text-gray-700">sevrage tabagique au laser auriculaire</strong> en Normandie.
              Notre approche exclusive combine trois techniques : le{" "}
              <Link to="/sevrage-tabagique-laser-evreux" className="text-[#00C9A7] hover:underline">sevrage tabagique au laser</Link>,
              l'<Link to="/auriculotherapie-laser-evreux" className="text-[#00C9A7] hover:underline">auriculothérapie laser</Link> et la{" "}
              <Link to="/reflexologie-faciale-evreux" className="text-[#00C9A7] hover:underline">réflexologie faciale</Link>.
              Cette combinaison unique offre un taux de réussite supérieur à 80% dès la première séance.
            </p>
            <p>
              Nous accueillons des patients de toute la région Normandie :
              <strong className="text-gray-700"> Évreux, Louviers, Vernon, Pacy-sur-Eure, Conches-en-Ouche, Bernay, Val-de-Reuil, Gaillon, Les Andelys, Dreux</strong>…
              Deux forfaits sont disponibles : le{" "}
              {/* ↓ PRIX MIS À JOUR */}
              <Link to="/forfaits" className="text-[#00C9A7] hover:underline">Forfait Solo à 170€</Link> pour une séance individuelle,
              et le <Link to="/forfaits" className="text-[#00C9A7] hover:underline">Forfait Duo à 350€</Link> pour arrêter à deux.
            </p>
            <p>
              Pour prendre rendez-vous, appelez le <strong className="text-gray-700">06 78 52 59 45</strong> (Lun–Sam 9h–19h)
              ou écrivez via WhatsApp. Réponse rapide garantie.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
