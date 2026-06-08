import { Phone } from "lucide-react";
import { PHONE, PHONE_LINK, WHATSAPP_NUMBER } from "../lib/seoData";

const ITEMS = [
  { icon: "⭐", text: "5/5 sur Google — 89 avis vérifiés" },
  { icon: "🎯", text: "80% de réussite dès la 1ʳᵉ séance" },
  { icon: "💚", text: "Méthode 100% naturelle — Sans médicaments" },
  { icon: "⚡", text: "Séance laser 45 min — Résultats immédiats" },
  { icon: "💰", text: "Forfait Solo 180€ · Forfait Duo 350€" },
  { icon: "📍", text: "34 rue des Alouettes, Évreux (27)" },
  { icon: "🕐", text: "Lundi–Samedi : 9h–19h · Sur rendez-vous" },
  { icon: "🚭", text: "Arrêtez de fumer en 1 séance — SmokeOff Évreux" },
  { icon: "🔬", text: "Laser Auriculaire · Auriculothérapie · Réflexologie Faciale" },
  { icon: "💸", text: "Amortissez la séance en 1 mois d'économies cigarettes" },
];

const repeated = [...ITEMS, ...ITEMS];

export default function TopBar() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "#00C9A7", height: "36px" }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #00C9A7, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #00C9A7, transparent)" }}
      />

      {/* Scrolling track */}
      <div
        className="flex items-center h-full whitespace-nowrap"
        style={{
          animation: "marquee 40s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-white font-semibold text-xs px-6"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-white/40 mx-2">·</span>
          </span>
        ))}
      </div>

      {/* Phone link overlay on small screens */}
      <a
        href={PHONE_LINK}
        className="absolute right-0 top-0 bottom-0 sm:hidden flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 text-white text-xs font-bold z-20"
      >
        <Phone className="w-3 h-3" /> {PHONE}
      </a>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
