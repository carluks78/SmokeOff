// ============================================================
// SMOKEOFF.FR — Données SEO centralisées
// Sevrage tabagique au laser · Auriculothérapie · Réflexologie
// ============================================================

export const SITE_URL = "https://www.smokeoff.fr";
export const COMPANY_NAME = "SmokeOff";
export const COMPANY_FULL = "SmokeOff — Centre de Sevrage Tabagique Évreux";
export const SLOGAN = "Arrêtez de fumer en 1 séance au laser";
export const PHONE = "06 78 52 59 45";
export const PHONE_LINK = "tel:+33678525945";
export const WHATSAPP_NUMBER = "33678525945";
export const EMAIL = "smokeoff.contact@gmail.com";
export const ADDRESS = "34 rue des Alouettes, 27000 Évreux";
export const CITY = "Évreux";
export const POSTAL_CODE = "27000";
export const DEPT = "Eure (27)";
export const REGION = "Normandie";
export const LAT = 49.0275;
export const LNG = 1.1517;

export const FORFAITS = [
  {
    id: "solo",
    name: "Forfait Solo",
    price: 180,
    label: "180 €",
    desc: "1 séance individuelle complète de sevrage tabagique au laser auriculaire. Idéal pour les fumeurs motivés.",
    features: [
      "Séance laser auriculaire 45 min",
      "Bilan personnalisé",
      "Protocole anti-fringales",
      "Suivi téléphonique 30 jours",
      "Conseils nutritionnels inclus",
    ],
    popular: false,
  },
  {
    id: "duo",
    name: "Forfait Duo",
    price: 350,
    label: "350 €",
    desc: "2 séances pour deux personnes simultanément. Arrêtez ensemble, c'est plus facile !",
    features: [
      "2 séances laser simultanées",
      "Bilan personnalisé pour chacun",
      "Protocole anti-rechute couple",
      "Suivi téléphonique 30 jours",
      "Support psycho-émotionnel",
      "Économie de 10 € vs 2 solos",
    ],
    popular: true,
  },
];

export const SERVICES = [
  {
    slug: "sevrage-tabagique-laser-evreux",
    name: "Sevrage Tabagique au Laser",
    shortName: "Laser Anti-Tabac",
    icon: "Zap",
    description:
      "Technique de biostimulation laser sur les points auriculaires pour supprimer l'envie de fumer dès la 1re séance. Méthode non invasive, indolore et sans médicaments.",
    longDesc:
      "Le laser froid agit sur les points d'acupuncture de l'oreille pour stimuler la libération d'endorphines naturelles. Il réduit le manque, les crises d'angoisse et l'irritabilité liés au sevrage tabagique. La séance dure environ 45 minutes et les résultats sont immédiats pour la grande majorité des patients.",
    metaTitle: "Sevrage Tabagique au Laser Évreux — SmokeOff | Arrêt du Tabac",
    metaDesc:
      "Arrêtez de fumer en 1 séance grâce au laser auriculaire à Évreux. SmokeOff utilise la biostimulation laser pour éliminer l'envie de fumer. Résultats dès la 1re séance. ☎ 06 78 52 59 45",
  },
  {
    slug: "auriculotherapie-laser-evreux",
    name: "Auriculothérapie au Laser",
    shortName: "Auriculothérapie",
    icon: "Radio",
    description:
      "Stimulation des zones réflexes de l'oreille par laser froid. Méthode reconnue qui agit sur l'addiction, le stress et les comportements compulsifs liés au tabac.",
    longDesc:
      "L'auriculothérapie laser est une méthode thérapeutique qui utilise le pavillon de l'oreille comme carte de réflexologie du corps entier. En stimulant les points correspondant à l'addiction, au système nerveux et aux organes affectés par le tabac, on rétablit l'équilibre naturel du corps.",
    metaTitle: "Auriculothérapie Laser Évreux — SmokeOff | Arrêt Tabac",
    metaDesc:
      "Auriculothérapie au laser pour l'arrêt du tabac à Évreux. Stimulation des points réflexes de l'oreille pour supprimer l'addiction. Séance 45 min. ☎ 06 78 52 59 45",
  },
  {
    slug: "reflexologie-faciale-evreux",
    name: "Réflexologie Faciale",
    shortName: "Réflexologie Faciale",
    icon: "Smile",
    description:
      "Technique complémentaire de réflexologie sur les zones du visage pour renforcer les effets anti-tabac, réduire le stress et favoriser la détoxification.",
    longDesc:
      "La réflexologie faciale agit en complémentarité avec le traitement laser. Les zones réflexes du visage correspondent aux organes et systèmes du corps. Cette technique libère les tensions, améliore la circulation et amplifie les effets du sevrage en agissant sur le système nerveux central.",
    metaTitle: "Réflexologie Faciale Évreux — SmokeOff | Arrêt Tabac",
    metaDesc:
      "Réflexologie faciale complémentaire pour l'arrêt du tabac à Évreux. Technique douce et naturelle pour renforcer le sevrage tabagique au laser. ☎ 06 78 52 59 45",
  },
];

export const CITIES = [
  // Évreux et communes proches
  { name: "Évreux", slug: "arret-tabac-laser-evreux", distance: 0, cp: "27000" },
  { name: "Gravigny", slug: "arret-tabac-laser-gravigny", distance: 3, cp: "27930" },
  { name: "Guichainville", slug: "arret-tabac-laser-guichainville", distance: 5, cp: "27930" },
  { name: "Le Vieil-Évreux", slug: "arret-tabac-laser-le-vieil-evreux", distance: 5, cp: "27930" },
  { name: "Saint-Sébastien-de-Morsent", slug: "arret-tabac-laser-saint-sebastien-de-morsent", distance: 6, cp: "27180" },
  { name: "Parville", slug: "arret-tabac-laser-parville", distance: 7, cp: "27180" },
  { name: "Arnières-sur-Iton", slug: "arret-tabac-laser-arnieres-sur-iton", distance: 8, cp: "27180" },
  { name: "Normanville", slug: "arret-tabac-laser-normanville", distance: 9, cp: "27930" },
  { name: "Acquigny", slug: "arret-tabac-laser-acquigny", distance: 12, cp: "27400" },
  { name: "Cailly-sur-Eure", slug: "arret-tabac-laser-cailly-sur-eure", distance: 13, cp: "27490" },
  { name: "Garennes-sur-Eure", slug: "arret-tabac-laser-garennes-sur-eure", distance: 13, cp: "27780" },
  { name: "La Croix-Saint-Leufroy", slug: "arret-tabac-laser-la-croix-saint-leufroy", distance: 14, cp: "27490" },
  { name: "Saint-André-de-l'Eure", slug: "arret-tabac-laser-saint-andre-de-l-eure", distance: 15, cp: "27220" },
  { name: "Damville", slug: "arret-tabac-laser-damville", distance: 18, cp: "27240" },
  { name: "Jouy-sur-Eure", slug: "arret-tabac-laser-jouy-sur-eure", distance: 18, cp: "27120" },
  { name: "Croisy-sur-Eure", slug: "arret-tabac-laser-croisy-sur-eure", distance: 20, cp: "27120" },
  { name: "Val-de-Reuil", slug: "arret-tabac-laser-val-de-reuil", distance: 20, cp: "27100" },
  { name: "Aubevoye", slug: "arret-tabac-laser-aubevoye", distance: 22, cp: "27940" },
  { name: "Louviers", slug: "arret-tabac-laser-louviers", distance: 22, cp: "27400" },
  { name: "Hardencourt-Cocherel", slug: "arret-tabac-laser-hardencourt-cocherel", distance: 22, cp: "27120" },
  { name: "Houlbec-Cocherel", slug: "arret-tabac-laser-houlbec-cocherel", distance: 23, cp: "27120" },
  { name: "Ménilles", slug: "arret-tabac-laser-menilles", distance: 23, cp: "27120" },
  { name: "Nonancourt", slug: "arret-tabac-laser-nonancourt", distance: 24, cp: "27320" },
  { name: "Pacy-sur-Eure", slug: "arret-tabac-laser-pacy-sur-eure", distance: 24, cp: "27120" },
  { name: "Gaillon", slug: "arret-tabac-laser-gaillon", distance: 25, cp: "27600" },
  { name: "Conches-en-Ouche", slug: "arret-tabac-laser-conches-en-ouche", distance: 25, cp: "27190" },
  { name: "Bueil", slug: "arret-tabac-laser-bueil", distance: 25, cp: "27750" },
  { name: "Ézy-sur-Eure", slug: "arret-tabac-laser-ezy-sur-eure", distance: 28, cp: "27530" },
  { name: "Pont-de-l'Arche", slug: "arret-tabac-laser-pont-de-l-arche", distance: 28, cp: "27340" },
  { name: "Bourth", slug: "arret-tabac-laser-bourth", distance: 28, cp: "27290" },
  { name: "Breteuil", slug: "arret-tabac-laser-breteuil", distance: 30, cp: "27160" },
  { name: "Gasny", slug: "arret-tabac-laser-gasny", distance: 30, cp: "27620" },
  { name: "Vernon", slug: "arret-tabac-laser-vernon", distance: 35, cp: "27200" },
  { name: "Les Andelys", slug: "arret-tabac-laser-les-andelys", distance: 42, cp: "27700" },
  { name: "Bernay", slug: "arret-tabac-laser-bernay", distance: 42, cp: "27300" },
  { name: "Rugles", slug: "arret-tabac-laser-rugles", distance: 32, cp: "27250" },
  { name: "Pont-Audemer", slug: "arret-tabac-laser-pont-audemer", distance: 55, cp: "27500" },
  { name: "Gisors", slug: "arret-tabac-laser-gisors", distance: 50, cp: "27140" },
  { name: "Verneuil-sur-Avre", slug: "arret-tabac-laser-verneuil-sur-avre", distance: 40, cp: "27130" },
  { name: "Rouen", slug: "arret-tabac-laser-rouen", distance: 80, cp: "76000" },
  { name: "Dreux", slug: "arret-tabac-laser-dreux", distance: 48, cp: "28100" },
  { name: "L'Aigle", slug: "arret-tabac-laser-l-aigle", distance: 50, cp: "61300" },
  { name: "Elbeuf", slug: "arret-tabac-laser-elbeuf", distance: 35, cp: "76500" },
  { name: "Fleury-sur-Andelle", slug: "arret-tabac-laser-fleury-sur-andelle", distance: 38, cp: "27380" },
  { name: "Romilly-sur-Andelle", slug: "arret-tabac-laser-romilly-sur-andelle", distance: 35, cp: "27610" },
  { name: "Giverny", slug: "arret-tabac-laser-giverny", distance: 38, cp: "27620" },
  { name: "Igoville", slug: "arret-tabac-laser-igoville", distance: 22, cp: "27460" },
  { name: "Alizay", slug: "arret-tabac-laser-alizay", distance: 24, cp: "27460" },
  { name: "Douains", slug: "arret-tabac-laser-douains", distance: 27, cp: "27120" },
  { name: "Fains", slug: "arret-tabac-laser-fains", distance: 26, cp: "27120" },
];

export const TESTIMONIALS = [
  { name: "Marie-Claire B.", city: "Évreux", rating: 5, text: "Incroyable ! Après 20 ans de tabac, j'ai arrêté en une seule séance. Aucun manque, aucune nervosité. Je recommande à 100%.", date: "2024-11" },
  { name: "Jean-Pierre M.", city: "Louviers", rating: 5, text: "Sceptique au départ, mais les résultats parlent d'eux-mêmes. 3 mois sans cigarette. Merci SmokeOff !", date: "2024-10" },
  { name: "Sophie L.", city: "Vernon", rating: 5, text: "La séance laser était relaxante et totalement indolore. Dès le lendemain, l'envie avait disparu. Merci !", date: "2024-09" },
  { name: "Patrick D.", city: "Pacy-sur-Eure", rating: 5, text: "Mon mari et moi avons fait le forfait duo. On s'est soutenus mutuellement et ça fait maintenant 6 mois qu'on ne fume plus.", date: "2024-08" },
  { name: "Isabelle R.", city: "Conches-en-Ouche", rating: 5, text: "Très professionnel, écoute parfaite et accompagnement de qualité. La réflexologie faciale en complément a été magique.", date: "2024-07" },
  { name: "François T.", city: "Bernay", rating: 5, text: "15 cigarettes par jour pendant 25 ans. Une séance laser et c'est terminé. Je n'aurais pas cru si je n'avais pas vécu ça moi-même.", date: "2024-11" },
  { name: "Nathalie V.", city: "Évreux", rating: 5, text: "Accueil chaleureux, explications claires, résultat immédiat. Le suivi téléphonique est un vrai plus pour ne pas rechuter.", date: "2024-10" },
  { name: "Christophe A.", city: "Val-de-Reuil", rating: 5, text: "J'avais essayé patches, gommes, hypnose… Rien n'avait marché. Le laser, si ! Merci pour ce beau cadeau de santé.", date: "2024-09" },
  { name: "Céline F.", city: "Gaillon", rating: 5, text: "Séance très agréable dans un cadre calme et professionnel. Je recommande vivement à tous les fumeurs de la région.", date: "2024-08" },
  { name: "Alain P.", city: "Dreux", rating: 5, text: "Ça fait maintenant 4 mois. Aucune rechute. Le manque a disparu dès la première heure. Un grand merci !", date: "2024-12" },
  { name: "Valérie H.", city: "Évreux", rating: 5, text: "Le forfait duo avec mon fils était une excellente idée. On s'est encouragés et ça a encore mieux fonctionné !", date: "2024-11" },
  { name: "Didier S.", city: "Nonancourt", rating: 5, text: "Praticienne très compétente et bienveillante. La méthode est douce, naturelle et efficace. 10/10.", date: "2024-10" },
];

export const HOME_FAQS = [
  {
    q: "Comment fonctionne le sevrage tabagique au laser ?",
    a: "La technique utilise un laser froid (basse énergie) appliqué sur des points précis du pavillon de l'oreille correspondant à l'addiction. Cette stimulation déclenche la libération d'endorphines naturelles, réduisant le manque de nicotine, l'anxiété et les symptômes du sevrage. La séance dure environ 45 minutes et les effets sont immédiats pour la grande majorité des patients.",
  },
  {
    q: "En combien de séances arrête-t-on de fumer ?",
    a: "Pour la plupart des patients, une seule séance suffit. Selon les études et notre expérience, plus de 80% des personnes arrêtent après la première séance. Pour les cas d'addiction sévère ou en cas de rechute, une deuxième séance est offerte.",
  },
  {
    q: "Le laser est-il douloureux ou dangereux ?",
    a: "Non, le laser thérapeutique utilisé est un laser froid (soft laser), absolument indolore et non invasif. Il n'y a aucun risque de brûlure, aucune aiguille, aucun médicament. La technique est totalement sûre, y compris pour les femmes enceintes et les personnes sous traitement médical (après avis médical).",
  },
  {
    q: "Quelle est la différence entre le forfait Solo et le forfait Duo ?",
    a: "Le Forfait Solo (180 €) est une séance individuelle avec suivi téléphonique sur 30 jours. Le Forfait Duo (350 €) permet à deux personnes (couple, amis, fratrie) de faire leur séance ensemble simultanément, avec un suivi de 60 jours. Le forfait duo est économique et favorise la solidarité pour arrêter ensemble.",
  },
  {
    q: "Qu'est-ce que la réflexologie faciale proposée en complément ?",
    a: "La réflexologie faciale est une technique complémentaire qui stimule des zones réflexes sur le visage correspondant aux organes du corps. Elle renforce les effets anti-tabac du laser, réduit le stress et accélère la détoxification. Elle est proposée en complément de la séance laser pour optimiser les résultats.",
  },
  {
    q: "Le traitement est-il remboursé par la Sécurité sociale ?",
    a: "Le sevrage tabagique au laser et l'auriculothérapie ne sont pas remboursés par l'Assurance maladie. Cependant, certaines mutuelles santé prennent en charge tout ou partie du traitement dans le cadre des médecines douces. Renseignez-vous auprès de votre complémentaire santé. En tout état de cause, le coût d'une séance est rapidement amorti par les économies réalisées sur les cigarettes.",
  },
  {
    q: "Puis-je prendre rendez-vous le jour même ?",
    a: "Oui, dans la mesure des disponibilités. Appelez-nous au 06 78 52 59 45 ou contactez-nous via WhatsApp pour vérifier nos disponibilités. Pour garantir votre créneau, une réservation à l'avance est recommandée. Nous essayons toujours de vous accueillir rapidement car nous savons que la motivation est précieuse.",
  },
  {
    q: "Quelles villes desservez-vous autour d'Évreux ?",
    a: "Notre centre est situé au 34 rue des Alouettes à Évreux. Nous accueillons des patients de toute la Normandie : Louviers, Vernon, Pacy-sur-Eure, Conches-en-Ouche, Bernay, Val-de-Reuil, Gaillon, Nonancourt, Les Andelys, Dreux et bien d'autres. Certains patients viennent même de Rouen ou de Paris pour notre expertise en sevrage tabagique laser.",
  },
];
