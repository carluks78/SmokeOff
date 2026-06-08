import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Menu, X, ChevronDown, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PHONE, PHONE_LINK, WHATSAPP_NUMBER, COMPANY_NAME, SERVICES, CITIES } from "../lib/seoData";
import logo from "../../imports/stop-tabac-laser.PNG";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function DropdownMenu({ label, items }: { label: string; items: { slug: string; name: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-gray-700 hover:text-[#00C9A7] transition-colors text-sm font-medium py-2">
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 bg-white border border-gray-100 rounded-2xl shadow-2xl min-w-[260px] py-2 z-50 max-h-[70vh] overflow-y-auto"
          >
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`/${item.slug}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#00C9A7] hover:bg-[#F0F9F7] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 bg-white transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="SmokeOff — Centre Sevrage Tabagique Laser Évreux"
              className="h-11 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-[#0A1F3A] font-bold text-base leading-tight block">{COMPANY_NAME}</span>
              <span className="text-[10px] font-semibold" style={{ color: "#00C9A7" }}>Sevrage Laser · Évreux</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              { to: "/", label: "Accueil" },
              { to: "/sevrage-tabagique-laser-evreux", label: "Laser Anti-Tabac" },
              { to: "/forfaits", label: "Forfaits" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to) ? "text-[#00C9A7]" : "text-gray-700 hover:text-[#00C9A7]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu label="Nos Soins" items={SERVICES} />
            <DropdownMenu label="Villes" items={CITIES.slice(0, 30)} />
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-[#00C9A7]" : "text-gray-700 hover:text-[#00C9A7]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite prendre rendez-vous pour un sevrage tabagique au laser. ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20B358] text-white font-semibold text-sm px-4 py-2 rounded-full transition-all hover:scale-105"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <Link
              to="/reservation"
              className="hidden md:inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: "#00C9A7" }}
            >
              <Calendar className="w-4 h-4" /> Réserver
            </Link>
            <a
              href={PHONE_LINK}
              className="hidden lg:inline-flex items-center gap-2 text-[#0A1F3A] font-bold text-sm px-4 py-2 rounded-full border-2 transition-all hover:scale-105"
              style={{ borderColor: "#0A1F3A" }}
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <button
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {[
                { to: "/", label: "Accueil" },
                { to: "/sevrage-tabagique-laser-evreux", label: "Sevrage Tabagique Laser" },
                { to: "/auriculotherapie-laser-evreux", label: "Auriculothérapie Laser" },
                { to: "/reflexologie-faciale-evreux", label: "Réflexologie Faciale" },
                { to: "/forfaits", label: "Forfaits & Tarifs" },
                { to: "/reservation", label: "Réserver" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-gray-700 hover:text-[#00C9A7] text-sm font-medium border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setMobileDrop(mobileDrop === "villes" ? null : "villes")}
                  className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#00C9A7] text-sm font-medium border-b border-gray-50"
                >
                  Villes desservies
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDrop === "villes" ? "rotate-180" : ""}`} />
                </button>
                {mobileDrop === "villes" && (
                  <div className="pl-4 space-y-1 pb-3 max-h-48 overflow-y-auto bg-gray-50 rounded-xl mt-1">
                    {CITIES.slice(0, 25).map((city) => (
                      <Link
                        key={city.slug}
                        to={`/${city.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-gray-500 hover:text-[#00C9A7] text-sm"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-2 w-full text-white font-bold py-3.5 rounded-2xl"
                  style={{ backgroundColor: "#0A1F3A" }}
                >
                  <Phone className="w-5 h-5" /> {PHONE}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je veux prendre RDV pour arrêter de fumer au laser. ")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3.5 rounded-2xl"
                >
                  <WhatsAppIcon /> Réserver via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
