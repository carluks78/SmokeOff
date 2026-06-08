import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Check } from "lucide-react";
import { motion } from "motion/react";
import { PHONE, PHONE_LINK, EMAIL, COMPANY_NAME, ADDRESS, WHATSAPP_NUMBER, LAT, LNG } from "../lib/seoData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", forfait: "solo" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Nouveau message depuis le site SmokeOff.fr\n\nNom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\nForfait souhaité : ${form.forfait}\n\nMessage : ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <section className="py-20 px-4 lg:px-8" style={{ backgroundColor: "#0A1F3A" }}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border" style={{ backgroundColor: "rgba(0,201,167,0.15)", borderColor: "rgba(0,201,167,0.3)" }}>
            <MessageCircle className="w-4 h-4" style={{ color: "#00C9A7" }} />
            <span className="text-xs font-semibold" style={{ color: "#00C9A7" }}>Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez <span style={{ color: "#00C9A7" }}>{COMPANY_NAME}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Prenez rendez-vous pour votre séance de sevrage tabagique au laser à Évreux. Nous répondons rapidement.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F3A] mb-8">Nos coordonnées</h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: Phone, label: "Téléphone", value: PHONE, href: PHONE_LINK, sub: "Lun–Sam : 9h–19h" },
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, sub: "Réponse sous 24h" },
                { icon: MapPin, label: "Adresse", value: ADDRESS, sub: "Centre-ville d'Évreux — parking à proximité" },
                { icon: Clock, label: "Horaires", value: "Lundi au Samedi : 9h–19h", sub: "Sur rendez-vous uniquement" },
              ].map(({ icon: Icon, label, value, href, sub }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0,201,167,0.12)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#00C9A7" }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-[#0A1F3A] hover:text-[#00C9A7] transition-colors">{value}</a>
                    ) : (
                      <p className="font-semibold text-[#0A1F3A]">{value}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <iframe
                title="SmokeOff Évreux — Google Maps"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=15&output=embed`}
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F3A] mb-8">Demande de rendez-vous</h2>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-10 text-center border border-green-100"
                style={{ backgroundColor: "#F0FFF4" }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message envoyé !</h3>
                <p className="text-green-700 text-sm mb-4">Nous vous répondrons dans les plus brefs délais. Pour une réservation immédiate, appelez le <strong>{PHONE}</strong>.</p>
                <button onClick={() => setSent(false)} className="text-sm text-green-600 hover:underline font-semibold">Envoyer un autre message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Votre nom et prénom"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-[#00C9A7]"
                    style={{ '--tw-ring-color': '#00C9A7' } as React.CSSProperties}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="06 XX XX XX XX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Forfait souhaité</label>
                  <select
                    value={form.forfait}
                    onChange={(e) => setForm({ ...form, forfait: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-white"
                  >
                    <option value="solo">Forfait Solo — 180€ (1 personne)</option>
                    <option value="duo">Forfait Duo — 350€ (2 personnes)</option>
                    <option value="info">Je souhaite plus d'informations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Votre message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Indiquez vos disponibilités et toute information utile pour votre séance..."
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-bold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.01] flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#00C9A7" }}
                >
                  <Send className="w-5 h-5" /> Envoyer ma demande de RDV
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Pour une réponse immédiate : <a href={PHONE_LINK} className="font-semibold hover:underline" style={{ color: "#00C9A7" }}>{PHONE}</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
