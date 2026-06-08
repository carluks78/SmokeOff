import { Phone } from "lucide-react";
import { PHONE_LINK, PHONE } from "../lib/seoData";

export default function FloatingCTA() {
  return (
    <a
      href={PHONE_LINK}
      className="fixed bottom-6 right-6 z-50 text-white rounded-full px-5 py-3.5 shadow-2xl transition-all hover:scale-105 lg:hidden flex items-center gap-2 font-bold text-sm"
      style={{ backgroundColor: "#00C9A7" }}
      aria-label="Appeler SmokeOff pour prendre RDV"
    >
      <Phone className="w-5 h-5" />
      <span>{PHONE}</span>
    </a>
  );
}
