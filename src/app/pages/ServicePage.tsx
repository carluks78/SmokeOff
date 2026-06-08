import { useParams, useLocation, Link } from "react-router";
import { Phone, Check, ArrowRight, Star, Shield, Clock, Zap, Leaf, Award, Heart } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES, CITIES, PHONE, PHONE_LINK, WHATSAPP_NUMBER, FORFAITS, SITE_URL } from "../lib/seoData";
import FAQSection from "../components/FAQSection";
import ZonesBand from "../components/ZonesBand";
import { GoogleReviewButton } from "../components/GoogleReviewButton";

// Real service-specific images
const SERVICE_HERO_IMAGES: Record<string, string> = {
  "sevrage-tabagique-laser-evreux": "https://images.unsplash.com/photo-1719471497337-d140858e6ba7?w=1400&q=80",
  "auriculotherapie-laser-evreux": "https://images.unsplash.com/photo-1632568851266-b8e23c1738f5?w=1400&q=80",
  "reflexologie-faciale-evreux": "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=1400&q=80",
};

const SERVICE_CONTENT: Record<string, {
  intro: string;
  howItWorks: { title: string; text: string }[];
  benefits: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}> = {
  "sevrage-tabagique-laser-evreux": {
    intro: "Le sevrage tabagique au laser auriculaire est la méthode phare de SmokeOff Évreux. Ce protocole de biostimulation laser, non invasif et totalement indolore, agit directement sur les mécanismes neurobiologiques de l'addiction nicotinique pour supprimer les envies de fumer dès la première séance.",
    howItWorks: [
      { title: "Le laser froid et son action", text: "Le laser thérapeutique de basse énergie (soft laser) émet une lumière cohérente qui pénètre les tissus sans les endommager. Appliqué sur les points précis du pavillon de l'oreille, il stimule les terminaisons nerveuses et déclenche une cascade biochimique naturelle." },
      { title: "La libération d'endorphines", text: "La stimulation laser provoque la libération d'endorphines — les hormones du bien-être naturelles. Ces endorphines compensent le manque de nicotine, réduisent l'anxiété du sevrage, et restaurent l'équilibre neurochimique perturbé par des années de tabagisme." },
      { title: "L'action sur les points auriculaires", text: "L'oreille est une microcarte du corps humain : chaque zone correspond à un organe ou système. Les points traités en priorité sont ceux liés à l'addiction (craving), au système nerveux (stress, anxiété), aux poumons et aux voies respiratoires." },
      { title: "La durée et le ressenti", text: "La séance dure 45 minutes. La plupart des patients ressentent une légère chaleur douce sur les points stimulés — c'est tout. Aucune douleur, aucune sensation désagréable. Beaucoup trouvent la séance profondément relaxante." },
    ],
    benefits: [
      "Suppression des envies de nicotine dès la séance",
      "Réduction immédiate de l'anxiété et de l'irritabilité",
      "Pas de prise de poids associée",
      "Amélioration du sommeil dans les premières semaines",
      "Récupération rapide des capacités pulmonaires",
      "Recouvrement du goût et de l'odorat sous 48h",
      "Énergie et vitalité augmentées dès J1",
      "Économies immédiates sur le budget cigarettes",
    ],
    process: [
      "Bilan personnalisé de votre profil de fumeur (ancienneté, nombre, déclencheurs)",
      "Application du laser sur les points auriculaires de l'addiction",
      "Stimulation complémentaire des points de stress et des voies respiratoires",
      "Réflexologie faciale pour renforcer et amplifier les effets",
      "Protocole anti-fringales pour éviter la compensation alimentaire",
      "Suivi téléphonique personnalisé sur 30 jours post-séance",
    ],
    faqs: [
      { q: "Comment le laser agit-il concrètement sur l'envie de fumer ?", a: "Le laser froid stimule les points auriculaires correspondant à l'addiction nicotinique. Cette stimulation déclenche la libération d'endorphines naturelles dans le cerveau, qui compensent le manque de nicotine. Le signal de craving (envie de fumer) est ainsi court-circuité à sa source neurologique, sans passer par un substitut chimique." },
      { q: "Combien de séances faut-il pour arrêter définitivement ?", a: "Pour 80% de nos patients, une seule séance suffit. Le protocole SmokeOff est conçu pour être complet en une session. Si une personne rechute, une 2e séance est offerte. Le suivi téléphonique de 30 jours aide à consolider les résultats dans la durée." },
      { q: "Le laser est-il dangereux ou douloureux ?", a: "Non, absolument pas. Le laser thérapeutique utilisé est un laser froid (basse énergie), homologué et certifié. Il n'émet pas de chaleur, ne brûle pas, et n'entraîne aucun effet secondaire connu. Les personnes les plus sensibles ressentent une légère chaleur agréable. Aucune aiguille n'est utilisée." },
      { q: "Quelle est la différence avec les patches, gommes ou médicaments ?", a: "Les substituts nicotiniques maintiennent l'addiction à la nicotine en la déplaçant (patch, gomme) ou agissent sur la chimie du cerveau par des molécules étrangères (Champix, Zyban). Le laser, lui, stimule votre propre neurochimie pour que votre cerveau produise lui-même les compensateurs naturels. Pas de dépendance créée, pas d'effets secondaires." },
      { q: "Le remboursement est-il possible ?", a: "Le sevrage tabagique au laser n'est pas remboursé par l'Assurance maladie. En revanche, de nombreuses mutuelles complémentaires couvrent partiellement ou totalement les séances de médecine douce. Renseignez-vous auprès de votre mutuelle avec le code CCAM correspondant. Économiquement, la séance est rentabilisée en 3 à 4 semaines d'économies sur les cigarettes." },
    ],
  },
  "auriculotherapie-laser-evreux": {
    intro: "L'auriculothérapie au laser est une médecine douce reconnue qui utilise le pavillon de l'oreille comme microcarte réflexe du corps humain. Couplée à la biostimulation laser, elle constitue le cœur du protocole SmokeOff pour l'arrêt du tabac : précise, indolore et immédiatement efficace.",
    howItWorks: [
      { title: "L'oreille comme carte du corps", text: "Selon les principes de l'auriculothérapie — méthode développée par le Dr Paul Nogier dans les années 1950 — chaque zone du pavillon de l'oreille correspond à une région précise du corps. Cette microscopie corporelle permet d'agir à distance sur les organes en stimulant les points auriculaires correspondants." },
      { title: "Le laser comme outil de précision", text: "Là où l'auriculothérapie traditionnelle utilise des aiguilles d'acupuncture, la version laser remplace l'aiguille par un faisceau lumineux cohérent. Le résultat est identique — voire supérieur en termes de précision — mais totalement indolore et sans risque infectieux." },
      { title: "Les points traités pour l'arrêt du tabac", text: "Pour le sevrage tabagique, nous stimulons spécifiquement les points correspondant à : l'addiction et le craving nicotinique, le stress et l'anxiété, les poumons et les voies respiratoires, le foie (détoxification), le système nerveux central (régulation de l'humeur)." },
      { title: "L'effet cumulatif avec la séance laser", text: "Utilisée en synergie avec le sevrage tabagique au laser et la réflexologie faciale, l'auriculothérapie laser amplifie considérablement les effets anti-tabac. Les trois techniques se complètent pour agir simultanément sur l'addiction physique, le stress psychologique et le déséquilibre émotionnel." },
    ],
    benefits: [
      "Action directe sur les mécanismes neurochimiques de l'addiction",
      "Réduction du stress et de l'anxiété de sevrage",
      "Stimulation des points de détoxification naturelle",
      "Régulation de l'humeur et prévention de la dépression post-sevrage",
      "Amélioration de la qualité du sommeil",
      "Renforcement du système immunitaire",
      "Aucune aiguille — technique 100% non invasive",
      "Compatible avec tous traitements médicaux",
    ],
    process: [
      "Cartographie de l'oreille et identification des points prioritaires",
      "Stimulation laser des points de l'addiction et du craving",
      "Traitement des points du stress et du système nerveux autonome",
      "Activation des points de détoxification (foie, reins, poumons)",
      "Équilibrage des points de régulation émotionnelle",
      "Association à la réflexologie faciale pour renforcer l'ensemble",
    ],
    faqs: [
      { q: "L'auriculothérapie est-elle reconnue médicalement ?", a: "Oui, l'auriculothérapie est reconnue par l'Organisation Mondiale de la Santé (OMS) depuis 1987 comme une médecine complémentaire valide. En France, elle est pratiquée par de nombreux médecins et praticiens certifiés. Dans sa version laser (sans aiguilles), elle est encore plus accessible et confortable." },
      { q: "Combien de points sont traités lors d'une séance ?", a: "Durant une séance complète SmokeOff, entre 15 et 25 points auriculaires sont traités selon votre profil. La sélection est faite lors du bilan personnalisé en début de séance : profil anxieux, profil habitudinaire, fumeur social, etc. Chaque protocole est adapté." },
      { q: "L'auriculothérapie laser est-elle douloureuse ?", a: "Non, c'est l'un des grands avantages de la version laser vs aiguilles. Vous pouvez ressentir une légère sensation de chaleur ou de picotement très doux sur certains points — signe que la stimulation est active. La grande majorité des patients trouvent la séance relaxante et agréable." },
      { q: "Peut-on faire de l'auriculothérapie laser si on a des problèmes d'oreilles ?", a: "Dans la plupart des cas, oui. L'auriculothérapie laser agit sur la surface externe du pavillon, sans interaction avec le canal auditif ou l'oreille interne. En cas d'eczéma, de psoriasis ou d'infection cutanée sur l'oreille, nous adaptons le protocole. Signalez-le lors de votre bilan." },
      { q: "Quelle est la différence entre auriculothérapie et acupuncture ?", a: "L'acupuncture traite le corps entier via des points sur les méridiens (corps, jambes, bras…). L'auriculothérapie se concentre uniquement sur l'oreille comme microcarte réflexe. Pour le sevrage tabagique, l'auriculothérapie est considérée comme plus ciblée et plus efficace car elle agit directement sur les points neurochimiques de l'addiction." },
    ],
  },
  "reflexologie-faciale-evreux": {
    intro: "La réflexologie faciale est une technique de soin douce et naturelle qui utilise les zones réflexes du visage pour agir sur l'ensemble des systèmes du corps. Proposée en complément de notre séance laser, elle amplifie les effets du sevrage tabagique, libère les tensions profondes et favorise la détoxification naturelle.",
    howItWorks: [
      { title: "Le visage comme carte réflexe", text: "À l'image de la réflexologie plantaire (pieds) ou de l'auriculothérapie (oreille), la réflexologie faciale repose sur le principe que le visage contient des zones réflexes correspondant à tous les organes et systèmes du corps. En stimulant ces zones, on agit à distance sur les fonctions concernées." },
      { title: "La méthode utilisée chez SmokeOff", text: "Nous utilisons la réflexologie faciale de Lone Sorensen, une approche reconnue internationalement qui combine des influences de médecines traditionnelles chinoise, tibétaine et amérindienne. Les pressions sont légères, précises et absolument indolores — beaucoup la comparent à un massage apaisant du visage." },
      { title: "Son rôle dans le sevrage tabagique", text: "Pour l'arrêt du tabac, la réflexologie faciale cible en priorité les zones correspondant aux poumons (régénération des voies respiratoires), au foie (détoxification de la nicotine et des additifs), au système nerveux (gestion du stress et de l'irritabilité), et aux zones de craving alimentaire (prévention de la compensation)." },
      { title: "La synergie avec le laser", text: "Utilisée après la séance laser auriculaire, la réflexologie faciale crée un effet de profondeur supplémentaire. Le laser agit sur les mécanismes chimiques de l'addiction, la réflexologie faciale agit sur les tensions physiques et émotionnelles associées. Ensemble, ils couvrent tous les aspects du sevrage." },
    ],
    benefits: [
      "Libération des tensions faciales liées au stress tabagique",
      "Activation des zones de détoxification (foie, reins)",
      "Soutien des fonctions pulmonaires pendant la récupération",
      "Régulation du système nerveux et réduction de l'irritabilité",
      "Prévention de la compensation alimentaire post-sevrage",
      "Amélioration de la circulation sanguine et du teint",
      "Effet profondément relaxant et déstressant",
      "Stimulation du système lymphatique (élimination des toxines)",
    ],
    process: [
      "Identification des zones de tension et des zones prioritaires",
      "Stimulation des zones réflexes des poumons et voies respiratoires",
      "Activation des zones de détoxification (foie, reins, système lymphatique)",
      "Travail sur les zones du système nerveux (stress, sommeil, humeur)",
      "Stimulation des zones liées au craving et à l'alimentation",
      "Séquence de relaxation finale pour ancrer les effets du sevrage",
    ],
    faqs: [
      { q: "La réflexologie faciale est-elle vraiment efficace pour le sevrage tabagique ?", a: "Utilisée seule, la réflexologie faciale a des effets limités sur le sevrage tabagique. C'est pourquoi chez SmokeOff elle est toujours pratiquée en complément de la séance laser auriculaire. En synergie, les deux techniques se potentialisent : le laser agit sur l'addiction neurochimique, la réflexologie sur les tensions physiques et émotionnelles. Le résultat combiné est nettement supérieur." },
      { q: "Est-ce douloureux ? Y a-t-il un risque de blesser la peau ?", a: "Non, la réflexologie faciale utilise des pressions légères et des mouvements doux. Il n'y a aucun risque pour la peau. Vous pouvez ressentir une légère sensibilité sur certaines zones réflexes — c'est signe que la zone correspondante est sollicitée — mais jamais de douleur. La plupart des patients s'endorment pendant la séance." },
      { q: "La réflexologie faciale aide-t-elle à éviter la prise de poids après l'arrêt du tabac ?", a: "Oui, c'est l'un de ses rôles clés dans notre protocole. Nous stimulons spécifiquement les zones réflexes liées à l'appétit, au métabolisme et aux envies compulsives. Combiné au protocole anti-fringales inclus dans chaque forfait, cela permet de gérer la compensation alimentaire très fréquente lors du sevrage tabagique." },
      { q: "Combien de temps dure la partie réflexologie dans la séance SmokeOff ?", a: "La réflexologie faciale représente environ 15 minutes de la séance totale de 45 minutes. Elle est pratiquée après le laser auriculaire, pendant que les effets du laser se mettent en place. C'est le moment de la séance où les patients se détendent le plus profondément." },
      { q: "Puis-je faire de la réflexologie faciale séparément, sans la séance laser ?", a: "Oui, la réflexologie faciale peut être pratiquée indépendamment pour la relaxation et le soutien général. Cependant, dans le cadre du sevrage tabagique, nous la recommandons uniquement en complément du laser pour des résultats optimaux. Contactez-nous pour en savoir plus sur nos séances de bien-être." },
    ],
  },
};

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const location = useLocation();
  const slug = params.slug || location.pathname.replace(/^\//, "");
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A1F3A] mb-4">Page introuvable</h1>
          <Link to="/" className="text-[#00C9A7] hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const heroImage = SERVICE_HERO_IMAGES[slug] ?? "https://images.unsplash.com/photo-1719471497337-d140858e6ba7?w=1400&q=80";
  const content = SERVICE_CONTENT[slug];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${SITE_URL}/${slug}#page`,
        name: service.metaTitle,
        description: service.metaDesc,
        url: `${SITE_URL}/${slug}`,
        image: heroImage,
        datePublished: "2026-01-01",
        dateModified: "2026-05-13",
        inLanguage: "fr-FR",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "SmokeOff — Centre de Sevrage Tabagique Évreux",
        telephone: PHONE,
        address: { "@type": "PostalAddress", streetAddress: "34 rue des Alouettes", addressLocality: "Évreux", postalCode: "27000", addressCountry: "FR" },
        priceRange: "€€",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "89", bestRating: "5" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Nos soins", item: `${SITE_URL}/forfaits` },
          { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt={`${service.name} — SmokeOff Évreux sevrage tabagique`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,31,58,0.95) 0%, rgba(10,31,58,0.75) 50%, rgba(10,31,58,0.3) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <nav className="text-white/50 text-xs mb-5 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>›</span>
              <Link to="/forfaits" className="hover:text-white transition-colors">Nos soins</Link>
              <span>›</span>
              <span className="text-white/70">{service.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border" style={{ backgroundColor: "rgba(0,201,167,0.15)", borderColor: "rgba(0,201,167,0.3)" }}>
              <span className="text-xs font-semibold" style={{ color: "#00C9A7" }}>Sevrage tabagique — Évreux</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ lineHeight: 1.15 }}>
              {service.name}
              <span className="block mt-2" style={{ color: "#00C9A7" }}>à Évreux — SmokeOff</span>
            </h1>

            <p className="text-white/75 text-lg mb-8 leading-relaxed">{service.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-4 rounded-full hover:scale-105 transition-all shadow-xl" style={{ backgroundColor: "#00C9A7" }}>
                <Phone className="w-5 h-5" /> {PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je souhaite un RDV pour ${service.name}. `)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B358] text-white font-bold px-7 py-4 rounded-full hover:scale-105 transition-all"
              >
                Réserver via WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-5 mt-8">
              {[
                { icon: Star, text: "5/5 — 89 avis" },
                { icon: Shield, text: "Sans médicaments" },
                { icon: Clock, text: "45 minutes" },
                { icon: Zap, text: "80% réussite J1" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="w-4 h-4" style={{ color: "#00C9A7" }} /> {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro + How it works */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F3A] mb-5">{service.name} — Comment ça marche ?</h2>
              {content && (
                <>
                  <p className="text-gray-600 leading-relaxed text-base mb-8">{content.intro}</p>

                  <div className="space-y-6 mb-10">
                    {content.howItWorks.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white mt-0.5" style={{ backgroundColor: "#00C9A7" }}>
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0A1F3A] mb-1">{step.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1F3A] mb-4">Le déroulement de la séance</h3>
                  <div className="space-y-3 mb-8">
                    {content.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00C9A7" }} />
                        <span className="text-gray-600 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1F3A] mb-4">Les bénéfices pour votre santé</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {content.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-600 border border-gray-100">
                        <Leaf className="w-4 h-4 flex-shrink-0" style={{ color: "#00C9A7" }} /> {b}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {!content && (
                <p className="text-gray-600 leading-relaxed text-base">{service.longDesc}</p>
              )}

              {/* Service image */}
              <figure className="mt-10 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt={`${service.name} — séance au centre SmokeOff Évreux`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <figcaption className="text-xs text-gray-400 italic p-3 bg-gray-50">
                  Séance de {service.name} au centre SmokeOff, 34 rue des Alouettes, Évreux — méthode douce, indolore et sans médicaments.
                </figcaption>
              </figure>
            </article>

            <aside className="space-y-5">
              {/* Booking */}
              <div className="rounded-2xl p-6 border-2 sticky top-20" style={{ borderColor: "#00C9A7", backgroundColor: "#F0F9F7" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00C9A7" }}>Réserver une séance</p>
                <h3 className="text-[#0A1F3A] font-bold text-lg mb-4">{service.shortName}</h3>
                {FORFAITS.map((f) => (
                  <div key={f.id} className={`p-3 rounded-xl mb-3 border ${f.popular ? "border-[#00C9A7] bg-white" : "border-gray-200 bg-white"}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-[#0A1F3A] text-sm">{f.name}</span>
                      <span className="font-bold" style={{ color: "#00C9A7" }}>{f.label}</span>
                    </div>
                    <p className="text-xs text-gray-400">{f.desc}</p>
                    {f.popular && <span className="text-xs font-bold mt-1 inline-block" style={{ color: "#00C9A7" }}>★ Le + populaire</span>}
                  </div>
                ))}
                <Link to="/reservation" className="block w-full text-center text-white font-bold py-3.5 rounded-xl mt-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#00C9A7" }}>
                  Réserver ma séance →
                </Link>
                <a href={PHONE_LINK} className="block w-full text-center text-[#0A1F3A] font-bold py-3 rounded-xl mt-2 border-2 hover:bg-gray-50 transition-colors" style={{ borderColor: "#0A1F3A" }}>
                  <Phone className="w-4 h-4 inline mr-1.5" /> {PHONE}
                </a>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <GoogleReviewButton />
                </div>
              </div>

              {/* Ce que vous obtenez */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" fill="#00C9A7" style={{ color: "#00C9A7" }} />)}
                  <span className="text-gray-500 text-xs ml-1">5/5 — 89 avis</span>
                </div>
                <h4 className="font-bold text-[#0A1F3A] mb-3 text-sm">Ce que vous obtenez :</h4>
                <ul className="space-y-2">
                  {["Séance de 45 minutes", "Protocole personnalisé", "Résultats dès la 1re séance", "Suivi téléphonique inclus", "Méthode 100% naturelle", "Sans médicaments"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00C9A7" }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Autres soins */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0A1F3A] mb-3 text-sm">Nos autres soins</h4>
                <div className="space-y-2">
                  {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                    <Link key={s.slug} to={`/${s.slug}`} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 text-sm text-gray-600 hover:text-[#00C9A7] transition-colors">
                      {s.name} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-12 px-4 lg:px-8" style={{ backgroundColor: "#F0F9F7" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1F3A] mb-8 text-center">Pourquoi {service.name} chez SmokeOff ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: "80%+ de réussite dès J1", desc: "Plus de 8 patients sur 10 arrêtent dès la première séance. Résultats immédiats à la fin de la séance.", color: "#00C9A7" },
              { icon: Heart, title: "100% indolore", desc: "Le laser froid et la réflexologie faciale sont totalement indolores. Aucune aiguille, aucune douleur.", color: "#ef4444" },
              { icon: Shield, title: "Sans médicaments", desc: "Aucun médicament, aucun substitut nicotinique. Votre corps produit lui-même ses propres compensateurs.", color: "#3b82f6" },
              { icon: Clock, title: "45 minutes en 1 séance", desc: "Une seule visite de 45 minutes suffit dans la grande majorité des cas. Pas de séances répétées à prix élevé.", color: "#f59e0b" },
              { icon: Award, title: "Praticienne certifiée", desc: "Formation spécialisée en laser thérapeutique, auriculothérapie et réflexologie. Protocoles reconnus.", color: "#8b5cf6" },
              { icon: Leaf, title: "Suivi 30 jours", desc: "Suivi téléphonique personnalisé inclus pour éviter la rechute et consolider les résultats dans la durée.", color: "#00C9A7" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: color + "18" }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="font-bold text-[#0A1F3A] text-sm mb-1.5">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="py-14 px-4 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0A1F3A] mb-2">Nos forfaits pour {service.name}</h2>
          <p className="text-gray-500 mb-8">Tarifs transparents, tout inclus — suivi compris.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FORFAITS.map((f) => (
              <div key={f.id} className={`rounded-2xl p-6 border-2 text-left ${f.popular ? "border-[#00C9A7]" : "border-gray-100"}`} style={{ backgroundColor: f.popular ? "#F0F9F7" : "#fff" }}>
                {f.popular && <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 text-white" style={{ backgroundColor: "#00C9A7" }}>★ Le plus populaire</span>}
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[#0A1F3A] text-lg">{f.name}</h4>
                  <span className="text-2xl font-bold" style={{ color: "#00C9A7" }}>{f.label}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{f.desc}</p>
                <ul className="space-y-2 mb-5">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00C9A7" }} /> {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/reservation" className="block w-full text-center text-white font-bold py-3 rounded-xl" style={{ backgroundColor: "#00C9A7" }}>
                  Réserver ce forfait
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes */}
      <section className="py-10 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-bold text-[#0A1F3A] mb-4">{service.name} — Villes proches d'Évreux :</h3>
          <div className="flex flex-wrap gap-3">
            {CITIES.slice(0, 24).map((c) => (
              <Link key={c.slug} to={`/${c.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#00C9A7]/40 rounded-lg px-4 py-2 text-sm text-gray-600 hover:text-[#00C9A7] transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content && <FAQSection faqs={content.faqs} title={`FAQ — ${service.name} à Évreux`} />}

      <ZonesBand />
    </>
  );
}
