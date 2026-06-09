import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

const dict: Dict = {
  navHome: { es: "Inicio", en: "Home" },
  navP1: { es: "Propuesta 01", en: "Proposal 01" },
  navP2: { es: "Propuesta 02", en: "Proposal 02" },
  chooseTitle: { es: "Dos propuestas para PMCustom", en: "Two proposals for PMCustom" },
  chooseSub: {
    es: "Elige una dirección de diseño. Mismo contenido, dos universos visuales distintos.",
    en: "Pick a design direction. Same content, two distinct visual universes.",
  },
  p1Tag: { es: "Lab técnico · Oscuro · Monoespaciado", en: "Technical lab · Dark · Monospace" },
  p2Tag: { es: "Editorial · Vibrante · Cinético", en: "Editorial · Vibrant · Kinetic" },
  enter: { es: "Entrar", en: "Enter" },

  // shared content
  heroKicker: { es: "Tu Partner Tecnológico", en: "Your Technology Partner" },
  heroTitle: {
    es: "Sistemas embebidos que convierten datos en decisiones.",
    en: "Embedded systems that turn data into decisions.",
  },
  heroDesc: {
    es: "PMCustom es una empresa de tecnología especializada en el diseño y desarrollo de sistemas innovadores.",
    en: "PMCustom is a technology company specializing in the design and development of innovative systems.",
  },
  heroCta: { es: "Cuéntanos tu proyecto", en: "Tell us your project" },

  servicesKicker: { es: "Nuestros Servicios", en: "Our Services" },
  servicesIntro: {
    es: "Integramos, diseñamos, desarrollamos y desplegamos dispositivos tecnológicos automáticos complementados con interfaces web. Obtienes información procesada y precisa para gestionar tu negocio en tiempo real. Además, asesoramos en la admisibilidad de proyectos a CORFO, Ley I+D y fondos concursables.",
    en: "We integrate, design, develop and deploy automated devices paired with web interfaces. You get accurate, processed information to run your operations in real time. We also advise on CORFO, R&D Law and competitive-fund eligibility.",
  },

  iotTitle: { es: "Proyectos IoT", en: "IoT Projects" },
  iotSub: { es: "(Internet of Things)", en: "(Internet of Things)" },
  iotDesc: {
    es: "Innovamos con soluciones de Internet de las Cosas personalizadas, diseñadas para optimizar procesos y mejorar la conectividad de tus dispositivos, desde la integración de sensores hasta la automatización completa.",
    en: "Custom IoT solutions designed to optimize processes and improve device connectivity, from sensor integration to full automation.",
  },

  idTitle: { es: "I + D", en: "R + D" },
  idSub: { es: "Investigación y Desarrollo", en: "Research and Development" },
  idDesc: {
    es: "Mediante métodos científicos, llevamos a cabo procesos de investigación y desarrollo que generan nuevos conocimientos, permitiendo crear avances tecnológicos innovadores, viables y aplicables — con potencial de ser patentados.",
    en: "Through scientific methods we run R&D processes that generate new knowledge and enable innovative, viable and patentable technological advances.",
  },

  corfoKicker: { es: "Te asesoramos", en: "Advisory" },
  corfoTitle: {
    es: "Accede a financiamiento CORFO",
    en: "Access CORFO funding",
  },
  corfoDesc: {
    es: "PMCustom te ayuda a obtener recursos en CORFO a través de sus dos vías de financiamiento: Ley I+D y Fondos Concursables. Es un servicio integral en dos etapas.",
    en: "PMCustom helps you secure CORFO funding through its two channels: R&D Law and Competitive Funds. A two-stage end-to-end service.",
  },
  corfoStep1: { es: "1. Asesoramiento", en: "1. Advisory" },
  corfoStep1a: { es: "Formulación y postulación a fondos concursantes.", en: "Formulation and application to competitive funds." },
  corfoStep1b: { es: "Asesoramiento para acceder a la Ley I+D.", en: "Guidance to access the R&D Law." },
  corfoStep2: { es: "2. Desarrollo e Implementación", en: "2. Development and Implementation" },
  corfoStep2a: { es: "Ejecución de las etapas del proyecto, asegurando su éxito.", en: "Execution of every project stage, ensuring success." },

  cycleKicker: { es: "Planifica tu Futuro con PMCustom", en: "Plan your future with PMCustom" },
  cycleDesc: {
    es: "Instalamos sensores en terreno que recopilan datos sobre tus procesos productivos. Estos datos se envían a un módulo central en campo para un preprocesamiento inicial. Posteriormente, la información viaja a un servidor en la nube donde se organiza, tabula y filtra, entregando información cuantificada en una interfaz personalizada. Esta información te permite tomar decisiones estratégicas y acciones sobre tu proceso productivo.",
    en: "We deploy field sensors that collect data on your production processes. The data is sent to a central field module for initial preprocessing, then travels to a cloud server where it is organized, tabulated and filtered into a custom interface — so you can take strategic decisions over your operation.",
  },
  cycle1: { es: "Sensores en terreno", en: "Field sensors" },
  cycle2: { es: "Módulo central", en: "Central module" },
  cycle3: { es: "Servidor en la nube", en: "Cloud server" },
  cycle4: { es: "Interfaz personalizada", en: "Custom interface" },

  otherTitle: { es: "Otros Servicios", en: "Other Services" },
  otherA: { es: "Desarrollo de dispositivos", en: "Device development" },
  otherB: { es: "Dashboards de control web", en: "Web control dashboards" },
  otherC: { es: "Integraciones web", en: "Web integrations" },
  otherD: { es: "Servidores", en: "Servers" },

  contactKicker: { es: "Contacta a un Profesional", en: "Contact a professional" },
  contactTitle: { es: "Cuéntanos tu proyecto", en: "Tell us about your project" },
  contactDesc: {
    es: "Déjanos tus datos y te contactamos en menos de 24 horas hábiles.",
    en: "Leave your details and we'll get back to you within 24 business hours.",
  },
  fName: { es: "Nombre", en: "Name" },
  fEmail: { es: "Email", en: "Email" },
  fCompany: { es: "Empresa", en: "Company" },
  fMessage: { es: "Cuéntanos sobre tu proyecto", en: "Tell us about your project" },
  fSend: { es: "Enviar", en: "Send" },
  fSuccess: { es: "¡Gracias! Te contactaremos pronto.", en: "Thanks! We'll be in touch shortly." },

  footer: { es: "© PMCustom · Partner Tecnológico", en: "© PMCustom · Technology Partner" },
};

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
