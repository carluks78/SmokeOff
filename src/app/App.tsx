import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import FloatingCTA from "./components/FloatingCTA";
import ChatBot from "./components/ChatBot";
import SchemaOrg from "./components/SchemaOrg";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import CityPage from "./pages/CityPage";
import ServicePage from "./pages/ServicePage";
import Forfaits from "./pages/Forfaits";
import { CITIES, SERVICES, SITE_URL, COMPANY_FULL, SLOGAN } from "./lib/seoData";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function MetaTags() {
  const { pathname } = useLocation();
  useEffect(() => {
    const cityEntry = CITIES.find((c) => `/${c.slug}` === pathname);
    const serviceEntry = SERVICES.find((s) => `/${s.slug}` === pathname);
    let title = `${COMPANY_FULL} | ${SLOGAN}`;
    let description =
      "Centre de sevrage tabagique au laser auriculaire, auriculothérapie et réflexologie faciale à Évreux. Arrêtez de fumer en 1 séance. Forfait Solo 180€ — Duo 350€. ☎ 06 78 52 59 45";
    const canonical = `${SITE_URL}${pathname}`;

    if (pathname === "/") {
      title = "SmokeOff Évreux — Arrêt Tabac Laser | Auriculothérapie | Séance 180€";
      description =
        "Arrêtez de fumer en 1 séance avec SmokeOff à Évreux. Sevrage tabagique au laser auriculaire + réflexologie faciale. 80% de réussite. Forfait Solo 180€, Duo 350€. ☎ 06 78 52 59 45";
    } else if (pathname === "/forfaits") {
      title = "Forfaits & Tarifs — Sevrage Tabagique Laser Évreux | SmokeOff";
      description =
        "Forfait Solo 180€ et Forfait Duo 350€ pour arrêter de fumer au laser à Évreux. Tarifs transparents, sans engagement, avec suivi inclus. ☎ 06 78 52 59 45";
    } else if (pathname === "/reservation") {
      title = "Réserver une Séance Anti-Tabac Laser — SmokeOff Évreux";
      description =
        "Prenez rendez-vous en ligne pour votre séance de sevrage tabagique au laser à Évreux. Réservation rapide, confirmation sous 2h. ☎ 06 78 52 59 45";
    } else if (pathname === "/contact") {
      title = "Contact — SmokeOff Évreux | Sevrage Tabagique Laser";
      description =
        "Contactez SmokeOff à Évreux. 34 rue des Alouettes, Évreux. ☎ 06 78 52 59 45 — smokeoff.contact@gmail.com";
    } else if (cityEntry) {
      title = `Arrêt Tabac Laser ${cityEntry.name} — SmokeOff Évreux | ${cityEntry.distance}km`;
      description = `Vous habitez à ${cityEntry.name} et voulez arrêter de fumer ? SmokeOff à Évreux propose le sevrage tabagique au laser (80% réussite). Forfait Solo 180€. ☎ 06 78 52 59 45`;
    } else if (serviceEntry) {
      title = serviceEntry.metaTitle;
      description = serviceEntry.metaDesc;
    }

    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("author", "SmokeOff Évreux");
    setMeta("keywords", "sevrage tabagique laser Évreux, arrêt tabac laser, auriculothérapie laser, réflexologie faciale, stop tabac Évreux, smokeoff");

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "SmokeOff — Sevrage Tabagique Laser Évreux", "property");
    setMeta("og:locale", "fr_FR", "property");
    setMeta("og:image", `${SITE_URL}/og-logo.png`, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:image:alt", "SmokeOff — Sevrage Tabagique Laser Évreux", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE_URL}/og-logo.png`);

    setMeta("geo.region", "FR-27");
    setMeta("geo.placename", "Évreux");
    setMeta("geo.position", "49.0275;1.1517");
    setMeta("ICBM", "49.0275, 1.1517");
  }, [pathname]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg />
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget />
      <ChatBot />
      <FloatingCTA />
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <MetaTags />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forfaits" element={<Forfaits />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          {SERVICES.map((s) => (
            <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage />} />
          ))}
          {CITIES.map((c) => (
            <Route key={c.slug} path={`/${c.slug}`} element={<CityPage />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
