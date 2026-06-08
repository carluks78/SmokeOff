import { useParams, useLocation, Link } from "react-router";
import { Phone, MapPin, Star, Check, ArrowRight, Clock, Shield, Zap, Users } from "lucide-react";
import { motion } from "motion/react";
import { CITIES, SERVICES, PHONE, PHONE_LINK, WHATSAPP_NUMBER, ADDRESS, FORFAITS, SITE_URL } from "../lib/seoData";
import ZonesBand from "../components/ZonesBand";
import FAQSection from "../components/FAQSection";
import { GoogleReviewButton } from "../components/GoogleReviewButton";

const CITY_IMAGE_MAP: Record<string, string> = {
  "Évreux": "https://images.unsplash.com/photo-1763632276615-77a3df4d066f?w=1200&q=80",
  "Vernon": "https://images.unsplash.com/photo-1629889639614-156fec963c88?w=1200&q=80",
  "Louviers": "https://images.unsplash.com/photo-1657095584055-2ad5589bb2f3?w=1200&q=80",
  "Dreux": "https://images.unsplash.com/photo-1695500274209-79324af68ca3?w=1200&q=80",
  "Giverny": "https://images.unsplash.com/photo-1650466978178-a85d8f972445?w=1200&q=80",
  "Rouen": "https://images.unsplash.com/photo-1604649863570-dbede007bb87?w=1200&q=80",
  "Pacy-sur-Eure": "https://images.unsplash.com/photo-1629213577711-9184c8675752?w=1200&q=80",
  "Gaillon": "https://images.unsplash.com/photo-1636534822776-42b859f25819?w=1200&q=80",
  "Nonancourt": "https://images.unsplash.com/photo-1636534822776-42b859f25819?w=1200&q=80",
  "Conches-en-Ouche": "https://images.unsplash.com/photo-1762015101892-46496da449b7?w=1200&q=80",
  "Bernay": "https://images.unsplash.com/photo-1762015101877-e7764fcba717?w=1200&q=80",
  "Les Andelys": "https://images.unsplash.com/photo-1694955695334-2ed9cfc13983?w=1200&q=80",
  "Pont-de-l'Arche": "https://images.unsplash.com/photo-1604649863570-dbede007bb87?w=1200&q=80",
  "Val-de-Reuil": "https://images.unsplash.com/photo-1657095584055-2ad5589bb2f3?w=1200&q=80",
  "Elbeuf": "https://images.unsplash.com/photo-1657095584055-2ad5589bb2f3?w=1200&q=80",
  "Gisors": "https://images.unsplash.com/photo-1627471277979-7fec7e255313?w=1200&q=80",
  "Verneuil-sur-Avre": "https://images.unsplash.com/photo-1636534822776-42b859f25819?w=1200&q=80",
  "Pont-Audemer": "https://images.unsplash.com/photo-1762015101877-e7764fcba717?w=1200&q=80",
  "Breteuil": "https://images.unsplash.com/photo-1762015101892-46496da449b7?w=1200&q=80",
};

const FALLBACK_POOL = [
  "https://images.unsplash.com/photo-1604649863570-dbede007bb87?w=1200&q=80",
  "https://images.unsplash.com/photo-1762015101892-46496da449b7?w=1200&q=80",
  "https://images.unsplash.com/photo-1762015101877-e7764fcba717?w=1200&q=80",
  "https://images.unsplash.com/photo-1694955695334-2ed9cfc13983?w=1200&q=80",
  "https://images.unsplash.com/photo-1629213577711-9184c8675752?w=1200&q=80",
];

function getCityImage(cityName: string): string {
  return CITY_IMAGE_MAP[cityName] ?? FALLBACK_POOL[cityName.charCodeAt(0) % FALLBACK_POOL.length];
}

function CitySchemaOrg({ cityName, slug, distance }: { cityName: string; slug: string; distance: number }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/${slug}#article`,
        headline: `Arrêt du tabac au laser près de ${cityName} — SmokeOff Évreux`,
        description: `Centre de sevrage tabagique au laser à ${distance}km de ${cityName}. Laser auriculaire, auriculothérapie, réflexologie faciale. 180€ — Résultats dès J1.`,
        author: { "@type": "Organization", name: "SmokeOff Évreux" },
        publisher: { "@type": "Organization", name: "SmokeOff", logo: { "@type": "ImageObject", url: `${SITE_URL}/og-logo.png` } },
        image: getCityImage(cityName),
        datePublished: "2026-01-01",
        dateModified: "2026-05-13",
        inLanguage: "fr-FR",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/${slug}#business`,
        name: `SmokeOff — Sevrage Tabagique Laser Évreux (près de ${cityName})`,
        telephone: PHONE,
        address: { "@type": "PostalAddress", streetAddress: "34 rue des Alouettes", addressLocality: "Évreux", postalCode: "27000", addressCountry: "FR" },
        areaServed: [{ "@type": "City", name: cityName }, { "@type": "City", name: "Évreux" }],
        priceRange: "€€",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "89", bestRating: "5" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: `Arrêt tabac ${cityName}`, item: `${SITE_URL}/${slug}` },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function getCityContent(cityName: string, distance: number): { intro: string; local: string } {
  const map: Record<string, { intro: string; local: string }> = {
    "Évreux": {
      intro: "En tant que centre situé au cœur même d'Évreux, SmokeOff est votre solution locale par excellence. Notre cabinet se trouve au 34 rue des Alouettes, facilement accessible depuis tous les quartiers de la ville.",
      local: "Que vous habitiez le centre-ville, Saint-Michel, La Madeleine ou les quartiers résidentiels, notre centre est à quelques minutes de chez vous. Des centaines d'Euréciens nous font confiance pour leur sevrage tabagique.",
    },
    "Louviers": {
      intro: `Louviers, ville dynamique de l'Eure sur les bords de la rivière, compte de nombreux fumeurs qui cherchent une solution efficace et naturelle. SmokeOff, situé à ${distance} km, est la référence en Normandie pour le sevrage tabagique au laser.`,
      local: "Les habitants de Louviers et du Val-de-Reuil sont nombreux à avoir fait le trajet jusqu'à Évreux pour notre séance laser — et ils ne le regrettent pas. 80% arrêtent dès la première séance.",
    },
    "Vernon": {
      intro: `Vernon, cité de la Seine aux portes de la Normandie et porte d'entrée vers Giverny, mérite de vivre pleinement — sans la cigarette. SmokeOff à Évreux (${distance} km) vous offre une solution naturelle et immédiate.`,
      local: "Les habitants de Vernon et des villages de la boucle de la Seine viennent régulièrement à Évreux pour notre protocole laser auriculaire. Une seule séance de 45 minutes pour retrouver votre liberté.",
    },
    "Giverny": {
      intro: `Village mondialement connu pour les jardins de Claude Monet, Giverny inspire la beauté naturelle. Ses habitants méritent un cadre de vie en pleine santé — sans la cigarette. SmokeOff à Évreux (${distance} km) vous aide à arrêter définitivement.`,
      local: "La nature verdoyante de Giverny inspire encore mieux quand on respire librement. Nos patients de Giverny et de la vallée de l'Epte témoignent : une seule séance suffit.",
    },
    "Rouen": {
      intro: `Rouen, capitale normande et ville de Jeanne d'Arc, est l'une des grandes métropoles de la région. Ses fumeurs méritent une solution à la hauteur : SmokeOff à Évreux propose le protocole laser auriculaire le plus efficace de Normandie.`,
      local: `Bien que la distance soit de ${distance} km, de nombreux Rouennais font le déplacement jusqu'à Évreux pour notre expertise unique. Une seule journée pour changer votre vie définitivement.`,
    },
    "Dreux": {
      intro: `Dreux, ville frontière entre la Normandie et l'Île-de-France. Les habitants de Dreux sont nombreux à se tourner vers Évreux (${distance} km) pour bénéficier de notre protocole laser anti-tabac, l'un des plus efficaces de la région.`,
      local: "Le bassin de vie de Dreux s'étend vers l'Eure, et SmokeOff est naturellement la destination choisie par les fumeurs drouais souhaitant arrêter avec une méthode naturelle et sans médicaments.",
    },
    "Bernay": {
      intro: `Bernay, ville médiévale aux maisons à colombages de l'Eure, à ${distance} km d'Évreux. SmokeOff accueille régulièrement des patients de Bernay et du pays d'Ouche pour un sevrage tabagique laser efficace et durable.`,
      local: "Entre Bernay et Évreux, la route traverse les paisibles paysages normands — un trajet parmi les plus importants de votre vie si vous décidez d'arrêter de fumer une bonne fois pour toutes.",
    },
    "Pacy-sur-Eure": {
      intro: `Pacy-sur-Eure, charmante commune de la vallée de l'Eure, à seulement ${distance} km de notre centre SmokeOff. Nombreux sont les habitants de Pacy qui nous font confiance pour leur sevrage tabagique au laser.`,
      local: "La vallée de l'Eure, entre Pacy et Évreux, est l'un de nos bassins de recrutement naturels. Le trajet est court — et les bénéfices sont immédiats et durables.",
    },
    "Les Andelys": {
      intro: `Les Andelys, cité médiévale au pied du Château-Gaillard, sur les falaises de la Seine. À ${distance} km d'Évreux, les habitants des Andelys choisissent SmokeOff pour son expertise reconnue en sevrage tabagique au laser.`,
      local: "Depuis les hauteurs du Château-Gaillard, l'air est pur. Nos patients des Andelys viennent à Évreux pour retrouver ce souffle d'air pur partout — sans la cigarette.",
    },
    "Pont-Audemer": {
      intro: `Pont-Audemer, la « Venise normande », avec ses canaux et ses maisons à colombages, est l'une des villes les plus pittoresques de l'Eure. À ${distance} km, SmokeOff reste facilement accessible pour ses habitants qui souhaitent arrêter de fumer.`,
      local: "Les patients de Pont-Audemer témoignent : le trajet jusqu'à Évreux est le plus beau voyage qu'ils aient fait, celui vers une vie sans tabac.",
    },
  };
  return map[cityName] ?? {
    intro: `Les habitants de ${cityName} sont de plus en plus nombreux à faire le déplacement jusqu'à SmokeOff à Évreux (${distance} km) pour bénéficier de notre protocole exclusif d'arrêt du tabac au laser. Une seule séance de 45 minutes peut changer votre vie définitivement.`,
    local: `Notre centre accueille des patients de toute la région Normandie — ${cityName} fait partie des villes d'où nos patients arrivent avec la ferme intention d'arrêter de fumer, et qui repartent soulagés.`,
  };
}

export default function CityPage() {
  const params = useParams<{ slug: string }>();
  const location = useLocation();
  const slug = params.slug || location.pathname.replace(/^\//, "");
  const city = CITIES.find((c) => c.slug === slug);
  const cityName = city?.name || "votre ville";
  const distance = city?.distance ?? 0;
  const heroImage = getCityImage(cityName);
  const cityContent = getCityContent(cityName, distance);
  const savings = { monthly: (10 * 30 * 0.45).toFixed(0), yearly: (10 * 365 * 0.45).toFixed(0) };
  const nearbyLinks = CITIES.filter((c) => c.slug !== slug).slice(0, 10);

  const faqs = [
    {
      q: `Y a-t-il un spécialiste en sevrage tabagique laser à ${cityName} ?`,
      a: `Il n'existe pas encore de praticien laser anti-tabac directement à ${cityName}, mais notre centre SmokeOff est situé à seulement ${distance} km, au 34 rue des Alouettes à Évreux. Nous accueillons régulièrement des patients de ${cityName} — une seule séance de 45 minutes suffit pour arrêter de fumer durablement pour plus de 80% d'entre eux.`,
    },
    {
      q: `Comment se rendre de ${cityName} au centre SmokeOff à Évreux ?`,
      a: `Le centre SmokeOff est situé au 34 rue des Alouettes, Évreux (27000), à ${distance} km de ${cityName}. Accès facile en voiture avec parking à proximité. La gare d'Évreux est bien desservie depuis de nombreuses villes normandes. Appelez-nous au ${PHONE} pour tout renseignement.`,
    },
    {
      q: `Quelle est l'efficacité du laser pour les fumeurs de ${cityName} ?`,
      a: `Notre méthode affiche un taux de réussite supérieur à 80% dès la première séance, quelle que soit la ville d'origine. Le laser froid agit sur les points auriculaires pour déclencher la libération d'endorphines naturelles, supprimant immédiatement les envies de nicotine. Nos 89 avis Google tous notés 5/5 en témoignent.`,
    },
    {
      q: `Quel forfait choisir pour arrêter de fumer depuis ${cityName} ?`,
      a: `Si vous venez seul(e) de ${cityName}, choisissez le Forfait Solo à 180€ : séance complète de 45 min + bilan personnalisé + suivi téléphonique 30 jours. Si vous avez un proche fumeur à ${cityName}, le Forfait Duo à 350€ vous permet de faire la séance ensemble, avec suivi de 60 jours. Arrêter en duo double les chances de réussite !`,
    },
    {
      q: `La séance laser est-elle remboursée pour les habitants de ${cityName} ?`,
      a: `Le sevrage tabagique au laser n'est pas remboursé par la Sécurité sociale. Cependant, certaines mutuelles prennent en charge les médecines douces — renseignez-vous auprès de la vôtre. Un fumeur à 10 cigarettes/jour dépense ~${savings.monthly}€/mois — notre Forfait Solo à 180€ est amorti en moins d'un mois d'arrêt.`,
    },
  ];

  return (
    <>
      <CitySchemaOrg cityName={cityName} slug={slug!} distance={distance} />

      {/* HERO with real city photo */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt={`${cityName}, Normandie — patients SmokeOff sevrage tabagique laser Évreux`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,31,58,0.92) 0%, rgba(10,31,58,0.65) 55%, rgba(10,31,58,0.15) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <nav className="text-white/50 text-xs mb-5 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>›</span>
              <span className="text-white/70">Arrêt tabac laser {cityName}</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border" style={{ backgroundColor: "rgba(0,201,167,0.2)", borderColor: "rgba(0,201,167,0.4)" }}>
              <MapPin className="w-3.5 h-3.5" style={{ color: "#00C9A7" }} />
              <span className="text-xs font-semibold" style={{ color: "#00C9A7" }}>
                {distance === 0 ? "Centre-ville d'Évreux" : `À ${distance} km de ${cityName}`}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ lineHeight: 1.1 }}>
              Arrêt du tabac au laser
              <span className="block" style={{ color: "#00C9A7" }}>
                {distance === 0 ? "à Évreux" : `près de ${cityName}`}
              </span>
            </h1>

            <p className="text-white/75 text-lg mb-8 leading-relaxed max-w-xl">
              {distance === 0
                ? <><strong className="text-white">SmokeOff Évreux</strong> — sevrage tabagique au laser auriculaire, auriculothérapie et réflexologie faciale. <strong className="text-white">80% de réussite</strong> dès la 1re séance. <strong className="text-white">Forfait Solo 180€</strong>.</>
                : <>Vous habitez à <strong className="text-white">{cityName}</strong> ? SmokeOff à Évreux ({distance} km) propose le <strong className="text-white">sevrage tabagique au laser auriculaire</strong> — 80% de réussite dès J1. <strong className="text-white">Forfait Solo 180€</strong>.</>
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl" style={{ backgroundColor: "#00C9A7" }}>
                <Phone className="w-5 h-5" /> {PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(distance === 0 ? "Bonjour, je souhaite prendre RDV pour arrêter de fumer au laser à Évreux. " : `Bonjour, j'habite à ${cityName} et je souhaite prendre RDV pour arrêter de fumer au laser. `)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B358] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp {distance > 0 ? `depuis ${cityName}` : ""}
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: Star, text: "5/5 — 89 avis Google" },
                { icon: Zap, text: "80% réussite dès J1" },
                { icon: MapPin, text: distance === 0 ? "34 rue des Alouettes, Évreux" : `${distance} km de ${cityName}` },
                { icon: Shield, text: "Sans médicaments" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="w-4 h-4" style={{ color: "#00C9A7" }} /> {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info band */}
      <div style={{ backgroundColor: "#0A1F3A" }} className="py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            { icon: MapPin, label: "Adresse", value: ADDRESS },
            { icon: Phone, label: "Téléphone", value: PHONE },
            { icon: Clock, label: "Horaires", value: "Lun–Sam : 9h–19h" },
            { icon: Users, label: "Avis patients", value: "89 × ⭐ 5/5" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 text-white/80 text-sm">
              <Icon className="w-4 h-4" style={{ color: "#00C9A7" }} />
              <span className="text-white/50">{label} :</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rich content */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F3A] mb-5">
                {distance === 0 ? "Centre SmokeOff — Sevrage tabagique laser à Évreux" : `Sevrage tabagique laser à ${distance} km de ${cityName}`}
              </h2>

              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>{cityContent.intro}</p>
                <p>{cityContent.local}</p>
                <p>
                  Notre méthode de <strong>sevrage tabagique au laser auriculaire</strong> est une technique de biostimulation
                  non invasive qui agit sur les points d'acupuncture du pavillon de l'oreille. Ce protocole stimule la
                  production naturelle d'endorphines, supprime les envies de nicotine et réduit l'anxiété liée au sevrage —
                  sans médicaments, sans patches, sans effets secondaires.
                </p>

                <h3 className="text-xl font-bold text-[#0A1F3A] mt-6 mb-3">
                  Pourquoi choisir SmokeOff {distance === 0 ? "à Évreux" : `depuis ${cityName}`} ?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Zap, title: "1 séance suffit", desc: "Plus de 80% de nos patients arrêtent dès la 1re séance de laser auriculaire, sans rechute." },
                    { icon: Shield, title: "100% naturel", desc: "Aucun médicament, aucune aiguille, aucun effet secondaire. Le laser froid est totalement indolore." },
                    { icon: Clock, title: "45 minutes seulement", desc: "Protocole complet en 45 min : bilan, séance laser, auriculothérapie et réflexologie faciale." },
                    { icon: Star, title: "5/5 sur Google", desc: "89 avis patients vérifiés, tous notés 5 étoiles. Notre réputation se construit sur les résultats." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0,201,167,0.12)" }}>
                        <Icon className="w-4 h-4" style={{ color: "#00C9A7" }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F3A] text-sm">{title}</h4>
                        <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#0A1F3A] mt-6 mb-3">Le protocole SmokeOff étape par étape</h3>
                <p>
                  La séance commence par un <strong>bilan personnalisé</strong> de votre profil de fumeur : ancienneté, nombre de cigarettes par jour, facteurs déclenchants (stress, café, alcool…). Ensuite, le <strong>laser froid</strong> est appliqué avec précision sur les points auriculaires correspondant à l'addiction nicotinique, au stress et aux organes affectés par le tabac.
                </p>
                <p>
                  En complément, la <strong>réflexologie faciale</strong> amplifie les effets du laser en libérant les tensions accumulées et en stimulant la détoxification naturelle. Les envies de fumer disparaissent progressivement durant la séance — la plupart des patients ne ressentent plus de manque dès le lendemain.
                </p>

                <h3 className="text-xl font-bold text-[#0A1F3A] mt-6 mb-3">Ce que vous économisez en arrêtant</h3>
                <p>
                  Un fumeur moyen à 10 cigarettes par jour dépense environ <strong>{savings.monthly}€ par mois</strong> et <strong>{savings.yearly}€ par an</strong>. Notre Forfait Solo à <strong>180€</strong> est amorti en moins d'un mois d'arrêt. Et les bénéfices santé sont inestimables.
                </p>
              </div>

              <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0A1F3A] mb-4">Ce qui est inclus dans chaque forfait :</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Bilan personnalisé de votre addiction",
                    "Séance laser auriculaire complète (45 min)",
                    "Auriculothérapie sur mesure",
                    "Réflexologie faciale complémentaire",
                    "Protocole anti-fringales",
                    "Suivi téléphonique (30 à 60 jours)",
                    "Conseils nutritionnels anti-rechute",
                    "Disponibilité WhatsApp post-séance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00C9A7" }} /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <figure className="mt-8 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={heroImage}
                  alt={`${cityName} — ville proche du centre SmokeOff Évreux, sevrage tabagique laser auriculaire`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <figcaption className="text-xs text-gray-400 italic p-3 bg-gray-50">
                  {distance === 0
                    ? "Évreux — siège du centre SmokeOff, 34 rue des Alouettes, référence normande du sevrage tabagique au laser."
                    : `${cityName} — à ${distance} km du centre SmokeOff Évreux, référence normande du sevrage tabagique au laser auriculaire.`}
                </figcaption>
              </figure>
            </article>

            <aside className="space-y-5">
              <div className="rounded-2xl p-6 border-2 sticky top-20" style={{ borderColor: "#00C9A7", backgroundColor: "#F0F9F7" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00C9A7" }}>
                  {distance === 0 ? "Réserver à Évreux" : `Réserver depuis ${cityName}`}
                </p>
                <h3 className="text-[#0A1F3A] font-bold text-lg mb-4">Prendre RDV</h3>
                {FORFAITS.map((f) => (
                  <div key={f.id} className={`p-3 rounded-xl mb-3 border ${f.popular ? "border-[#00C9A7] bg-white" : "border-gray-200 bg-white"}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[#0A1F3A] text-sm">{f.name}</span>
                      <span className="font-bold" style={{ color: "#00C9A7" }}>{f.label}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{f.desc}</p>
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

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0A1F3A] mb-3 text-sm">Nos 3 techniques</h4>
                <div className="space-y-2">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} to={`/${s.slug}`} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 text-sm text-gray-600 hover:text-[#00C9A7] transition-colors">
                      {s.shortName} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" fill="#FBBC05" style={{ color: "#FBBC05" }} />)}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed">"Après 20 ans de tabac, j'ai arrêté en une seule séance. Aucun manque, aucune nervosité. Je recommande à 100%."</p>
                <p className="text-xs text-gray-400 mt-2 font-semibold">— Marie-Claire B., Évreux</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`FAQ — Arrêt tabac laser ${distance === 0 ? "à Évreux" : `depuis ${cityName}`}`} />

      <section className="py-12 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-bold text-[#0A1F3A] text-lg mb-5">Autres villes desservies :</h3>
          <div className="flex flex-wrap gap-3">
            {nearbyLinks.map((c) => (
              <Link key={c.slug} to={`/${c.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#00C9A7]/50 hover:text-[#00C9A7] rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:shadow-sm">
                <MapPin className="w-3.5 h-3.5" /> Arrêt tabac {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ZonesBand />
    </>
  );
}
