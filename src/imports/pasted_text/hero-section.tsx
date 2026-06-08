import React from "react";
import { Phone, ArrowRight, Shield, Clock, Star } from "lucide-react";
import { PHONE_LINK, PHONE, HERO_IMAGE_URL, WHATSAPP_NUMBER } from "@/lib/seoData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Flotte de taxis professionnels Narbonne Central devant la Gare de Narbonne - Mercedes, Tesla, véhicule PMR"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            <span className="text-gold text-xs font-body font-semibold">Service noté 5/5 — Disponible 24h/24</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Taxi Narbonne
            <span className="text-gold block mt-2">VTC du Grand Narbonne</span>
          </h1>

          <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Votre service de <strong>taxi à Narbonne</strong> et dans tout le département de l'Aude. 
            Transferts gare SNCF, aéroport, <strong>taxi conventionné CPAM</strong>, 
            courses quotidiennes et longue distance. Ponctualité et confort garantis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-body font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite réserver un taxi. ")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B358] text-white font-body font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, text: "CPAM Agréé" },
              { icon: Clock, text: "24h/24 7j/7" },
              { icon: Star, text: "5/5 Avis clients" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70">
                <Icon className="w-4 h-4 text-gold" />
                <span className="font-body text-sm">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Train, Heart, Users, Umbrella, Route, Clock, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/seoData";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";

const iconMap = {
  Train, Heart, Users, Umbrella, Route, Clock
};

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nos Services de Taxi à Narbonne"
          subtitle="Un service complet de transport adapté à tous vos besoins dans l'Aude et le littoral méditerranéen"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Train;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/${service.slug}`}
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all h-full"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-gold transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-semibold">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { TESTIMONIALS } from "@/lib/seoData";
import SectionTitle from "../shared/SectionTitle";
import TestimonialCard from "../shared/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Avis Clients — Taxi Narbonne"
          subtitle="Découvrez pourquoi nos clients nous font confiance pour tous leurs trajets dans l'Aude"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Shield, Clock, CreditCard, Car, Award, HeartHandshake } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";

const reasons = [
  { icon: Clock, title: "Disponible 24h/24", desc: "Service de taxi à Narbonne disponible jour et nuit, week-ends et jours fériés inclus." },
  { icon: Shield, title: "Taxi Conventionné CPAM", desc: "Agréé par la Sécurité sociale pour le transport sanitaire. Prise en charge directe." },
  { icon: CreditCard, title: "Tarifs Transparents", desc: "Compteur homolagué, devis gratuit pour les longues distances. Pas de mauvaise surprise." },
  { icon: Car, title: "Véhicules Confortables", desc: "Flotte récente, climatisée, entretenue. Confort premium pour tous vos trajets." },
  { icon: Award, title: "Chauffeurs Professionnels", desc: "Chauffeurs expérimentés, courtois et connaissant parfaitement la région narbonnaise." },
  { icon: HeartHandshake, title: "Service Humain", desc: "Aide au transport des personnes à mobilité réduite. Accompagnement personnalisé." },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Pourquoi Choisir Notre Taxi à Narbonne ?"
          subtitle="Un service de confiance, professionnel et adapté à vos besoins quotidiens"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, COMPANY_NAME, ZONES, SERVICES, AIRPORTS, WHATSAPP_NUMBER } from "@/lib/seoData";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* CTA Band */}
      <div className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-navy-dark text-xl font-bold">Besoin d'un taxi à Narbonne ?</h3>
            <p className="text-navy-dark/80 font-body text-sm">Disponible 24h/24, 7j/7 — Réservation immédiate par téléphone</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={PHONE_LINK} className="bg-navy text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-navy-light transition-colors inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite réserver un taxi. ")}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-[#20B358] transition-colors inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info */}
          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-4">{COMPANY_NAME}</h4>
            <p className="text-sm leading-relaxed mb-4">Votre service de taxi et VTC professionnel à Narbonne et dans tout le département de l'Aude. Transport conventionné CPAM, transferts aéroport et gare.</p>
            <div className="space-y-2 text-sm">
              <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-gold transition-colors"><Phone className="w-4 h-4 text-gold" />{PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-gold transition-colors"><Mail className="w-4 h-4 text-gold" />{EMAIL}</a>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" />Narbonne, Aude (11)</p>
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" />24h/24, 7j/7</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link to={`/${s.slug}`} className="hover:text-gold transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-4">Zones Desservies</h4>
            <ul className="space-y-2 text-sm">
              {ZONES.slice(0, 10).map((z) => (
                <li key={z.slug}><Link to={`/${z.slug}`} className="hover:text-gold transition-colors">Taxi {z.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Aéroports + Lieux */}
          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-4">Transferts Aéroport</h4>
            <ul className="space-y-2 text-sm">
              {AIRPORTS.map((a) => (
                <li key={a.slug}><Link to={`/${a.slug}`} className="hover:text-gold transition-colors">{a.name}</Link></li>
              ))}
            </ul>
            <h4 className="font-heading text-white text-lg font-semibold mb-3 mt-6">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-gold transition-colors">Nous contacter</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Accueil</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Tous droits réservés. Taxi & VTC Narbonne, Aude.</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
            <span className="ml-1">Noté 5/5 par nos clients</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "../shared/FloatingCTA";
import WhatsAppWidget from "../shared/WhatsAppWidget";
import CallbackWidget from "../shared/CallbackWidget";
import SchemaOrg from "../seo/SchemaOrg";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppWidget />
      <CallbackWidget />
    </div>
  );
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, MapPin, Briefcase, Plane } from "lucide-react";
import { PHONE, PHONE_LINK, COMPANY_NAME, ZONES, SERVICES, AIRPORTS, LOGO_URL } from "@/lib/seoData";
import { motion, AnimatePresence } from "framer-motion";

function DropdownMenu({ label, icon: Icon, items, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1.5 text-white/90 hover:text-gold transition-colors font-body text-sm font-medium py-2">
        <Icon className="w-4 h-4" />
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 bg-navy border border-white/10 rounded-lg shadow-2xl min-w-[240px] py-2 z-50 max-h-[70vh] overflow-y-auto"
          >
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`/${item.slug}`}
                onClick={() => { setOpen(false); onClose?.(); }}
                className="block px-4 py-2 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
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
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/taxi-narbonne", label: "Taxi Narbonne" },
    { to: "/taxi-gare-narbonne", label: "Taxi Gare" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-gold text-white text-xs font-body font-semibold py-1.5 px-4 text-center">
        <a href={PHONE_LINK} className="inline-flex items-center gap-1.5 hover:underline">
          <Phone className="w-3 h-3" /> Réservation immédiate : {PHONE} — Disponible 24h/24, 7j/7
        </a>
      </div>

      {/* Main nav */}
      <nav className="bg-navy sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={LOGO_URL} alt={COMPANY_NAME} className="h-10 w-auto" />
              <div className="hidden sm:block">
                <span className="text-white font-heading font-semibold text-sm leading-tight block">{COMPANY_NAME}</span>
                <span className="text-gold text-[10px] font-body">VTC du Grand Narbonne</span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-body font-medium transition-colors ${isActive(link.to) ? "text-gold" : "text-white/90 hover:text-gold"}`}
                >
                  {link.label}
                </Link>
              ))}
              <DropdownMenu label="Zones" icon={MapPin} items={ZONES} />
              <DropdownMenu label="Services" icon={Briefcase} items={SERVICES} />
              <DropdownMenu label="Aéroports" icon={Plane} items={AIRPORTS} />
              <Link to="/contact" className={`text-sm font-body font-medium transition-colors ${isActive("/contact") ? "text-gold" : "text-white/90 hover:text-gold"}`}>
                Contact
              </Link>
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a href={PHONE_LINK} className="hidden sm:inline-flex bg-gold hover:bg-gold-light text-navy-dark font-body font-semibold text-sm px-5 py-2 rounded-full transition-colors">
                Réserver maintenant
              </a>
              <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
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
              className="lg:hidden bg-navy-dark border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="block py-2.5 text-white/90 hover:text-gold font-body text-sm">
                    {link.label}
                  </Link>
                ))}
                {[
                  { label: "Zones desservies", items: ZONES, key: "zones" },
                  { label: "Services", items: SERVICES, key: "services" },
                  { label: "Aéroports", items: AIRPORTS, key: "airports" },
                ].map(({ label, items, key }) => (
                  <div key={key}>
                    <button onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)} className="flex items-center justify-between w-full py-2.5 text-white/90 hover:text-gold font-body text-sm">
                      {label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === key ? "rotate-180" : ""}`} />
                    </button>
                    {mobileDropdown === key && (
                      <div className="pl-4 space-y-1 pb-2">
                        {items.map((item) => (
                          <Link key={item.slug} to={`/${item.slug}`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-white/60 hover:text-gold text-sm">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-2.5 text-white/90 hover:text-gold font-body text-sm">
                  Contact
                </Link>
                <a href={PHONE_LINK} className="block w-full text-center bg-gold text-navy-dark font-semibold py-3 rounded-full mt-4">
                  Réserver maintenant
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

import React from "react";
import { PHONE, EMAIL, COMPANY_FULL, SITE_URL } from "@/lib/seoData";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": SITE_URL,
        "name": COMPANY_FULL,
        "description": "Service de taxi et VTC professionnel à Narbonne et dans l'Aude. Taxi conventionné CPAM, transferts aéroport, gare, longue distance. Disponible 24h/24.",
        "url": SITE_URL,
        "telephone": PHONE,
        "email": EMAIL,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Narbonne",
          "addressRegion": "Occitanie",
          "postalCode": "11100",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.1836,
          "longitude": 2.9999
        },
        "areaServed": [
          { "@type": "City", "name": "Narbonne" },
          { "@type": "City", "name": "Béziers" },
          { "@type": "City", "name": "Carcassonne" },
          { "@type": "City", "name": "Gruissan" },
          { "@type": "City", "name": "Leucate" },
          { "@type": "City", "name": "Sigean" },
          { "@type": "City", "name": "Port-la-Nouvelle" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "€€",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "127",
          "bestRating": "5"
        },
        "sameAs": []
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import React, { useState } from "react";
import { Phone, X, ChevronDown, Check, Loader2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/seoData";
import { motion, AnimatePresence } from "framer-motion";

export default function CallbackWidget() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);

    // Send via WhatsApp to the driver
    const msg = encodeURIComponent(`🔔 Demande de rappel\nUn client souhaite être rappelé au : ${phone}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  const reset = () => {
    setSent(false);
    setPhone("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-24 left-4 z-40 flex flex-col items-start">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-white rounded-2xl shadow-2xl border border-border w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-body font-semibold text-sm">Être rappelé</p>
                  <p className="text-white/70 text-xs">Réponse en moins de 5 min</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              {sent ? (
                <div className="text-center py-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="font-body font-semibold text-foreground text-sm mb-1">Demande envoyée !</p>
                  <p className="text-muted-foreground text-xs mb-4">Un chauffeur va vous rappeler au <strong>{phone}</strong> très rapidement.</p>
                  <button onClick={reset} className="text-primary text-xs font-semibold hover:underline">
                    Fermer
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                    Laissez votre numéro, un chauffeur vous rappelle dans les <strong>5 minutes</strong>.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Votre numéro de téléphone"
                      required
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-body font-semibold text-sm py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <><Phone className="w-4 h-4" /> Me rappeler</>
                      )}
                    </button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center mt-2">Gratuit · 24h/24 · 7j/7</p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => { setOpen(!open); if (sent) reset(); }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-xl flex items-center gap-2 px-4 py-3 font-body font-semibold text-sm transition-colors"
      >
        <Phone className="w-4 h-4" />
        {!open && <span>Être rappelé</span>}
        {open && <ChevronDown className="w-4 h-4" />}
      </motion.button>
    </div>
  );
}

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";

export default function FAQSection({ faqs, title = "Questions Fréquentes", schemaFaq = true }) {
  return (
    <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto">
      <SectionTitle tag="h2" title={title} subtitle="Retrouvez les réponses aux questions les plus posées sur notre service de taxi à Narbonne" />
      
      {schemaFaq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}} />
      )}

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-4">
            <AccordionTrigger className="font-body font-semibold text-sm md:text-base text-left py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

import React from "react";
import { Phone } from "lucide-react";
import { PHONE_LINK } from "@/lib/seoData";

export default function FloatingCTA() {
  return (
    <a
      href={PHONE_LINK}
      className="fixed bottom-6 right-6 z-50 bg-gold hover:bg-gold-light text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 lg:hidden"
      aria-label="Appeler pour réserver un taxi"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function InternalLinks({ title = "Découvrez aussi", links }) {
  if (!links || links.length === 0) return null;
  return (
    <section className="py-10 px-4 lg:px-8 max-w-7xl mx-auto">
      <h3 className="font-heading text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-flex items-center gap-1.5 bg-muted hover:bg-gold/10 border border-border hover:border-gold/30 rounded-lg px-4 py-2 text-sm font-body font-medium text-foreground hover:text-gold transition-colors"
          >
            {link.label} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}

import React from "react";

export default function SectionTitle({ tag = "h2", title, subtitle, center = true, light = false }) {
  const Tag = tag;
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <Tag className={`font-heading text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-3 font-body text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-16 h-1 bg-gold rounded-full ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ name, city, rating, text }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{text}"</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
          <span className="text-xs font-semibold text-gold">{name[0]}</span>
        </div>
        <div>
          <p className="font-body text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{city}</p>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, COMPANY_NAME } from "@/lib/seoData";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const defaultMessage = "Bonjour, je souhaite réserver un taxi. ";

  const handleSend = () => {
    const text = message.trim() || defaultMessage;
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
                    <span className="w-2 h-2 bg-white rounded-full inline-block"></span>
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
              <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-gray-800 text-sm leading-relaxed">
                  👋 Bonjour ! Comment puis-je vous aider ?<br />
                  Dites-moi votre trajet souhaité (départ, destination, date &amp; heure).
                </p>
                <p className="text-gray-400 text-[10px] mt-1 text-right">maintenant</p>
              </div>
            </div>

            {/* Quick messages */}
            <div className="bg-[#ECE5DD] px-4 pb-3 flex flex-wrap gap-2">
              {[
                "Réserver un taxi",
                "Taxi gare Narbonne",
                "Transfert aéroport",
                "Taxi conventionné",
              ].map((q) => (
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
                  onKeyDown={handleKeyDown}
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
              <p className="text-gray-400 text-[10px] text-center mt-2">
                Appuyez sur Entrée ou cliquez sur envoyer
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center relative"
        aria-label="Contacter par WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      </motion.button>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { ZONES } from "@/lib/seoData";

export default function ZonesBand() {
  return (
    <section className="bg-navy py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">Zones Desservies</h2>
        <p className="text-white/60 font-body text-sm mb-8">Taxi disponible dans toute l'Aude et le littoral méditerranéen</p>
        <div className="flex flex-wrap justify-center gap-3">
          {ZONES.map((zone) => (
            <Link
              key={zone.slug}
              to={`/${zone.slug}`}
              className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/80 hover:text-gold hover:border-gold/30 rounded-full px-4 py-2 text-sm font-body transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" /> {zone.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  "name": "base44-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --quiet",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc -p ./jsconfig.json",
    "preview": "vite preview"
  },
  "dependencies": {
    "@base44/sdk": "^0.8.27",
    "@base44/vite-plugin": "^1.0.13",
    "@hello-pangea/dnd": "^17.0.0",
    "@hookform/resolvers": "^4.1.2",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-aspect-ratio": "^1.1.2",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.3",
    "@radix-ui/react-context-menu": "^2.2.6",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-hover-card": "^1.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-navigation-menu": "^1.2.5",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-toggle": "^1.1.2",
    "@radix-ui/react-toggle-group": "^1.1.2",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@stripe/react-stripe-js": "^3.0.0",
    "@stripe/stripe-js": "^5.2.0",
    "@tanstack/react-query": "^5.84.1",
    "canvas-confetti": "^1.9.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.5.2",
    "framer-motion": "^11.16.4",
    "html2canvas": "^1.4.1",
    "input-otp": "^1.4.2",
    "jspdf": "^4.2.1",
    "lodash": "^4.17.21",
    "lucide-react": "^0.475.0",
    "moment": "^2.30.1",
    "next-themes": "^0.4.4",
    "react": "^18.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.6.0",
    "react-leaflet": "^4.2.1",
    "react-markdown": "^9.0.1",
    "react-quill": "^2.0.0",
    "react-resizable-panels": "^2.1.7",
    "react-router-dom": "^6.26.0",
    "recharts": "^2.15.4",
    "sonner": "^2.0.1",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.171.0",
    "vaul": "^1.1.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.19.0",
    "@types/node": "^22.13.5",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "baseline-browser-mapping": "^2.8.32",
    "eslint": "^9.19.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "eslint-plugin-unused-imports": "^4.3.0",
    "globals": "^15.14.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.2",
    "vite": "^6.1.0"
  }
}

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Plane, Clock, Shield, CreditCard, MapPin } from "lucide-react";
import { PHONE, PHONE_LINK, AIRPORTS } from "@/lib/seoData";
import ZonesBand from "@/components/shared/ZonesBand";
import FAQSection from "@/components/shared/FAQSection";
import InternalLinks from "@/components/shared/InternalLinks";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function AirportPage() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname;
  const airport = AIRPORTS.find(a => a.slug === slug);
  const name = airport?.name || slug.replace(/taxi-/g, "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  const faqs = [
    { q: `Comment réserver un taxi vers ${name} ?`, a: `Appelez le ${PHONE} pour réserver votre transfert vers ${name}. Nous recommandons de réserver au moins 24h à l'avance pour garantir la disponibilité.` },
    { q: `Combien coûte le transfert Narbonne — ${name} ?`, a: `Le tarif dépend de la distance. Contactez-nous au ${PHONE} pour obtenir un devis précis et gratuit pour votre transfert vers ${name}.` },
    { q: `Le chauffeur m'attend-il à l'aéroport en cas de retard d'avion ?`, a: `Oui, nous suivons les horaires de vol en temps réel. En cas de retard, notre chauffeur ajuste son heure d'arrivée automatiquement. Aucun supplément n'est facturé.` },
    { q: `Peut-on réserver un aller-retour vers ${name} ?`, a: "Absolument. Nous proposons des formules aller-retour avec réservation du retour à l'avance. Idéal pour planifier votre voyage sereinement." },
    { q: `Le taxi vers ${name} est-il disponible tôt le matin ou tard le soir ?`, a: "Oui, notre service fonctionne 24h/24. Nous assurons les transferts aéroport quelle que soit l'heure de votre vol, y compris les vols très matinaux ou tardifs." },
  ];

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://media.base44.com/images/public/69ff1fb8d139c108423fb13d/cc11837fc_generated_f1ea73a4.png" alt={`Taxi transfert ${name} depuis Narbonne`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <Plane className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-body font-semibold">Transfert Aéroport</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Taxi {name} <span className="text-gold">— Transfert depuis Narbonne</span>
            </h1>
            <p className="text-white/80 font-body text-lg mb-8">
              Service de <strong>transfert taxi vers {name}</strong> au départ de Narbonne et de toute l'Aude. 
              Prise en charge à domicile, suivi des vols en temps réel, ponctualité garantie.
            </p>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-body font-bold px-8 py-4 rounded-full transition-colors">
              <Phone className="w-5 h-5" /> Réserver : {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto">
        <article>
          <h2 className="font-heading text-2xl font-bold mb-4">Transfert taxi Narbonne — {name}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Vous avez un vol depuis <strong>{name}</strong> ? TAXI Narbonne Central vous propose un service 
            de transfert professionnel depuis Narbonne et toutes les communes de l'Aude. Notre chauffeur vous 
            prend en charge directement à votre domicile et vous dépose au terminal de départ. À l'arrivée, 
            il vous attend dans le hall des arrivées avec une pancarte à votre nom.
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4">Pourquoi choisir notre service de transfert aéroport ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Clock, title: "Suivi des vols", desc: "Nous suivons votre vol en temps réel et nous adaptons aux retards" },
              { icon: Shield, title: "Fiabilité totale", desc: "Réservation confirmée = chauffeur garanti à l'heure" },
              { icon: CreditCard, title: "Tarif fixe", desc: "Devis communiqué à l'avance, pas de supplément surprise" },
              { icon: MapPin, title: "Porte à porte", desc: "Prise en charge à domicile, dépose au terminal" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 bg-muted/50 rounded-lg p-4">
                <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-body font-semibold text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-bold mb-4">Autres transferts disponibles</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            En plus de {name}, nous assurons les transferts vers tous les aéroports de la région :
            {AIRPORTS.filter(a => a.slug !== slug).map((a, i) => (
              <span key={a.slug}>
                {i > 0 && ","} <Link to={`/${a.slug}`} className="text-gold hover:underline">{a.name}</Link>
              </span>
            ))}.
            Nous proposons également le <Link to="/taxi-gare-narbonne" className="text-gold hover:underline">transfert depuis la gare de Narbonne</Link>.
          </p>
        </article>
      </section>

      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={faqs} title={`FAQ — Taxi ${name}`} />
      <InternalLinks links={[
        { to: "/taxi-narbonne", label: "Taxi Narbonne" },
        { to: "/taxi-gare-narbonne", label: "Taxi Gare Narbonne" },
        { to: "/contact", label: "Nous Contacter" },
      ]} />
    </>
  );
}

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, COMPANY_NAME } from "@/lib/seoData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SectionTitle from "@/components/shared/SectionTitle";
import InternalLinks from "@/components/shared/InternalLinks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-navy py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <MessageCircle className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs font-body font-semibold">Contact</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez <span className="text-gold">{COMPANY_NAME}</span>
          </h1>
          <p className="text-white/80 font-body text-lg max-w-2xl">
            Réservez votre taxi à Narbonne ou demandez un devis gratuit. Notre équipe est disponible 24h/24 pour répondre à vos besoins de transport.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Nos Coordonnées</h2>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Téléphone", value: PHONE, href: PHONE_LINK, sub: "Disponible 24h/24, 7j/7" },
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, sub: "Réponse sous 2h" },
                { icon: MapPin, label: "Adresse", value: "Narbonne, Aude (11100)", sub: "Dessert tout le Grand Narbonne" },
                { icon: Clock, label: "Horaires", value: "24h/24 — 7j/7", sub: "Nuits, week-ends et jours fériés" },
              ].map(({ icon: Icon, label, value, href, sub }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="font-body font-semibold text-foreground hover:text-gold transition-colors">{value}</a>
                    ) : (
                      <p className="font-body font-semibold">{value}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-muted rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="font-body text-sm text-muted-foreground">Narbonne, Aude — Sud de la France</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Envoyer un Message</h2>
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-green-800 mb-2">Message envoyé !</h3>
                <p className="text-green-700 text-sm">Nous vous répondrons dans les plus brefs délais. Pour une réservation immédiate, appelez le {PHONE}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="font-body text-sm">Nom complet</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Votre nom" required className="mt-1.5" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="font-body text-sm">Email</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="votre@email.com" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-body text-sm">Téléphone</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="06 XX XX XX XX" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="font-body text-sm">Votre message</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Décrivez votre trajet souhaité (départ, destination, date, heure...)" rows={5} required className="mt-1.5" />
                </div>
                <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-navy-dark font-body font-bold py-3 rounded-full">
                  <Send className="w-4 h-4 mr-2" /> Envoyer le message
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Pour une réservation immédiate, appelez le <a href={PHONE_LINK} className="text-gold font-semibold">{PHONE}</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <InternalLinks links={[
        { to: "/taxi-narbonne", label: "Taxi Narbonne" },
        { to: "/taxi-gare-narbonne", label: "Taxi Gare Narbonne" },
        { to: "/taxi-conventionne-narbonne", label: "Taxi Conventionné" },
        { to: "/taxi-aeroport-beziers", label: "Taxi Aéroport" },
      ]} />
    </>
  );
}

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUsSection from "@/components/home/WhyUsSection";
import ZonesBand from "@/components/shared/ZonesBand";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/shared/FAQSection";
import InternalLinks from "@/components/shared/InternalLinks";

const homeFaqs = [
  { q: "Comment réserver un taxi à Narbonne ?", a: "Vous pouvez réserver votre taxi à Narbonne par téléphone au 04 68 XX XX XX, disponible 24h/24 et 7j/7. Vous pouvez aussi nous contacter via notre formulaire en ligne. Nous confirmons votre réservation rapidement." },
  { q: "Quel est le prix d'un taxi à Narbonne ?", a: "Le tarif d'un taxi à Narbonne dépend de la distance parcourue et du type de trajet (jour/nuit, week-end). Nos courses sont au compteur homolagué. Pour les longues distances, nous proposons un devis gratuit sur demande." },
  { q: "Faites-vous le transport conventionné CPAM ?", a: "Oui, TAXI Narbonne Central est agréé par la CPAM pour le transport sanitaire conventionné. Nous assurons le transport vers les hôpitaux, cliniques et centres médicaux avec prise en charge par la Sécurité sociale." },
  { q: "Desservez-vous les aéroports depuis Narbonne ?", a: "Oui, nous assurons les transferts vers les aéroports de Béziers-Cap d'Agde, Carcassonne, Montpellier, Toulouse et même Barcelone. Réservation à l'avance recommandée." },
  { q: "Le taxi est-il disponible la nuit à Narbonne ?", a: "Absolument. Notre service de taxi à Narbonne fonctionne 24h/24, 7 jours sur 7, y compris les jours fériés et les nuits. Appelez-nous à tout moment." },
  { q: "Quelles villes desservez-vous autour de Narbonne ?", a: "Nous couvrons tout le Grand Narbonne : Gruissan, Coursan, Fleury-d'Aude, Sigean, Port-la-Nouvelle, Leucate, ainsi que Béziers, Carcassonne et toute l'Aude." },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={homeFaqs} />
      <InternalLinks
        title="Liens utiles"
        links={[
          { to: "/taxi-narbonne", label: "Taxi Narbonne" },
          { to: "/taxi-gare-narbonne", label: "Taxi Gare Narbonne" },
          { to: "/taxi-conventionne-narbonne", label: "Taxi Conventionné CPAM" },
          { to: "/taxi-aeroport-beziers", label: "Taxi Aéroport Béziers" },
          { to: "/taxi-carcassonne", label: "Taxi Carcassonne" },
          { to: "/taxi-gruissan", label: "Taxi Gruissan" },
          { to: "/contact", label: "Nous Contacter" },
        ]}
      />
    </>
  );
}