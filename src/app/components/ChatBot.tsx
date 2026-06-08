import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PHONE, PHONE_LINK, WHATSAPP_NUMBER } from "../lib/seoData";

interface Message { role: "bot" | "user"; text: string; }

const QUICK_QUESTIONS = [
  "Comment fonctionne le laser ?",
  "Solo ou Duo, lequel choisir ?",
  "Est-ce douloureux ?",
  "Est-ce remboursé ?",
  "Combien de séances ?",
  "Que se passe-t-il après la séance ?",
  "Comment réserver ?",
  "Prise de poids après l'arrêt ?",
];

function getBotResponse(msg: string): string {
  const m = msg.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  if (m.match(/bonjour|salut|hello|bonsoir|coucou/)) {
    return `👋 Bonjour ! Je suis l'assistant SmokeOff Évreux. Je peux répondre à toutes vos questions sur le sevrage tabagique au laser, nos forfaits Solo (180€) et Duo (350€), ou la prise de RDV. Que voulez-vous savoir ?`;
  }

  if (m.match(/comment.*(fonctionn|march|laser|fonctionne)|quest.*laser|mecanisme|principe/)) {
    return `🔬 **Comment fonctionne le laser auriculaire ?**\n\nLe laser froid (soft laser, basse énergie) est appliqué sur 15 à 25 points précis du pavillon de l'oreille. Ces points correspondent — comme en acupuncture — à l'addiction nicotinique, au système nerveux et aux organes affectés par le tabac.\n\nLa stimulation laser déclenche la libération d'**endorphines naturelles** dans le cerveau, qui compensent le manque de nicotine. L'envie de fumer est court-circuitée à sa source neurologique.\n\nRésultat : dès la fin de la séance de 45 min, la grande majorité des patients ne ressentent plus l'envie de fumer. 100% indolore, zéro aiguille, zéro médicament.`;
  }

  if (m.match(/seance|séance|fois|nombre|combien.*seance|1.*seance|une seance|plusieurs/)) {
    return `✅ **Une seule séance suffit pour 80% de nos patients.**\n\nLe protocole SmokeOff est conçu pour être complet en une session de 45 minutes :\n• Bilan personnalisé\n• Laser auriculaire\n• Auriculothérapie\n• Réflexologie faciale\n• Protocole anti-fringales\n\nEn cas de rechute ou d'addiction sévère (plus de 20 cigarettes/jour depuis 20+ ans), une 2e séance de renforcement peut être proposée à tarif préférentiel.\n\nLe **suivi téléphonique de 30 à 60 jours** inclus consolide les résultats et vous accompagne en cas de doute.`;
  }

  if (m.match(/solo.*duo|duo.*solo|difference.*forfait|forfait.*difference|quel.*forfait|choisir.*forfait|lequel/)) {
    return `💼 **Forfait Solo vs Forfait Duo — le guide :**\n\n**Forfait Solo — 180€** (pour vous seul(e))\n• 1 séance individuelle de 45 min\n• Bilan personnalisé de votre addiction\n• Laser auriculaire + auriculothérapie + réflexologie\n• Protocole anti-fringales\n• Suivi téléphonique **30 jours**\n• Disponibilité WhatsApp post-séance\n\n**Forfait Duo — 350€** (pour 2 personnes ensemble)\n• 2 séances simultanées (couple, amis, fratrie)\n• Même protocole complet pour chacun\n• Suivi téléphonique **60 jours** pour chacun\n• Protocole anti-rechute renforcé\n• Économie de 10€ vs 2 Solos\n\n💡 Le Duo est souvent plus efficace — s'arrêter ensemble augmente les chances de succès !`;
  }

  if (m.match(/180|350|prix|tarif|cout|coût|combien.*coute|cher/)) {
    return `💰 **Nos tarifs — tout inclus, sans surprise :**\n\n• **Forfait Solo : 180€** — séance individuelle complète de 45 min + suivi 30 jours\n• **Forfait Duo : 350€** — 2 personnes simultanément + suivi 60 jours\n\nIl n'y a **aucun frais caché** : bilan, laser, auriculothérapie, réflexologie faciale, protocole anti-fringales et suivi téléphonique sont tous inclus.\n\nUn fumeur à 10 cig/jour dépense environ **135€/mois** en tabac — la séance est rentabilisée en **5 semaines** d'arrêt.`;
  }

  if (m.match(/doulour|douleur|pique|aiguille|mal|risque|danger|safe|securite|sécurité/)) {
    return `😌 **Totalement indolore — voici pourquoi :**\n\nLe laser thérapeutique utilisé est un **laser froid** (basse énergie / classe 3B). Il n'émet aucune chaleur, ne brûle pas et n'endommage pas les tissus.\n\n• Zéro aiguille\n• Zéro médicament\n• Zéro effet secondaire connu\n• Zéro risque de brûlure\n\nCertains patients ressentent une légère **chaleur douce** ou picotement sur les points stimulés — signe que la stimulation est active. La grande majorité trouvent la séance **profondément relaxante**.\n\nLe laser est compatible avec les traitements médicaux en cours (signalez-les lors du bilan). Déconseillé pendant la grossesse sans avis médical préalable.`;
  }

  if (m.match(/rembours|secu|securite sociale|mutuelle|assurance|cpam|complementaire/)) {
    return `💳 **Remboursement — ce qu'il faut savoir :**\n\nLe sevrage tabagique au laser **n'est pas remboursé par la Sécurité sociale**. C'est une médecine douce, hors nomenclature.\n\n✅ **Certaines mutuelles complémentaires** couvrent partiellement ou totalement les séances de médecines douces (phytothérapie, acupuncture, ostéopathie…). Renseignez-vous auprès de la vôtre en leur indiquant le type de soin.\n\n💡 Perspective économique : un fumeur à 10 cig/jour dépense **1 620€ par an** en tabac. Notre Forfait Solo à 180€ est rentabilisé en **moins de 6 semaines** d'arrêt.`;
  }

  if (m.match(/apres.*seance|apres.*(session|traitement)|apres.*(laser|forfait)|suivi|rechute|manque|lendemain/)) {
    return `📋 **Après la séance — voici ce qui se passe :**\n\nDès la fin de la séance, la majorité des patients ressentent une **diminution nette des envies**. C'est normal — les endorphines libérées par le laser agissent immédiatement.\n\n**Les 72 premières heures :** étape cruciale. Évitez les situations déclencheuses (café, alcool, entourage fumeur si possible). Appelez-nous si nécessaire.\n\n**Le suivi inclus :**\n• Forfait Solo : appels de suivi pendant **30 jours**\n• Forfait Duo : appels de suivi pendant **60 jours**\n• Disponibilité WhatsApp pour questions urgentes\n\nEn cas de rechute partielle, une **2e séance de renforcement** est proposée à tarif réduit. Nous ne vous laissons pas seul(e).`;
  }

  if (m.match(/poids|grossir|manger|fringale|grignoter|manger.plus|compenser|appetit/)) {
    return `⚖️ **Prise de poids après l'arrêt — notre réponse :**\n\nC'est l'une des craintes les plus fréquentes ! Voici pourquoi notre protocole la prend en charge :\n\n1. **Protocole anti-fringales inclus** : techniques comportementales pour éviter la compensation alimentaire\n2. **Réflexologie faciale** : stimulation des zones réflexes liées à l'appétit et au métabolisme\n3. **Auriculothérapie** : points auriculaires de régulation de l'appétit\n4. **Conseils nutritionnels** inclus dans le suivi post-séance\n\nStatistiquement, les personnes qui arrêtent de fumer avec notre méthode prennent **nettement moins de poids** qu'avec les patches ou médicaments, car l'anxiété est mieux gérée.`;
  }

  if (m.match(/reserv|rdv|rendez.vous|prendre.rendez|appointment|booker|disponibilit/)) {
    return `📅 **Pour prendre RDV — 3 façons :**\n\n• 📞 **Téléphone** : ${PHONE} — Lun–Sam, 9h à 19h. Confirmation immédiate.\n• 💬 **WhatsApp** : envoyez un message au même numéro — réponse en quelques minutes.\n• 🖥️ **En ligne** : via le formulaire de réservation sur notre site — confirmation sous 2h.\n\nNous essayons toujours de vous accueillir **rapidement** car nous savons que la motivation est précieuse. N'attendez pas !`;
  }

  if (m.match(/adresse|situe|ou.*etes|localisation|parking|acces|venir|chemin|itineraire/)) {
    return `📍 **Où nous trouver :**\n\n**SmokeOff — Centre de Sevrage Tabagique Laser**\n📌 34 rue des Alouettes, 27000 Évreux\n\nAccès :\n• Parking à proximité immédiate\n• À 5 min du centre-ville d'Évreux\n• Accessible depuis Louviers (22 km), Vernon (35 km), Pacy-sur-Eure (24 km), Dreux (48 km), Bernay (42 km), Rouen (80 km)\n\n⏰ Horaires : Lun–Sam, 9h à 19h, sur rendez-vous uniquement.`;
  }

  if (m.match(/auriculotherap|oreille|auriculaire|pavillon/)) {
    return `👂 **L'auriculothérapie laser — explication :**\n\nL'oreille est une **microcarte du corps humain** : chaque zone du pavillon correspond à un organe ou système.\n\nEn stimulant par laser (sans aiguille) les points correspondant à :\n• L'addiction et le craving nicotinique\n• Le système nerveux (stress, anxiété)\n• Les poumons et voies respiratoires\n• Le foie (détoxification)\n\n… on rétablit l'équilibre neurochimique perturbé par des années de tabagisme. Reconnue par l'OMS depuis 1987, cette médecine est pratiquée dans de nombreux centres hospitaliers en Asie et en Europe.`;
  }

  if (m.match(/reflexologi|visage|facial|zone.reflex/)) {
    return `😊 **La réflexologie faciale — son rôle :**\n\nLe visage contient des **zones réflexes** correspondant à tous les organes du corps. En stimulant ces zones par des pressions légères et précises, on agit à distance sur :\n\n• Les **poumons** : soutien de la récupération respiratoire\n• Le **foie** : accélération de la détoxification de la nicotine\n• Le **système nerveux** : réduction de l'irritabilité et de l'anxiété\n• L'**appétit** : prévention de la compensation alimentaire\n\nPratiquée après le laser auriculaire, elle amplifie les effets anti-tabac et laisse les patients dans un état de **détente profonde** en fin de séance.`;
  }

  if (m.match(/horaire|ouvert|ouverture|heure.*ouverture|ferme|fermeture|jours/)) {
    return `🕐 **Nos horaires d'ouverture :**\n\nLundi → Samedi : **9h à 19h**\nFermé le dimanche\n\nLes séances sont uniquement **sur rendez-vous** — pas de passage sans RDV.\n\nPour réserver : ${PHONE} ou WhatsApp. Nous faisons notre maximum pour vous accueillir rapidement — parfois le jour même selon les disponibilités.`;
  }

  if (m.match(/resultat|efficace|taux.*reussite|marche|succes|pourcentage|statistique/)) {
    return `🎯 **Nos résultats en chiffres :**\n\n• **80%+** de nos patients arrêtent dès la 1re séance\n• **89 avis Google vérifiés**, tous notés **5/5**\n• Suivi téléphonique de 30 à 60 jours pour consolider les résultats\n• 2e séance de renforcement disponible en cas de rechute\n\nLes résultats sont **immédiats** : la plupart des patients ressentent une diminution des envies dès la fin de la séance de 45 minutes. Le suivi téléphonique inclus aide à franchir les moments difficiles des premières semaines.`;
  }

  if (m.match(/enceinte|grossesse|pregnant|bebe|allaitement/)) {
    return `🤱 **Grossesse et laser :**\n\nNous déconseillons la séance laser **pendant la grossesse** par mesure de précaution, même si aucun effet négatif n'est documenté. En revanche, arrêter de fumer est absolument prioritaire pour votre bébé.\n\nConsultez votre médecin ou sage-femme pour les alternatives adaptées pendant la grossesse. Après l'accouchement, notre méthode sera disponible — y compris pendant l'allaitement (à confirmer avec votre médecin).`;
  }

  if (m.match(/cigarette.electronique|e.cigarette|vape|vaper|vapotage/)) {
    return `💨 **Cigarette électronique et vapotage :**\n\nOui, notre méthode laser est **également efficace pour arrêter la e-cigarette** ! L'addiction à la nicotine est la même, qu'elle vienne de la cigarette traditionnelle ou du vapotage.\n\nNous adaptons le protocole selon votre profil : certains points auriculaires ciblés sont les mêmes, d'autres spécifiques au vapotage (régulation de l'habitude gestuelle, gestion du besoin oral).\n\nSignalez votre situation lors du bilan en début de séance.`;
  }

  if (m.match(/merci|super|parfait|genial|cool|top|bravo|excellent/)) {
    return `😊 Avec plaisir ! N'hésitez pas si vous avez d'autres questions. Quand vous serez prêt(e), appelez le **${PHONE}** ou réservez via WhatsApp — on vous accueille rapidement. On vous attend pour votre première séance sans cigarette ! 🍃`;
  }

  return `💬 Bonne question ! Pour une réponse précise à votre situation, je vous conseille de nous contacter directement :\n\n📞 **${PHONE}** — Lun-Sam, 9h à 19h\n💬 **WhatsApp** — réponse rapide garantie\n\nNotre équipe peut répondre à toutes vos questions spécifiques et vous trouver un créneau rapidement. À bientôt ! 🚭`;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "👋 Bonjour ! Je suis l'assistant SmokeOff. Posez-moi toutes vos questions sur le sevrage tabagique au laser, nos forfaits ou la prise de RDV !" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (messagesContainerRef.current) {
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  }
}, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-80 sm:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            style={{
  height: "85dvh",
  maxHeight: "700px",
  display: "flex",
  flexDirection: "column",
}}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4" style={{ background: "linear-gradient(135deg, #0A1F3A 0%, #0d2d4a 100%)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#00C9A7" }}>
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Assistant SmokeOff</p>
                  <p className="text-white/60 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                    En ligne · Répond en secondes
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
  ref={messagesContainerRef}
  className="flex-1 overflow-y-auto p-4 space-y-3"
  style={{
    backgroundColor: "#F8FFFE"
  }}
>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5" style={{ backgroundColor: "#00C9A7" }}>
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "text-white rounded-tr-none"
                        : "text-gray-700 rounded-tl-none shadow-sm"
                    }`}
                    style={msg.role === "user" ? { backgroundColor: "#00C9A7" } : { backgroundColor: "white", border: "1px solid #e5e7eb" }}
                    dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                  />
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center mr-2 flex-shrink-0" style={{ backgroundColor: "#00C9A7" }}>
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5 items-center h-5">
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#00C9A7" }}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick questions */}
            <div className="px-3 py-2 bg-white border-t border-gray-50">
              <p className="text-xs text-gray-400 mb-2 px-1">Questions fréquentes :</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full border transition-colors text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] bg-white border-gray-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-end gap-2 bg-gray-50 rounded-2xl px-4 py-2.5 border border-gray-200 focus-within:border-[#00C9A7] transition-colors">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Posez votre question..."
                  rows={1}
                  className="flex-1 text-sm text-gray-700 resize-none focus:outline-none bg-transparent max-h-24"
                  style={{ minHeight: "22px" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || typing}
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40"
                  style={{ backgroundColor: "#00C9A7" }}
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <a href={PHONE_LINK} className="text-xs text-gray-400 hover:text-[#00C9A7] transition-colors">📞 {PHONE}</a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je voudrais plus d'infos sur vos forfaits. ")}`} target="_blank" rel="noopener noreferrer" className="text-xs text-[#25D366] font-semibold">WhatsApp →</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        style={{ backgroundColor: "#0A1F3A" }}
        aria-label="Ouvrir le chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Notification dot */}
        {!open && (
          <motion.span
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] text-white font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
