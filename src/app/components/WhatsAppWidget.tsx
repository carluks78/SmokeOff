import { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_NUMBER, COMPANY_NAME } from "../lib/seoData";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const defaultMessage = "Bonjour, je souhaite prendre rendez-vous pour un sevrage tabagique au laser. ";

  const handleSend = () => {
    const text = message.trim() || defaultMessage;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
    setMessage("");
  };

  const quickMessages = [
    "Prendre RDV — sevrage tabac",
    "Forfait Solo 180€ — info",
    "Forfait Duo 350€ — info",
    "Auriculothérapie laser",
    "Réflexologie faciale",
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{COMPANY_NAME}</p>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full inline-block" />
                    En ligne — Réponse rapide
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="bg-[#ECE5DD] px-4 py-5">
              <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[90%]">
                <p className="text-gray-800 text-sm leading-relaxed">
                  👋 Bonjour ! Prêt(e) à arrêter de fumer ?<br />
                  Je peux vous renseigner sur nos séances laser ou fixer un rendez-vous rapidement.
                </p>
                <p className="text-gray-400 text-[10px] mt-1 text-right">maintenant</p>
              </div>
            </div>

            {/* Quick messages */}
            <div className="bg-[#ECE5DD] px-4 pb-3 flex flex-wrap gap-2">
              {quickMessages.map((q) => (
                <button
                  key={q}
                  onClick={() => setMessage(q + " — ")}
                  className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="bg-[#ECE5DD] px-3 pb-4">
              <div className="flex items-end gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  placeholder="Écrivez votre message..."
                  rows={1}
                  className="flex-1 text-sm text-gray-800 resize-none focus:outline-none bg-transparent max-h-24 overflow-y-auto"
                  style={{ minHeight: "24px" }}
                />
                <button
                  onClick={handleSend}
                  className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#20B358] transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-gray-400 text-[10px] text-center mt-2">Entrée pour envoyer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center relative"
        aria-label="Contacter SmokeOff via WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </motion.button>
    </div>
  );
}
