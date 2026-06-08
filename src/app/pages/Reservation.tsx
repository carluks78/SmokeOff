import { useState } from "react";
import { Phone, Calendar, Clock, Check, MessageCircle, User, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PHONE, PHONE_LINK, WHATSAPP_NUMBER, FORFAITS } from "../lib/seoData";

const HOURS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"];

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ forfait: "solo", name: "", email: "", phone: "", date: "", hour: "", notes: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🔥 Nouvelle demande de RDV — SmokeOff.fr\n\n` +
      `👤 Nom : ${form.name}\n📧 Email : ${form.email}\n📱 Tél : ${form.phone}\n` +
      `📅 Date souhaitée : ${form.date} à ${form.hour}\n` +
      `💼 Forfait : ${form.forfait === "solo" ? "Solo 180€" : "Duo 350€"}\n` +
      `📝 Notes : ${form.notes || "Aucune"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-12 text-center shadow-xl max-w-md w-full"
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(0,201,167,0.15)" }}>
            <Check className="w-10 h-10" style={{ color: "#00C9A7" }} />
          </div>
          <h2 className="text-2xl font-bold text-[#0A1F3A] mb-3">Demande envoyée !</h2>
          <p className="text-gray-500 mb-6">
            Votre demande de RDV a bien été transmise via WhatsApp. Nous vous confirmons votre rendez-vous dans les plus brefs délais.
          </p>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full"
            style={{ backgroundColor: "#00C9A7" }}
          >
            <Phone className="w-4 h-4" /> Confirmer par téléphone
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <section className="py-16 px-4 lg:px-8" style={{ backgroundColor: "#0A1F3A" }}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border" style={{ backgroundColor: "rgba(0,201,167,0.15)", borderColor: "rgba(0,201,167,0.3)" }}>
            <Calendar className="w-4 h-4" style={{ color: "#00C9A7" }} />
            <span className="text-xs font-semibold" style={{ color: "#00C9A7" }}>Prise de rendez-vous</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Réserver votre séance <span style={{ color: "#00C9A7" }}>laser anti-tabac</span>
          </h1>
          <p className="text-white/60 text-lg">Choisissez votre forfait et votre créneau. Nous confirmons sous 2h.</p>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {/* Steps */}
          <div className="flex items-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0`}
                  style={step >= s ? { backgroundColor: "#00C9A7", color: "#fff" } : { backgroundColor: "#e5e7eb", color: "#6b7280" }}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                <span className={`text-xs font-medium ${step >= s ? "text-[#00C9A7]" : "text-gray-400"}`}>
                  {s === 1 ? "Forfait" : s === 2 ? "Créneau" : "Coordonnées"}
                </span>
                {s < 3 && <div className={`flex-1 h-0.5 rounded ${step > s ? "bg-[#00C9A7]" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-xl font-bold text-[#0A1F3A] mb-6">Choisissez votre forfait</h2>
                  <div className="space-y-4 mb-8">
                    {FORFAITS.map((f) => (
                      <label
                        key={f.id}
                        className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${form.forfait === f.id ? "border-[#00C9A7] bg-[#F0F9F7]" : "border-gray-100 hover:border-gray-200"}`}
                      >
                        <input
                          type="radio"
                          name="forfait"
                          value={f.id}
                          checked={form.forfait === f.id}
                          onChange={(e) => setForm({ ...form, forfait: e.target.value })}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#0A1F3A]">{f.name}</span>
                            <span className="text-xl font-bold" style={{ color: "#00C9A7" }}>{f.label}</span>
                          </div>
                          <p className="text-sm text-gray-500">{f.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full text-white font-bold py-4 rounded-xl"
                    style={{ backgroundColor: "#00C9A7" }}
                  >
                    Choisir un créneau →
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-xl font-bold text-[#0A1F3A] mb-6">Choisissez votre créneau</h2>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date souhaitée</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Heure souhaitée</label>
                    <div className="grid grid-cols-4 gap-2">
                      {HOURS.map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setForm({ ...form, hour: h })}
                          className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${form.hour === h ? "border-[#00C9A7] bg-[#F0F9F7] text-[#00C9A7]" : "border-gray-100 text-gray-600 hover:border-gray-300"}`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold">← Retour</button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!form.date || !form.hour}
                      className="flex-2 flex-1 text-white font-bold py-4 rounded-xl disabled:opacity-50"
                      style={{ backgroundColor: "#00C9A7" }}
                    >
                      Continuer →
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-xl font-bold text-[#0A1F3A] mb-6">Vos coordonnées</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom complet *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom complet" className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Téléphone *</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                        <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="06 XX XX XX XX" className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Notes (optionnel)</label>
                      <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Informations complémentaires, nombre d'années de tabagisme..." rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none" />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="rounded-xl p-4 mb-6 text-sm" style={{ backgroundColor: "#F0F9F7" }}>
                    <p className="font-bold text-[#0A1F3A] mb-2">Récapitulatif</p>
                    <p className="text-gray-600">🗓 {form.date} à {form.hour}</p>
                    <p className="text-gray-600">💼 {form.forfait === "solo" ? "Forfait Solo — 180€" : "Forfait Duo — 350€"}</p>
                    <p className="text-gray-600">📍 34 rue des Alouettes, Évreux</p>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold">← Retour</button>
                    <button type="submit" className="flex-1 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2" style={{ backgroundColor: "#00C9A7" }}>
                      <MessageCircle className="w-5 h-5" /> Confirmer via WhatsApp
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-3">Vous serez redirigé vers WhatsApp pour finaliser</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Alternative */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-3">Vous préférez réserver par téléphone ?</p>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white" style={{ backgroundColor: "#0A1F3A" }}>
              <Phone className="w-4 h-4" /> Appeler le {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
