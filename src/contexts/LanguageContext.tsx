import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "de" | "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.ecosystem": "Ecosystem",
    "nav.projects": "Projects",
    "nav.automation": "Automation",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "AI Byte Consult Ltd",
    "hero.subtitle": "The Future of Intelligent Business Systems",
    "hero.description": "A global technology company specializing in AI development and business automation. We design intelligent systems for enterprises, hospitality, healthcare, logistics, and research — empowering organizations worldwide through innovation.",
    "hero.cta": "Explore Ecosystem",
    
    // About
    "about.title": "About the Company",
    "about.p1": "AI Byte Consult Ltd. is a global technology company specializing in artificial intelligence and automation. We design intelligent systems that optimize operations, enhance decision-making, and accelerate digital transformation for organizations worldwide.",
    "about.p2": "Our AI-driven solutions serve diverse industries — from B2B and B2C enterprises to hospitality, healthcare, logistics, geology, and scientific research. We build scalable platforms that help businesses automate workflows, analyze data efficiently, and unlock new opportunities through intelligent innovation.",
    
    // Ecosystem
    "ecosystem.title": "Our Ecosystem",
    "ecosystem.subtitle": "A comprehensive suite of AI-powered solutions for the modern digital economy",
    "ecosystem.nics.title": "NICS AI Ecosystem",
    "ecosystem.nics.desc": "NICS AI Ecosystem is a unified artificial intelligence and blockchain infrastructure designed to connect industries, automate workflows, and enable cross-platform data synchronization. It combines decentralized logic, neural APIs, and tokenized access to deliver secure, scalable, and intelligent solutions for businesses, developers, and global communities.",
    "ecosystem.horeca.title": "NICS AI HoReCa",
    "ecosystem.horeca.desc": "NICS AI HoReCa is an advanced AI automation platform for restaurants, bars, and cafés. It provides White Label solutions with voice-driven interaction, smart analytics, order automation, and adaptive AI agents. Integrated with POS, CRM, and payment systems, it streamlines hospitality operations and enhances customer experience through intelligent automation.",
    "ecosystem.geologist.title": "NICS AI Geologist",
    "ecosystem.geologist.desc": "NICS AI Geologist is an analytical platform connecting geology, mining, and genealogy through intelligent data fusion. It processes exploration data, geological layers, and historical archives to identify resource potential and ancestral land correlations. The system supports sustainable exploration and digital heritage mapping with AI-powered insight.",
    "ecosystem.aquaterra.title": "AquaTerra World (Metaverse)",
    "ecosystem.aquaterra.desc": "AquaTerra World is an immersive AI-driven metaverse that unites virtual collaboration, entertainment, and business innovation. Within this 3D environment, users interact, learn, and trade using digital assets powered by AI and blockchain, creating a seamless connection between virtual experience and real-world economy.",
    "ecosystem.pantheon.title": "Pantheon of Eternals",
    "ecosystem.pantheon.desc": "Pantheon of Eternals AI is a revolutionary collection of interactive iNFT entities inspired by ancient mythology. Each Eternal—whether Zeus, Ra, or Odin—is reborn as an AI avatar with personality, dialogue, and adaptive learning. Merging divine archetypes with artificial intelligence, the Pantheon bridges storytelling, identity, and digital evolution.",
    "ecosystem.pride.title": "PRIDE Social Network",
    "ecosystem.pride.desc": "PRIDE Social Network is a decentralized Web3 community platform that rewards creativity and engagement with native tokens. It empowers users to share ideas, art, and experiences while earning from their social activity, building an inclusive and self-sustaining digital ecosystem for expression and collaboration.",
    
    // Projects
    "projects.title": "Our Work in Action",
    "projects.subtitle": "Real solutions delivering measurable results for forward-thinking businesses",
    "projects.restaurant.title": "Restaurant Chain Automation",
    "projects.restaurant.desc": "Smart ordering and AI customer service for TasteWave Bistro. Increased efficiency by 150%.",
    "projects.logistics.title": "Logistics Parser AI",
    "projects.logistics.desc": "Real-time supply chain tracking for CargoNova with predictive analytics.",
    "projects.hotel.title": "Hotel Booking Automation",
    "projects.hotel.desc": "WhatsApp chatbot integration for OceanView Resorts with seamless booking experience.",
    "projects.nft.title": "NFT Intelligence Framework",
    "projects.nft.desc": "AI-based artifact creation system for Eternals by Nixie with voice synthesis.",
    "projects.clinic.title": "Voice Assistant for Clinics",
    "projects.clinic.desc": "Appointment automation for MediCore Health with natural language processing.",
    "projects.retail.title": "Retail Analytics Platform",
    "projects.retail.desc": "AI-driven sales prediction for UrbanMarket with inventory optimization.",
    
    // Automation Constructor
    "constructor.title": "Automation Constructor",
    "constructor.subtitle": "Design your custom AI automation in minutes — choose your platform, model, and role.",
    "constructor.step1": "Select Platform",
    "constructor.step2": "Choose AI Model",
    "constructor.step3": "Define Your Task",
    "constructor.step4": "Select Automation Type",
    "constructor.step5": "Integration Setup",
    "constructor.step5.desc": "Choose how your AI automation connects with external systems — databases, APIs, or webhooks. If you're unsure, you can skip this step.",
    "constructor.step6": "Review & Submit",
    "constructor.task.placeholder": "Describe what your automation should do...",
    "constructor.contact.title": "Contact Information",
    "constructor.contact.desc": "Please enter at least one way to reach you:",
    "constructor.skip": "💡 Not sure? Choose later",
    "constructor.back": "Back",
    "constructor.next": "Next",
    "constructor.submit": "Submit Order",
    "constructor.success": "✅ Request sent successfully! We will contact you soon.",
    "constructor.error.platform": "Please select a platform",
    "constructor.error.model": "Please select an AI model",
    "constructor.error.task": "Please describe your task",
    "constructor.error.role": "Please select automation type",
    "constructor.error.contact": "Please enter at least one contact method.",
    
    // AI Automation Fix
    "aifix.title": "AI Automation Fix",
    "aifix.subtitle": "AI-Powered Business Automation for Global Companies",
    "aifix.intro1": "AI ByteConsult Ltd is a global technology company specializing in AI-powered business automation, intelligent systems, and advanced workflow automation for companies across enterprise, hospitality, healthcare, and service industries.",
    "aifix.intro2": "Our flagship solution, AI Automation Fix, is designed to automate one core business process quickly and efficiently, delivering measurable results within 1–3 business days.",
    "aifix.included": "What's Included",
    "aifix.included.1": "Quick automation audit (20–30 minutes)",
    "aifix.included.2": "Automation of one high-impact business process",
    "aifix.included.3": "AI-powered workflows and system integrations",
    "aifix.included.4": "Documentation and optional ongoing support",
    "aifix.benefits": "Business Benefits",
    "aifix.benefits.1": "Reduced manual workload",
    "aifix.benefits.2": "Faster lead and customer response times",
    "aifix.benefits.3": "Improved operational efficiency",
    "aifix.benefits.4": "Scalable AI-driven processes",
    "aifix.pricing": "Example Pricing",
    "aifix.pricing.audit": "Automation Audit",
    "aifix.pricing.impl": "Implementation",
    "aifix.pricing.support": "Monthly Support",
    "aifix.usecases": "Typical Automation Use Cases",
    "aifix.usecase.lead": "AI Lead Handler",
    "aifix.usecase.lead.desc": "Intake, qualification, routing",
    "aifix.usecase.sales": "AI Sales Assistant",
    "aifix.usecase.sales.desc": "Prospect qualification & support",
    "aifix.usecase.content": "AI Content Engine",
    "aifix.usecase.content.desc": "Automated content workflows",
    "aifix.usecase.support": "AI Support Agent",
    "aifix.usecase.support.desc": "24/7 customer assistance",
    "aifix.usecase.owner": "AI Owner Assistant",
    "aifix.usecase.owner.desc": "Internal summaries & insights",
    "aifix.howitworks": "How It Works",
    "aifix.step1": "Discovery call to understand your workflow",
    "aifix.step2": "Identification of the highest-impact automation",
    "aifix.step3": "Build and deployment using AI, APIs, and automation platforms",
    "aifix.step4": "Delivery, documentation, and optional support",
    "aifix.cta.title": "Ready to automate your business with AI?",
    "aifix.cta.subtitle": "Book an automation audit or contact our team to get started.",
    "aifix.cta.button": "Get Started Now",
    
    // Testimonials
    "testimonials.title": "Trusted by Innovators",
    "testimonials.subtitle": "See what our clients say about working with us",
    "testimonials.1.quote": "AI Byte Consult revolutionized our logistics operations. The real-time tracking system has saved us countless hours and improved our delivery accuracy by 95%.",
    "testimonials.1.author": "Maria Lopez",
    "testimonials.1.position": "CEO, CargoNova",
    "testimonials.2.quote": "Their automation system doubled our restaurant efficiency. We're now serving more customers with better accuracy and happier staff.",
    "testimonials.2.author": "David Chen",
    "testimonials.2.position": "Founder, TasteWave Bistro",
    "testimonials.3.quote": "Our NFT launch became truly intelligent thanks to their AI layer. The voice-enabled avatars created an entirely new level of engagement.",
    "testimonials.3.author": "Elena Rossi",
    "testimonials.3.position": "NFT Project Lead",
    
    // Team
    "team.title": "Meet the Founders",
    "team.subtitle": "The visionaries behind AI Byte Consult Ltd.",
    "team.alex.name": "Alexander Lunin",
    "team.alex.role": "Co-Founder & AI Architect",
    "team.alex.bio": "Leads AI architecture and Web3 integrations across the Nixie Ecosystem. Over 15 years of experience in cutting-edge technology.",
    "team.aleksandr.name": "Aleksandr Tochilov",
    "team.aleksandr.role": "Co-Founder & Product Director",
    "team.aleksandr.bio": "Focuses on automation systems, client solutions, and creative ecosystem design. Passionate about turning complex tech into simple solutions.",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's build the future of automation together",
    "contact.name": "Name",
    "contact.name.placeholder": "Your name",
    "contact.email": "Email",
    "contact.email.placeholder": "your.email@example.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Tell us about your project...",
    "contact.submit": "Send Message",
    "contact.success": "Message sent! We'll get back to you soon.",
    
    // Newsletter
    "newsletter.title": "Stay Updated",
    "newsletter.subtitle": "Join our innovation updates and be the first to know about new features and insights",
    "newsletter.placeholder": "your.email@example.com",
    "newsletter.submit": "Subscribe",
    "newsletter.success": "Thanks for subscribing to our newsletter!",
    
    // Footer
    "footer.description": "Intelligent Automation, Blockchain & Web3 Solutions — building the future of business technology within the NICS AI Ecosystem.",
    "footer.quicklinks": "Quick Links",
    "footer.home": "Home",
    "footer.ecosystem": "Ecosystem",
    "footer.projects": "Projects",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "AI Byte Consult Ltd. All rights reserved.",
  },
  de: {
    // Header
    "nav.home": "Startseite",
    "nav.ecosystem": "Ökosystem",
    "nav.projects": "Projekte",
    "nav.automation": "Automatisierung",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.title": "AI Byte Consult Ltd",
    "hero.subtitle": "Die Zukunft intelligenter Geschäftssysteme",
    "hero.description": "Ein globales Technologieunternehmen, spezialisiert auf KI-Entwicklung und Geschäftsautomatisierung. Wir entwickeln intelligente Systeme für Unternehmen, Gastgewerbe, Gesundheitswesen, Logistik und Forschung — und stärken Organisationen weltweit durch Innovation.",
    "hero.cta": "Ökosystem erkunden",
    
    // About
    "about.title": "Über das Unternehmen",
    "about.p1": "AI Byte Consult Ltd. ist ein globales Technologieunternehmen, das sich auf künstliche Intelligenz und Automatisierung spezialisiert hat. Wir entwickeln intelligente Systeme, die Abläufe optimieren, Entscheidungsfindung verbessern und die digitale Transformation für Organisationen weltweit beschleunigen.",
    "about.p2": "Unsere KI-gesteuerten Lösungen bedienen verschiedene Branchen — von B2B- und B2C-Unternehmen bis hin zu Gastgewerbe, Gesundheitswesen, Logistik, Geologie und wissenschaftlicher Forschung. Wir bauen skalierbare Plattformen, die Unternehmen helfen, Arbeitsabläufe zu automatisieren, Daten effizient zu analysieren und neue Möglichkeiten durch intelligente Innovation zu erschließen.",
    
    // Ecosystem
    "ecosystem.title": "Unser Ökosystem",
    "ecosystem.subtitle": "Eine umfassende Suite KI-gestützter Lösungen für die moderne digitale Wirtschaft",
    "ecosystem.nics.title": "NICS AI Ökosystem",
    "ecosystem.nics.desc": "Das NICS AI Ökosystem ist eine vereinheitlichte Infrastruktur für künstliche Intelligenz und Blockchain, die Branchen verbindet, Arbeitsabläufe automatisiert und plattformübergreifende Datensynchronisation ermöglicht.",
    "ecosystem.horeca.title": "NICS AI HoReCa",
    "ecosystem.horeca.desc": "NICS AI HoReCa ist eine fortschrittliche KI-Automatisierungsplattform für Restaurants, Bars und Cafés. Sie bietet White-Label-Lösungen mit sprachgesteuerten Interaktionen, intelligenten Analysen und Bestellautomatisierung.",
    "ecosystem.geologist.title": "NICS AI Geologe",
    "ecosystem.geologist.desc": "NICS AI Geologe ist eine analytische Plattform, die Geologie, Bergbau und Genealogie durch intelligente Datenfusion verbindet.",
    "ecosystem.aquaterra.title": "AquaTerra World (Metaverse)",
    "ecosystem.aquaterra.desc": "AquaTerra World ist ein immersives, KI-gesteuertes Metaverse, das virtuelle Zusammenarbeit, Unterhaltung und Geschäftsinnovation vereint.",
    "ecosystem.pantheon.title": "Pantheon der Ewigen",
    "ecosystem.pantheon.desc": "Pantheon of Eternals AI ist eine revolutionäre Sammlung interaktiver iNFT-Entitäten, inspiriert von antiker Mythologie.",
    "ecosystem.pride.title": "PRIDE Soziales Netzwerk",
    "ecosystem.pride.desc": "PRIDE Social Network ist eine dezentrale Web3-Community-Plattform, die Kreativität und Engagement mit nativen Token belohnt.",
    
    // Projects
    "projects.title": "Unsere Arbeit in Aktion",
    "projects.subtitle": "Echte Lösungen mit messbaren Ergebnissen für zukunftsorientierte Unternehmen",
    "projects.restaurant.title": "Restaurantketten-Automatisierung",
    "projects.restaurant.desc": "Intelligente Bestellung und KI-Kundenservice für TasteWave Bistro. Effizienzsteigerung um 150%.",
    "projects.logistics.title": "Logistik-Parser KI",
    "projects.logistics.desc": "Echtzeit-Lieferkettenverfolgung für CargoNova mit prädiktiver Analytik.",
    "projects.hotel.title": "Hotel-Buchungsautomatisierung",
    "projects.hotel.desc": "WhatsApp-Chatbot-Integration für OceanView Resorts mit nahtloser Buchungserfahrung.",
    "projects.nft.title": "NFT-Intelligenz-Framework",
    "projects.nft.desc": "KI-basiertes Artefakt-Erstellungssystem für Eternals by Nixie mit Sprachsynthese.",
    "projects.clinic.title": "Sprachassistent für Kliniken",
    "projects.clinic.desc": "Terminautomatisierung für MediCore Health mit natürlicher Sprachverarbeitung.",
    "projects.retail.title": "Einzelhandels-Analyseplattform",
    "projects.retail.desc": "KI-gesteuerte Verkaufsprognose für UrbanMarket mit Bestandsoptimierung.",
    
    // Automation Constructor
    "constructor.title": "Automatisierungs-Konfigurator",
    "constructor.subtitle": "Gestalten Sie Ihre individuelle KI-Automatisierung in Minuten — wählen Sie Plattform, Modell und Rolle.",
    "constructor.step1": "Plattform wählen",
    "constructor.step2": "KI-Modell wählen",
    "constructor.step3": "Aufgabe definieren",
    "constructor.step4": "Automatisierungstyp wählen",
    "constructor.step5": "Integrations-Setup",
    "constructor.step5.desc": "Wählen Sie, wie Ihre KI-Automatisierung mit externen Systemen verbunden wird — Datenbanken, APIs oder Webhooks.",
    "constructor.step6": "Überprüfen & Absenden",
    "constructor.task.placeholder": "Beschreiben Sie, was Ihre Automatisierung tun soll...",
    "constructor.contact.title": "Kontaktinformationen",
    "constructor.contact.desc": "Bitte geben Sie mindestens eine Kontaktmöglichkeit an:",
    "constructor.skip": "💡 Nicht sicher? Später wählen",
    "constructor.back": "Zurück",
    "constructor.next": "Weiter",
    "constructor.submit": "Bestellung absenden",
    "constructor.success": "✅ Anfrage erfolgreich gesendet! Wir werden Sie bald kontaktieren.",
    "constructor.error.platform": "Bitte wählen Sie eine Plattform",
    "constructor.error.model": "Bitte wählen Sie ein KI-Modell",
    "constructor.error.task": "Bitte beschreiben Sie Ihre Aufgabe",
    "constructor.error.role": "Bitte wählen Sie einen Automatisierungstyp",
    "constructor.error.contact": "Bitte geben Sie mindestens eine Kontaktmöglichkeit an.",
    
    // AI Automation Fix
    "aifix.title": "AI Automation Fix",
    "aifix.subtitle": "KI-gestützte Geschäftsautomatisierung für globale Unternehmen",
    "aifix.intro1": "AI ByteConsult Ltd ist ein globales Technologieunternehmen, das sich auf KI-gestützte Geschäftsautomatisierung, intelligente Systeme und fortschrittliche Workflow-Automatisierung für Unternehmen in den Bereichen Enterprise, Gastgewerbe, Gesundheitswesen und Dienstleistungen spezialisiert hat.",
    "aifix.intro2": "Unsere Flaggschiff-Lösung, AI Automation Fix, ist darauf ausgelegt, einen Kerngeschäftsprozess schnell und effizient zu automatisieren und messbare Ergebnisse innerhalb von 1–3 Werktagen zu liefern.",
    "aifix.included": "Was enthalten ist",
    "aifix.included.1": "Schnelles Automatisierungs-Audit (20–30 Minuten)",
    "aifix.included.2": "Automatisierung eines wirkungsvollen Geschäftsprozesses",
    "aifix.included.3": "KI-gestützte Workflows und Systemintegrationen",
    "aifix.included.4": "Dokumentation und optionale laufende Unterstützung",
    "aifix.benefits": "Geschäftsvorteile",
    "aifix.benefits.1": "Reduzierte manuelle Arbeitslast",
    "aifix.benefits.2": "Schnellere Reaktionszeiten für Leads und Kunden",
    "aifix.benefits.3": "Verbesserte betriebliche Effizienz",
    "aifix.benefits.4": "Skalierbare KI-gesteuerte Prozesse",
    "aifix.pricing": "Beispielpreise",
    "aifix.pricing.audit": "Automatisierungs-Audit",
    "aifix.pricing.impl": "Implementierung",
    "aifix.pricing.support": "Monatlicher Support",
    "aifix.usecases": "Typische Automatisierungsanwendungen",
    "aifix.usecase.lead": "KI-Lead-Handler",
    "aifix.usecase.lead.desc": "Aufnahme, Qualifizierung, Weiterleitung",
    "aifix.usecase.sales": "KI-Verkaufsassistent",
    "aifix.usecase.sales.desc": "Interessenten-Qualifizierung & Support",
    "aifix.usecase.content": "KI-Content-Engine",
    "aifix.usecase.content.desc": "Automatisierte Content-Workflows",
    "aifix.usecase.support": "KI-Support-Agent",
    "aifix.usecase.support.desc": "24/7 Kundenbetreuung",
    "aifix.usecase.owner": "KI-Owner-Assistent",
    "aifix.usecase.owner.desc": "Interne Zusammenfassungen & Einblicke",
    "aifix.howitworks": "So funktioniert es",
    "aifix.step1": "Entdeckungsgespräch zum Verständnis Ihres Workflows",
    "aifix.step2": "Identifikation der wirkungsvollsten Automatisierung",
    "aifix.step3": "Aufbau und Bereitstellung mit KI, APIs und Automatisierungsplattformen",
    "aifix.step4": "Lieferung, Dokumentation und optionaler Support",
    "aifix.cta.title": "Bereit, Ihr Geschäft mit KI zu automatisieren?",
    "aifix.cta.subtitle": "Buchen Sie ein Automatisierungs-Audit oder kontaktieren Sie unser Team.",
    "aifix.cta.button": "Jetzt starten",
    
    // Testimonials
    "testimonials.title": "Von Innovatoren vertraut",
    "testimonials.subtitle": "Erfahren Sie, was unsere Kunden über die Zusammenarbeit mit uns sagen",
    "testimonials.1.quote": "AI Byte Consult hat unsere Logistikoperationen revolutioniert. Das Echtzeit-Tracking-System hat uns unzählige Stunden gespart und unsere Liefergenauigkeit um 95% verbessert.",
    "testimonials.1.author": "Maria Lopez",
    "testimonials.1.position": "CEO, CargoNova",
    "testimonials.2.quote": "Ihr Automatisierungssystem hat die Effizienz unseres Restaurants verdoppelt. Wir bedienen jetzt mehr Kunden mit besserer Genauigkeit und zufriedenerem Personal.",
    "testimonials.2.author": "David Chen",
    "testimonials.2.position": "Gründer, TasteWave Bistro",
    "testimonials.3.quote": "Unser NFT-Launch wurde dank ihrer KI-Schicht wirklich intelligent. Die sprachgesteuerten Avatare schufen ein völlig neues Maß an Engagement.",
    "testimonials.3.author": "Elena Rossi",
    "testimonials.3.position": "NFT-Projektleiterin",
    
    // Team
    "team.title": "Lernen Sie die Gründer kennen",
    "team.subtitle": "Die Visionäre hinter AI Byte Consult Ltd.",
    "team.alex.name": "Alexander Lunin",
    "team.alex.role": "Mitgründer & KI-Architekt",
    "team.alex.bio": "Leitet die KI-Architektur und Web3-Integrationen im gesamten Nixie-Ökosystem. Über 15 Jahre Erfahrung in Spitzentechnologie.",
    "team.aleksandr.name": "Aleksandr Tochilov",
    "team.aleksandr.role": "Mitgründer & Produktdirektor",
    "team.aleksandr.bio": "Konzentriert sich auf Automatisierungssysteme, Kundenlösungen und kreatives Ökosystem-Design. Leidenschaftlich daran interessiert, komplexe Technologie in einfache Lösungen umzuwandeln.",
    
    // Contact
    "contact.title": "Kontakt aufnehmen",
    "contact.subtitle": "Lassen Sie uns gemeinsam die Zukunft der Automatisierung gestalten",
    "contact.name": "Name",
    "contact.name.placeholder": "Ihr Name",
    "contact.email": "E-Mail",
    "contact.email.placeholder": "ihre.email@beispiel.de",
    "contact.message": "Nachricht",
    "contact.message.placeholder": "Erzählen Sie uns von Ihrem Projekt...",
    "contact.submit": "Nachricht senden",
    "contact.success": "Nachricht gesendet! Wir melden uns bald bei Ihnen.",
    
    // Newsletter
    "newsletter.title": "Bleiben Sie informiert",
    "newsletter.subtitle": "Abonnieren Sie unsere Innovations-Updates und erfahren Sie als Erster von neuen Funktionen und Einblicken",
    "newsletter.placeholder": "ihre.email@beispiel.de",
    "newsletter.submit": "Abonnieren",
    "newsletter.success": "Danke für Ihre Newsletter-Anmeldung!",
    
    // Footer
    "footer.description": "Intelligente Automatisierung, Blockchain & Web3-Lösungen — wir bauen die Zukunft der Geschäftstechnologie im NICS AI Ökosystem.",
    "footer.quicklinks": "Schnelllinks",
    "footer.home": "Startseite",
    "footer.ecosystem": "Ökosystem",
    "footer.projects": "Projekte",
    "footer.contact": "Kontakt",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
    "footer.copyright": "AI Byte Consult Ltd. Alle Rechte vorbehalten.",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.ecosystem": "Écosystème",
    "nav.projects": "Projets",
    "nav.automation": "Automatisation",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "AI Byte Consult Ltd",
    "hero.subtitle": "L'avenir des systèmes d'entreprise intelligents",
    "hero.description": "Une entreprise technologique mondiale spécialisée dans le développement de l'IA et l'automatisation des entreprises. Nous concevons des systèmes intelligents pour les entreprises, l'hôtellerie, la santé, la logistique et la recherche — permettant aux organisations du monde entier d'innover.",
    "hero.cta": "Explorer l'écosystème",
    
    // About
    "about.title": "À propos de l'entreprise",
    "about.p1": "AI Byte Consult Ltd. est une entreprise technologique mondiale spécialisée dans l'intelligence artificielle et l'automatisation. Nous concevons des systèmes intelligents qui optimisent les opérations, améliorent la prise de décision et accélèrent la transformation numérique pour les organisations du monde entier.",
    "about.p2": "Nos solutions basées sur l'IA servent diverses industries — des entreprises B2B et B2C à l'hôtellerie, la santé, la logistique, la géologie et la recherche scientifique. Nous construisons des plateformes évolutives qui aident les entreprises à automatiser les flux de travail, analyser efficacement les données et débloquer de nouvelles opportunités grâce à l'innovation intelligente.",
    
    // Ecosystem
    "ecosystem.title": "Notre écosystème",
    "ecosystem.subtitle": "Une suite complète de solutions basées sur l'IA pour l'économie numérique moderne",
    "ecosystem.nics.title": "Écosystème NICS AI",
    "ecosystem.nics.desc": "L'écosystème NICS AI est une infrastructure unifiée d'intelligence artificielle et de blockchain conçue pour connecter les industries, automatiser les flux de travail et permettre la synchronisation des données inter-plateformes.",
    "ecosystem.horeca.title": "NICS AI HoReCa",
    "ecosystem.horeca.desc": "NICS AI HoReCa est une plateforme d'automatisation IA avancée pour les restaurants, bars et cafés. Elle fournit des solutions en marque blanche avec interaction vocale, analyses intelligentes et automatisation des commandes.",
    "ecosystem.geologist.title": "NICS AI Géologue",
    "ecosystem.geologist.desc": "NICS AI Géologue est une plateforme analytique connectant la géologie, l'exploitation minière et la généalogie par la fusion intelligente des données.",
    "ecosystem.aquaterra.title": "AquaTerra World (Métavers)",
    "ecosystem.aquaterra.desc": "AquaTerra World est un métavers immersif piloté par l'IA qui unit collaboration virtuelle, divertissement et innovation commerciale.",
    "ecosystem.pantheon.title": "Panthéon des Éternels",
    "ecosystem.pantheon.desc": "Pantheon of Eternals AI est une collection révolutionnaire d'entités iNFT interactives inspirées de la mythologie ancienne.",
    "ecosystem.pride.title": "Réseau social PRIDE",
    "ecosystem.pride.desc": "PRIDE Social Network est une plateforme communautaire Web3 décentralisée qui récompense la créativité et l'engagement avec des tokens natifs.",
    
    // Projects
    "projects.title": "Notre travail en action",
    "projects.subtitle": "De vraies solutions offrant des résultats mesurables pour les entreprises avant-gardistes",
    "projects.restaurant.title": "Automatisation de chaîne de restaurants",
    "projects.restaurant.desc": "Commande intelligente et service client IA pour TasteWave Bistro. Efficacité augmentée de 150%.",
    "projects.logistics.title": "IA Parser Logistique",
    "projects.logistics.desc": "Suivi de chaîne d'approvisionnement en temps réel pour CargoNova avec analyses prédictives.",
    "projects.hotel.title": "Automatisation de réservation hôtelière",
    "projects.hotel.desc": "Intégration de chatbot WhatsApp pour OceanView Resorts avec expérience de réservation fluide.",
    "projects.nft.title": "Framework d'intelligence NFT",
    "projects.nft.desc": "Système de création d'artefacts basé sur l'IA pour Eternals by Nixie avec synthèse vocale.",
    "projects.clinic.title": "Assistant vocal pour cliniques",
    "projects.clinic.desc": "Automatisation de rendez-vous pour MediCore Health avec traitement du langage naturel.",
    "projects.retail.title": "Plateforme d'analyse retail",
    "projects.retail.desc": "Prédiction des ventes pilotée par l'IA pour UrbanMarket avec optimisation des stocks.",
    
    // Automation Constructor
    "constructor.title": "Constructeur d'automatisation",
    "constructor.subtitle": "Concevez votre automatisation IA personnalisée en minutes — choisissez votre plateforme, modèle et rôle.",
    "constructor.step1": "Sélectionner la plateforme",
    "constructor.step2": "Choisir le modèle IA",
    "constructor.step3": "Définir votre tâche",
    "constructor.step4": "Sélectionner le type d'automatisation",
    "constructor.step5": "Configuration d'intégration",
    "constructor.step5.desc": "Choisissez comment votre automatisation IA se connecte aux systèmes externes — bases de données, API ou webhooks.",
    "constructor.step6": "Vérifier & Soumettre",
    "constructor.task.placeholder": "Décrivez ce que votre automatisation doit faire...",
    "constructor.contact.title": "Coordonnées",
    "constructor.contact.desc": "Veuillez entrer au moins un moyen de vous contacter :",
    "constructor.skip": "💡 Pas sûr ? Choisissez plus tard",
    "constructor.back": "Retour",
    "constructor.next": "Suivant",
    "constructor.submit": "Soumettre la commande",
    "constructor.success": "✅ Demande envoyée avec succès ! Nous vous contacterons bientôt.",
    "constructor.error.platform": "Veuillez sélectionner une plateforme",
    "constructor.error.model": "Veuillez sélectionner un modèle IA",
    "constructor.error.task": "Veuillez décrire votre tâche",
    "constructor.error.role": "Veuillez sélectionner un type d'automatisation",
    "constructor.error.contact": "Veuillez entrer au moins une méthode de contact.",
    
    // AI Automation Fix
    "aifix.title": "AI Automation Fix",
    "aifix.subtitle": "Automatisation d'entreprise alimentée par l'IA pour les entreprises mondiales",
    "aifix.intro1": "AI ByteConsult Ltd est une entreprise technologique mondiale spécialisée dans l'automatisation d'entreprise alimentée par l'IA, les systèmes intelligents et l'automatisation avancée des flux de travail pour les entreprises des secteurs de l'entreprise, de l'hôtellerie, de la santé et des services.",
    "aifix.intro2": "Notre solution phare, AI Automation Fix, est conçue pour automatiser un processus métier principal rapidement et efficacement, offrant des résultats mesurables en 1 à 3 jours ouvrables.",
    "aifix.included": "Ce qui est inclus",
    "aifix.included.1": "Audit d'automatisation rapide (20-30 minutes)",
    "aifix.included.2": "Automatisation d'un processus métier à fort impact",
    "aifix.included.3": "Flux de travail alimentés par l'IA et intégrations système",
    "aifix.included.4": "Documentation et support continu optionnel",
    "aifix.benefits": "Avantages commerciaux",
    "aifix.benefits.1": "Réduction de la charge de travail manuelle",
    "aifix.benefits.2": "Temps de réponse plus rapides pour les leads et clients",
    "aifix.benefits.3": "Amélioration de l'efficacité opérationnelle",
    "aifix.benefits.4": "Processus évolutifs pilotés par l'IA",
    "aifix.pricing": "Exemples de tarification",
    "aifix.pricing.audit": "Audit d'automatisation",
    "aifix.pricing.impl": "Implémentation",
    "aifix.pricing.support": "Support mensuel",
    "aifix.usecases": "Cas d'utilisation typiques",
    "aifix.usecase.lead": "Gestionnaire de leads IA",
    "aifix.usecase.lead.desc": "Réception, qualification, routage",
    "aifix.usecase.sales": "Assistant commercial IA",
    "aifix.usecase.sales.desc": "Qualification et support des prospects",
    "aifix.usecase.content": "Moteur de contenu IA",
    "aifix.usecase.content.desc": "Flux de travail de contenu automatisés",
    "aifix.usecase.support": "Agent de support IA",
    "aifix.usecase.support.desc": "Assistance client 24/7",
    "aifix.usecase.owner": "Assistant propriétaire IA",
    "aifix.usecase.owner.desc": "Résumés et insights internes",
    "aifix.howitworks": "Comment ça marche",
    "aifix.step1": "Appel de découverte pour comprendre votre flux de travail",
    "aifix.step2": "Identification de l'automatisation à plus fort impact",
    "aifix.step3": "Construction et déploiement avec IA, API et plateformes d'automatisation",
    "aifix.step4": "Livraison, documentation et support optionnel",
    "aifix.cta.title": "Prêt à automatiser votre entreprise avec l'IA ?",
    "aifix.cta.subtitle": "Réservez un audit d'automatisation ou contactez notre équipe pour commencer.",
    "aifix.cta.button": "Commencer maintenant",
    
    // Testimonials
    "testimonials.title": "Approuvé par les innovateurs",
    "testimonials.subtitle": "Découvrez ce que nos clients disent de leur collaboration avec nous",
    "testimonials.1.quote": "AI Byte Consult a révolutionné nos opérations logistiques. Le système de suivi en temps réel nous a fait gagner d'innombrables heures et a amélioré notre précision de livraison de 95%.",
    "testimonials.1.author": "Maria Lopez",
    "testimonials.1.position": "PDG, CargoNova",
    "testimonials.2.quote": "Leur système d'automatisation a doublé l'efficacité de notre restaurant. Nous servons maintenant plus de clients avec une meilleure précision et un personnel plus heureux.",
    "testimonials.2.author": "David Chen",
    "testimonials.2.position": "Fondateur, TasteWave Bistro",
    "testimonials.3.quote": "Notre lancement NFT est devenu vraiment intelligent grâce à leur couche IA. Les avatars vocaux ont créé un niveau d'engagement entièrement nouveau.",
    "testimonials.3.author": "Elena Rossi",
    "testimonials.3.position": "Chef de projet NFT",
    
    // Team
    "team.title": "Rencontrez les fondateurs",
    "team.subtitle": "Les visionnaires derrière AI Byte Consult Ltd.",
    "team.alex.name": "Alexander Lunin",
    "team.alex.role": "Co-fondateur & Architecte IA",
    "team.alex.bio": "Dirige l'architecture IA et les intégrations Web3 à travers l'écosystème Nixie. Plus de 15 ans d'expérience dans la technologie de pointe.",
    "team.aleksandr.name": "Aleksandr Tochilov",
    "team.aleksandr.role": "Co-fondateur & Directeur produit",
    "team.aleksandr.bio": "Se concentre sur les systèmes d'automatisation, les solutions clients et la conception d'écosystèmes créatifs. Passionné par la transformation de technologies complexes en solutions simples.",
    
    // Contact
    "contact.title": "Nous contacter",
    "contact.subtitle": "Construisons ensemble l'avenir de l'automatisation",
    "contact.name": "Nom",
    "contact.name.placeholder": "Votre nom",
    "contact.email": "Email",
    "contact.email.placeholder": "votre.email@exemple.fr",
    "contact.message": "Message",
    "contact.message.placeholder": "Parlez-nous de votre projet...",
    "contact.submit": "Envoyer le message",
    "contact.success": "Message envoyé ! Nous vous répondrons bientôt.",
    
    // Newsletter
    "newsletter.title": "Restez informé",
    "newsletter.subtitle": "Rejoignez nos mises à jour d'innovation et soyez le premier à connaître les nouvelles fonctionnalités et insights",
    "newsletter.placeholder": "votre.email@exemple.fr",
    "newsletter.submit": "S'abonner",
    "newsletter.success": "Merci de vous être abonné à notre newsletter !",
    
    // Footer
    "footer.description": "Automatisation intelligente, solutions Blockchain & Web3 — construire l'avenir de la technologie d'entreprise au sein de l'écosystème NICS AI.",
    "footer.quicklinks": "Liens rapides",
    "footer.home": "Accueil",
    "footer.ecosystem": "Écosystème",
    "footer.projects": "Projets",
    "footer.contact": "Contact",
    "footer.legal": "Légal",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.copyright": "AI Byte Consult Ltd. Tous droits réservés.",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.ecosystem": "النظام البيئي",
    "nav.projects": "المشاريع",
    "nav.automation": "الأتمتة",
    "nav.contact": "اتصل بنا",
    
    // Hero
    "hero.title": "AI Byte Consult Ltd",
    "hero.subtitle": "مستقبل أنظمة الأعمال الذكية",
    "hero.description": "شركة تكنولوجيا عالمية متخصصة في تطوير الذكاء الاصطناعي وأتمتة الأعمال. نصمم أنظمة ذكية للمؤسسات والضيافة والرعاية الصحية واللوجستيات والبحث — لتمكين المؤسسات في جميع أنحاء العالم من خلال الابتكار.",
    "hero.cta": "استكشف النظام البيئي",
    
    // About
    "about.title": "عن الشركة",
    "about.p1": "AI Byte Consult Ltd. هي شركة تكنولوجيا عالمية متخصصة في الذكاء الاصطناعي والأتمتة. نصمم أنظمة ذكية تحسن العمليات وتعزز صنع القرار وتسرع التحول الرقمي للمؤسسات في جميع أنحاء العالم.",
    "about.p2": "تخدم حلولنا المدعومة بالذكاء الاصطناعي صناعات متنوعة — من مؤسسات B2B وB2C إلى الضيافة والرعاية الصحية واللوجستيات والجيولوجيا والبحث العلمي. نبني منصات قابلة للتطوير تساعد الشركات على أتمتة سير العمل وتحليل البيانات بكفاءة وفتح فرص جديدة من خلال الابتكار الذكي.",
    
    // Ecosystem
    "ecosystem.title": "نظامنا البيئي",
    "ecosystem.subtitle": "مجموعة شاملة من الحلول المدعومة بالذكاء الاصطناعي للاقتصاد الرقمي الحديث",
    "ecosystem.nics.title": "نظام NICS AI البيئي",
    "ecosystem.nics.desc": "نظام NICS AI البيئي هو بنية تحتية موحدة للذكاء الاصطناعي والبلوكتشين مصممة لربط الصناعات وأتمتة سير العمل وتمكين مزامنة البيانات عبر المنصات.",
    "ecosystem.horeca.title": "NICS AI HoReCa",
    "ecosystem.horeca.desc": "NICS AI HoReCa هي منصة أتمتة ذكاء اصطناعي متقدمة للمطاعم والبارات والمقاهي. توفر حلول العلامة البيضاء مع التفاعل الصوتي والتحليلات الذكية وأتمتة الطلبات.",
    "ecosystem.geologist.title": "NICS AI الجيولوجي",
    "ecosystem.geologist.desc": "NICS AI الجيولوجي هي منصة تحليلية تربط الجيولوجيا والتعدين وعلم الأنساب من خلال دمج البيانات الذكي.",
    "ecosystem.aquaterra.title": "عالم AquaTerra (ميتافيرس)",
    "ecosystem.aquaterra.desc": "عالم AquaTerra هو ميتافيرس غامر مدفوع بالذكاء الاصطناعي يوحد التعاون الافتراضي والترفيه والابتكار التجاري.",
    "ecosystem.pantheon.title": "بانثيون الخالدين",
    "ecosystem.pantheon.desc": "Pantheon of Eternals AI هي مجموعة ثورية من كيانات iNFT التفاعلية المستوحاة من الأساطير القديمة.",
    "ecosystem.pride.title": "شبكة PRIDE الاجتماعية",
    "ecosystem.pride.desc": "شبكة PRIDE الاجتماعية هي منصة مجتمع Web3 لامركزية تكافئ الإبداع والمشاركة برموز أصلية.",
    
    // Projects
    "projects.title": "عملنا في العمل",
    "projects.subtitle": "حلول حقيقية تقدم نتائج قابلة للقياس للشركات ذات التفكير المستقبلي",
    "projects.restaurant.title": "أتمتة سلسلة المطاعم",
    "projects.restaurant.desc": "طلب ذكي وخدمة عملاء بالذكاء الاصطناعي لـ TasteWave Bistro. زيادة الكفاءة بنسبة 150%.",
    "projects.logistics.title": "الذكاء الاصطناعي لتحليل اللوجستيات",
    "projects.logistics.desc": "تتبع سلسلة التوريد في الوقت الفعلي لـ CargoNova مع التحليلات التنبؤية.",
    "projects.hotel.title": "أتمتة حجز الفنادق",
    "projects.hotel.desc": "تكامل روبوت دردشة واتساب لـ OceanView Resorts مع تجربة حجز سلسة.",
    "projects.nft.title": "إطار ذكاء NFT",
    "projects.nft.desc": "نظام إنشاء قطع أثرية قائم على الذكاء الاصطناعي لـ Eternals by Nixie مع تركيب الصوت.",
    "projects.clinic.title": "مساعد صوتي للعيادات",
    "projects.clinic.desc": "أتمتة المواعيد لـ MediCore Health مع معالجة اللغة الطبيعية.",
    "projects.retail.title": "منصة تحليلات التجزئة",
    "projects.retail.desc": "توقع مبيعات مدفوع بالذكاء الاصطناعي لـ UrbanMarket مع تحسين المخزون.",
    
    // Automation Constructor
    "constructor.title": "منشئ الأتمتة",
    "constructor.subtitle": "صمم أتمتة الذكاء الاصطناعي المخصصة في دقائق — اختر منصتك ونموذجك ودورك.",
    "constructor.step1": "اختر المنصة",
    "constructor.step2": "اختر نموذج الذكاء الاصطناعي",
    "constructor.step3": "حدد مهمتك",
    "constructor.step4": "اختر نوع الأتمتة",
    "constructor.step5": "إعداد التكامل",
    "constructor.step5.desc": "اختر كيف تتصل أتمتة الذكاء الاصطناعي الخاصة بك بالأنظمة الخارجية — قواعد البيانات أو واجهات برمجة التطبيقات أو الويب هوك.",
    "constructor.step6": "مراجعة وإرسال",
    "constructor.task.placeholder": "صف ما يجب أن تفعله أتمتتك...",
    "constructor.contact.title": "معلومات الاتصال",
    "constructor.contact.desc": "يرجى إدخال طريقة واحدة على الأقل للوصول إليك:",
    "constructor.skip": "💡 غير متأكد؟ اختر لاحقاً",
    "constructor.back": "رجوع",
    "constructor.next": "التالي",
    "constructor.submit": "إرسال الطلب",
    "constructor.success": "✅ تم إرسال الطلب بنجاح! سنتصل بك قريباً.",
    "constructor.error.platform": "يرجى اختيار منصة",
    "constructor.error.model": "يرجى اختيار نموذج ذكاء اصطناعي",
    "constructor.error.task": "يرجى وصف مهمتك",
    "constructor.error.role": "يرجى اختيار نوع الأتمتة",
    "constructor.error.contact": "يرجى إدخال طريقة اتصال واحدة على الأقل.",
    
    // AI Automation Fix
    "aifix.title": "AI Automation Fix",
    "aifix.subtitle": "أتمتة الأعمال المدعومة بالذكاء الاصطناعي للشركات العالمية",
    "aifix.intro1": "AI ByteConsult Ltd هي شركة تكنولوجيا عالمية متخصصة في أتمتة الأعمال المدعومة بالذكاء الاصطناعي والأنظمة الذكية وأتمتة سير العمل المتقدمة للشركات عبر قطاعات المؤسسات والضيافة والرعاية الصحية والخدمات.",
    "aifix.intro2": "حلنا الرائد، AI Automation Fix، مصمم لأتمتة عملية تجارية أساسية واحدة بسرعة وكفاءة، مع تقديم نتائج قابلة للقياس في غضون 1-3 أيام عمل.",
    "aifix.included": "ما هو متضمن",
    "aifix.included.1": "تدقيق أتمتة سريع (20-30 دقيقة)",
    "aifix.included.2": "أتمتة عملية تجارية عالية التأثير",
    "aifix.included.3": "سير عمل مدعوم بالذكاء الاصطناعي وتكاملات النظام",
    "aifix.included.4": "التوثيق والدعم المستمر الاختياري",
    "aifix.benefits": "الفوائد التجارية",
    "aifix.benefits.1": "تقليل عبء العمل اليدوي",
    "aifix.benefits.2": "أوقات استجابة أسرع للعملاء المحتملين والعملاء",
    "aifix.benefits.3": "تحسين الكفاءة التشغيلية",
    "aifix.benefits.4": "عمليات قابلة للتطوير مدفوعة بالذكاء الاصطناعي",
    "aifix.pricing": "أمثلة على الأسعار",
    "aifix.pricing.audit": "تدقيق الأتمتة",
    "aifix.pricing.impl": "التنفيذ",
    "aifix.pricing.support": "الدعم الشهري",
    "aifix.usecases": "حالات الاستخدام النموذجية",
    "aifix.usecase.lead": "معالج العملاء المحتملين بالذكاء الاصطناعي",
    "aifix.usecase.lead.desc": "الاستقبال والتأهيل والتوجيه",
    "aifix.usecase.sales": "مساعد المبيعات بالذكاء الاصطناعي",
    "aifix.usecase.sales.desc": "تأهيل ودعم العملاء المحتملين",
    "aifix.usecase.content": "محرك المحتوى بالذكاء الاصطناعي",
    "aifix.usecase.content.desc": "سير عمل المحتوى الآلي",
    "aifix.usecase.support": "وكيل الدعم بالذكاء الاصطناعي",
    "aifix.usecase.support.desc": "مساعدة العملاء على مدار الساعة",
    "aifix.usecase.owner": "مساعد المالك بالذكاء الاصطناعي",
    "aifix.usecase.owner.desc": "ملخصات ورؤى داخلية",
    "aifix.howitworks": "كيف يعمل",
    "aifix.step1": "مكالمة اكتشاف لفهم سير عملك",
    "aifix.step2": "تحديد الأتمتة ذات التأثير الأعلى",
    "aifix.step3": "البناء والنشر باستخدام الذكاء الاصطناعي وواجهات برمجة التطبيقات ومنصات الأتمتة",
    "aifix.step4": "التسليم والتوثيق والدعم الاختياري",
    "aifix.cta.title": "هل أنت مستعد لأتمتة عملك بالذكاء الاصطناعي؟",
    "aifix.cta.subtitle": "احجز تدقيق أتمتة أو اتصل بفريقنا للبدء.",
    "aifix.cta.button": "ابدأ الآن",
    
    // Testimonials
    "testimonials.title": "موثوق به من قبل المبتكرين",
    "testimonials.subtitle": "اطلع على ما يقوله عملاؤنا عن العمل معنا",
    "testimonials.1.quote": "أحدثت AI Byte Consult ثورة في عملياتنا اللوجستية. وفر لنا نظام التتبع في الوقت الفعلي ساعات لا حصر لها وحسّن دقة التسليم لدينا بنسبة 95%.",
    "testimonials.1.author": "ماريا لوبيز",
    "testimonials.1.position": "الرئيس التنفيذي، CargoNova",
    "testimonials.2.quote": "ضاعف نظام الأتمتة الخاص بهم كفاءة مطعمنا. نحن الآن نخدم المزيد من العملاء بدقة أفضل وموظفين أسعد.",
    "testimonials.2.author": "ديفيد تشين",
    "testimonials.2.position": "مؤسس، TasteWave Bistro",
    "testimonials.3.quote": "أصبح إطلاق NFT الخاص بنا ذكياً حقاً بفضل طبقة الذكاء الاصطناعي الخاصة بهم. خلقت الأفاتار المفعّلة بالصوت مستوى جديداً تماماً من المشاركة.",
    "testimonials.3.author": "إيلينا روسي",
    "testimonials.3.position": "قائدة مشروع NFT",
    
    // Team
    "team.title": "تعرف على المؤسسين",
    "team.subtitle": "أصحاب الرؤية وراء AI Byte Consult Ltd.",
    "team.alex.name": "ألكسندر لونين",
    "team.alex.role": "مؤسس مشارك ومهندس ذكاء اصطناعي",
    "team.alex.bio": "يقود هندسة الذكاء الاصطناعي وتكاملات Web3 عبر نظام Nixie البيئي. أكثر من 15 عاماً من الخبرة في التكنولوجيا المتطورة.",
    "team.aleksandr.name": "ألكسندر توتشيلوف",
    "team.aleksandr.role": "مؤسس مشارك ومدير المنتج",
    "team.aleksandr.bio": "يركز على أنظمة الأتمتة وحلول العملاء وتصميم النظام البيئي الإبداعي. شغوف بتحويل التكنولوجيا المعقدة إلى حلول بسيطة.",
    
    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "لنبني معاً مستقبل الأتمتة",
    "contact.name": "الاسم",
    "contact.name.placeholder": "اسمك",
    "contact.email": "البريد الإلكتروني",
    "contact.email.placeholder": "بريدك@مثال.com",
    "contact.message": "الرسالة",
    "contact.message.placeholder": "أخبرنا عن مشروعك...",
    "contact.submit": "إرسال الرسالة",
    "contact.success": "تم إرسال الرسالة! سنرد عليك قريباً.",
    
    // Newsletter
    "newsletter.title": "ابق على اطلاع",
    "newsletter.subtitle": "انضم إلى تحديثات الابتكار لدينا وكن أول من يعرف عن الميزات والرؤى الجديدة",
    "newsletter.placeholder": "بريدك@مثال.com",
    "newsletter.submit": "اشترك",
    "newsletter.success": "شكراً لاشتراكك في نشرتنا الإخبارية!",
    
    // Footer
    "footer.description": "أتمتة ذكية وحلول البلوكتشين و Web3 — نبني مستقبل تكنولوجيا الأعمال ضمن نظام NICS AI البيئي.",
    "footer.quicklinks": "روابط سريعة",
    "footer.home": "الرئيسية",
    "footer.ecosystem": "النظام البيئي",
    "footer.projects": "المشاريع",
    "footer.contact": "اتصل بنا",
    "footer.legal": "قانوني",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.copyright": "AI Byte Consult Ltd. جميع الحقوق محفوظة.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
