import { motion } from "motion/react";
import { Phone, Star, Shield, Zap, Users, MapPin } from "lucide-react";
import { Link } from "react-router";
import { PHONE, PHONE_LINK, WHATSAPP_NUMBER } from "../lib/seoData";

const HERO_IMAGE = "https://images.unsplash.com/photo-1584480678234-963dc8a304ac?w=1400&q=80";

// ─── Promo été : passe à true pour afficher, false pour masquer ────────────
const PROMO_ACTIVE = true;
// ──────────────────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function GoogleStars() {
  return (
    <a
      href="https://g.page/r/CfKPIfcLn-uGEBM/review"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FBBC05">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <span className="text-white text-xs font-semibold">5/5 · 89 avis</span>
    </a>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt="Arrêt du tabac au laser Évreux — Sevrage tabagique naturel SmokeOff"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,31,58,0.97) 0%, rgba(10,31,58,0.8) 50%, rgba(10,31,58,0.4) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(0,201,167,0.08) 0%, transparent 60%)" }} />

      {/* Floating laser particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 2 === 0 ? 5 : 3,
            height: i % 2 === 0 ? 5 : 3,
            backgroundColor: "#00C9A7",
            top: `${10 + i * 11}%`,
            right: `${3 + (i % 4) * 7}%`,
            opacity: 0.5,
          }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}

      {/* ─── BANNIÈRE PROMO ÉTÉ ─────────────────────────────────────────── */}
      {PROMO_ACTIVE && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-0 left-0 right-0 z-20"
        >
          <div
            className="mx-4 lg:mx-8 mt-4 rounded-2xl px-6 py-4 md:px-10 md:py-5 border border-[#00C9A7]/30 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            style={{ background: "linear-gradient(135deg, rgba(10,31,58,0.97) 0%, rgba(0,60,42,0.95) 100%)", backdropFilter: "blur(12px)" }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-xl">🌴</span>
              <div>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-0.5"
                  style={{ backgroundColor: "rgba(0,201,167,0.2)", color: "#00C9A7" }}
                >
                  Offre été · 25 juil → 15 août
                </span>
                <p className="text-white font-bold text-base md:text-lg leading-tight">
                  Vacances = moment idéal pour arrêter de fumer 🌿
                </p>
                <p className="text-white/55 text-xs mt-0.5">Moins de stress, plus de sérénité — profitez-en !</p>
              </div>
            </div>

            {/* Tarifs promo */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Solo */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Forfait Solo</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white/30 text-sm line-through">180 €</span>
                    <span className="text-[#00C9A7] text-2xl font-bold">150 €</span>
                  </div>
                </div>
              </div>
              {/* Duo */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Forfait Duo</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white/30 text-sm line-through">350 €</span>
                    <span className="text-[#00C9A7] text-2xl font-bold">290 €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/reservation"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all hover:opacity-90 hover:scale-105 md:ml-auto"
              style={{ backgroundColor: "#00C9A7", color: "#0A1F3A" }}
            >
              J'en profite →
            </Link>
          </div>
        </motion.div>
      )}
      {/* ─────────────────────────────────────────────────────────────────── */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full" style={{ marginTop: PROMO_ACTIVE ? "100px" : "0" }}>
        {/* LEFT — content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border" style={{ backgroundColor: "rgba(0,201,167,0.15)", borderColor: "rgba(0,201,167,0.4)" }}>
            <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#00C9A7" }} />
            <span className="text-xs font-semibold" style={{ color: "#00C9A7" }}>N°1 Sevrage tabagique laser Évreux · 89 patients satisfaits</span>
          </div>

          <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
            Arrêtez de fumer
            <span className="block" style={{ color: "#00C9A7" }}>en 1 séance laser</span>
            <span className="block text-white/90" style={{ fontSize: "0.75em" }}>à Évreux — Normandie</span>
          </h1>

          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            <strong className="text-white">SmokeOff Évreux</strong> est le centre spécialisé en{" "}
            <strong className="text-white">sevrage tabagique au laser auriculaire</strong>,{" "}
            <strong className="text-white">auriculothérapie</strong> et{" "}
            <strong className="text-white">réflexologie faciale</strong> dans l'Eure.
            Méthode naturelle, indolore, sans médicaments. Plus de <strong className="text-white">80% de réussite</strong> dès la 1ʳᵉ séance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl"
              style={{ backgroundColor: "#00C9A7" }}
            >
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite prendre rendez-vous pour un sevrage tabagique au laser. ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B358] text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <WhatsAppIcon /> Réserver via WhatsApp
            </a>
          </div>

          {/* Google review + trust */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <GoogleStars />
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4" style={{ color: "#00C9A7" }} />
              34 rue des Alouettes, 27000 Évreux
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5">
            {[
              { icon: Zap,    text: "Laser Auriculaire" },
              { icon: Shield, text: "Sans Médicaments" },
              { icon: Users,  text: "Forfait Duo 350€" },
              { icon: Star,   text: "80% Réussite" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/55 text-sm">
                <Icon className="w-4 h-4" style={{ color: "#00C9A7" }} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — pricing cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4 lg:max-w-sm"
        >
          {/* Solo */}
          <motion.div
            className="rounded-2xl p-6 border backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(0,201,167,0.25)" }}
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Forfait</p>
                <h3 className="text-white text-xl font-bold">Solo</h3>
              </div>
              <div className="text-right">
                {PROMO_ACTIVE && (
                  <p className="text-white/35 text-sm line-through">180 €</p>
                )}
                <p className="text-4xl font-bold" style={{ color: "#00C9A7" }}>
                  {PROMO_ACTIVE ? "150 €" : "180 €"}
                </p>
                <p className="text-white/40 text-xs">par personne</p>
                {PROMO_ACTIVE && (
                  <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(0,201,167,0.2)", color: "#00C9A7" }}>
                    🌞 Offre été
                  </span>
                )}
              </div>
            </div>
            <ul className="space-y-1.5 mb-4">
              {["Séance laser 45 min", "Bilan personnalisé", "Anti-fringales inclus", "Suivi 30 jours"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/65 text-sm">
                  <span style={{ color: "#00C9A7" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link to="/reservation" className="block w-full text-center text-[#0A1F3A] font-bold py-2.5 rounded-xl text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "rgba(0,201,167,0.7)" }}>
              Réserver →
            </Link>
          </motion.div>

          {/* Duo */}
          <motion.div
            className="rounded-2xl p-6 border-2 relative backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0,201,167,0.12)", borderColor: "#00C9A7" }}
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -top-3 left-5">
              <span className="text-xs font-bold text-[#0A1F3A] px-3 py-1 rounded-full" style={{ backgroundColor: "#00C9A7" }}>⭐ POPULAIRE</span>
            </div>
            <div className="flex items-center justify-between mb-4 mt-2">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Forfait</p>
                <h3 className="text-white text-xl font-bold">Duo</h3>
              </div>
              <div className="text-right">
                {PROMO_ACTIVE && (
                  <p className="text-white/35 text-sm line-through">350 €</p>
                )}
                <p className="text-4xl font-bold" style={{ color: "#00C9A7" }}>
                  {PROMO_ACTIVE ? "290 €" : "350 €"}
                </p>
                <p className="text-white/40 text-xs">pour 2 personnes</p>
                {PROMO_ACTIVE && (
                  <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(0,201,167,0.2)", color: "#00C9A7" }}>
                    🌞 Offre été
                  </span>
                )}
              </div>
            </div>
            <ul className="space-y-1.5 mb-4">
              {["2 séances simultanées", "Arrêtez ensemble !", "Suivi 30 jours", "Support psycho-émotionnel"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/75 text-sm">
                  <span style={{ color: "#00C9A7" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link to="/reservation" className="block w-full text-center text-[#0A1F3A] font-bold py-3 rounded-xl text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#00C9A7" }}>
              Réserver maintenant →
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[{ v: "80%+", l: "Réussite" }, { v: "45min", l: "Séance" }, { v: "89", l: "Avis 5★" }].map(({ v, l }) => (
              <div key={l} className="rounded-xl p-3 text-center backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="font-bold text-lg" style={{ color: "#00C9A7" }}>{v}</p>
                <p className="text-white/40 text-[10px]">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
