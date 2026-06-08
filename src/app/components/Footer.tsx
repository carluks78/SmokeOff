import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, WHATSAPP_NUMBER, COMPANY_NAME, ADDRESS, SERVICES, CITIES } from "../lib/seoData";
import logo from "../../imports/stop-tabac-laser.PNG";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1F3A" }} className="text-white/75">
      {/* CTA Band */}
      <div style={{ backgroundColor: "#00C9A7" }} className="py-7">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-[#0A1F3A] text-xl font-bold">Prêt(e) à arrêter de fumer ?</h3>
            <p className="text-[#0A1F3A]/70 text-sm">1 séance suffit — Résultats immédiats — Méthode naturelle</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-[#0A1F3A] text-white font-bold px-7 py-3 rounded-full hover:bg-[#0d2848] transition-colors"
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je veux prendre RDV pour arrêter de fumer au laser. ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B358] text-white font-bold px-7 py-3 rounded-full transition-colors"
            >
              <WhatsAppIcon /> WhatsApp RDV
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Info */}
          <div>
            <img src={logo} alt="SmokeOff Évreux" className="h-12 w-auto mb-4 object-contain" />
            <p className="text-sm leading-relaxed mb-4 text-white/60">
              Centre spécialisé en sevrage tabagique au laser auriculaire, auriculothérapie et réflexologie faciale à Évreux. Arrêtez de fumer en 1 séance.
            </p>
            <div className="space-y-2 text-sm">
              <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-[#00C9A7] transition-colors">
                <Phone className="w-4 h-4" style={{ color: "#00C9A7" }} />{PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-[#00C9A7] transition-colors">
                <Mail className="w-4 h-4" style={{ color: "#00C9A7" }} />{EMAIL}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#00C9A7" }} />{ADDRESS}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: "#00C9A7" }} />Lun–Sam : 9h–19h
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Nos Soins</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="hover:text-[#00C9A7] transition-colors">{s.name}</Link>
                </li>
              ))}
              <li><Link to="/forfaits" className="hover:text-[#00C9A7] transition-colors">Forfaits & Tarifs</Link></li>
              <li><Link to="/reservation" className="hover:text-[#00C9A7] transition-colors">Réserver un RDV</Link></li>
            </ul>
          </div>

          {/* Villes proches */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Villes desservies</h4>
            <ul className="space-y-2 text-sm">
              {CITIES.slice(0, 14).map((c) => (
                <li key={c.slug}>
                  <Link to={`/${c.slug}`} className="hover:text-[#00C9A7] transition-colors">
                    Arrêt tabac {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More villes + pages */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Autres villes</h4>
            <ul className="space-y-2 text-sm mb-6">
              {CITIES.slice(14, 26).map((c) => (
                <li key={c.slug}>
                  <Link to={`/${c.slug}`} className="hover:text-[#00C9A7] transition-colors">
                    Arrêt tabac {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-base mb-3">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#00C9A7] transition-colors">Accueil</Link></li>
              <li><Link to="/contact" className="hover:text-[#00C9A7] transition-colors">Contact</Link></li>
              <li><Link to="/reservation" className="hover:text-[#00C9A7] transition-colors">Prise de RDV</Link></li>
            </ul>
          </div>
        </div>

        {/* Villes backlinks band */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs mb-3">Sevrage tabagique laser — Toutes nos zones d'intervention :</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {CITIES.map((c) => (
              <Link key={c.slug} to={`/${c.slug}`} className="text-white/30 hover:text-[#00C9A7] text-xs transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>© {new Date().getFullYear()} {COMPANY_NAME} — Sevrage Tabagique Laser Évreux. Tous droits réservés.</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5" fill="#00C9A7" style={{ color: "#00C9A7" }} />)}
            <span className="ml-1 text-white/50">5/5 — 89 patients satisfaits</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
