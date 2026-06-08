import { Link } from "react-router";
import { MapPin } from "lucide-react";
import { CITIES } from "../lib/seoData";

export default function ZonesBand() {
  return (
    <section className="py-16 px-4 lg:px-8" style={{ backgroundColor: "#0A1F3A" }}>
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00C9A7" }}>Zones desservies</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Sevrage tabagique laser autour d'Évreux
        </h2>
        <p className="text-white/50 text-sm mb-8">
          Patients venant de toute la Normandie — Eure (27), Seine-Maritime (76), Eure-et-Loir (28)
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              to={`/${city.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors border border-white/10 text-white/70 hover:border-[#00C9A7]/50 hover:text-[#00C9A7]"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <MapPin className="w-3.5 h-3.5" /> {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
