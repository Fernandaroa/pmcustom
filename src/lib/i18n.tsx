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
  heroKicker: { es: "Tu Partner Tecnológico en Sistemas Embebidos e IoT", en: "Your Embedded Systems & IoT Partner" },
  heroTitle: {
    es: "Somos tu Partner Tecnológico en Sistemas Embebidos e IoT.",
    en: "Your Technology Partner in Embedded Systems and IoT.",
  },
  heroDesc: {
    es: "PMCustom diseña y desarrolla sistemas embebidos innovadores para Chile y Latinoamérica. Nuestras soluciones de IoT y sensores permiten adquirir, centralizar y mostrar información procesada en tiempo real, facilitando la toma de decisiones y la optimización de tus procesos productivos.",
    en: "PMCustom designs and develops innovative embedded systems for Chile and Latin America. Our IoT and sensor solutions acquire, centralize and display processed information in real time, enabling informed decisions and optimized production processes.",
  },
  heroCta: { es: "Cuéntanos tu proyecto", en: "Tell us your project" },

  // Pilares — ¿Por qué PMCustom?
  pillarsKicker: { es: "¿Por qué PMCustom?", en: "Why PMCustom?" },
  pillarsTitle: {
    es: "Tu partner en innovación tecnológica sustentable.",
    en: "Your partner in sustainable technological innovation.",
  },
  pillarsLead: {
    es: "Nuestro compromiso se basa en tres pilares fundamentales: Seguridad, Robustez y Usabilidad, que garantizan soluciones tecnológicas avanzadas, fiables y fáciles de implementar para tu industria.",
    en: "Our work is built on three pillars: Security, Robustness and Usability — advanced, reliable and easy-to-deploy solutions for your industry.",
  },
  pillar1T: { es: "Seguridad", en: "Security" },
  pillar1D: {
    es: "Trabajamos con protocolos industriales, realizamos pruebas de seguridad sistemáticas e integramos actualizaciones de firmware periódicas, eliminando cualquier riesgo de vulnerabilidad en los flujos de información.",
    en: "We work with industrial protocols, run systematic security tests and ship periodic firmware updates to eliminate vulnerabilities across information flows.",
  },
  pillar2T: { es: "Robustez", en: "Robustness" },
  pillar2D: {
    es: "Fabricamos dispositivos tecnológicos capaces de soportar los entornos más rigurosos, con conexión continua y múltiples escenarios de respaldo, asegurando disponibilidad de los datos y gestión eficiente en tiempo real.",
    en: "We build devices that withstand the harshest environments, with continuous connectivity and multiple failover scenarios, ensuring data availability and efficient real-time management.",
  },
  pillar3T: { es: "Usabilidad", en: "Usability" },
  pillar3D: {
    es: "Dispositivos industriales diseñados para aplicaciones profesionales que combinan alta funcionalidad con facilidad de uso. No requieren formación especializada, permitiendo un ahorro significativo de tiempo en la implementación.",
    en: "Industrial devices designed for professional applications that combine high functionality with ease of use — no specialized training required, saving significant deployment time.",
  },

  servicesKicker: { es: "Nuestros Servicios", en: "Our Services" },
  servicesIntro: {
    es: "Integramos, diseñamos, desarrollamos y desplegamos dispositivos tecnológicos automáticos complementados con interfaces web. Obtienes información procesada y precisa para la gestión eficiente de operaciones en tiempo real. Además, asesoramos en la admisibilidad de proyectos a CORFO, Ley I+D y fondos concursables.",
    en: "We integrate, design, develop and deploy automated devices paired with web interfaces. You get accurate, processed information to run your operations in real time. We also advise on CORFO, R&D Law and competitive-fund eligibility.",
  },

  iotTitle: { es: "Proyectos IoT", en: "IoT Projects" },
  iotSub: { es: "(Internet of Things)", en: "(Internet of Things)" },
  iotDesc: {
    es: "Innovamos con soluciones de Internet de las Cosas personalizadas, diseñadas para optimizar procesos y mejorar la conectividad de tus dispositivos, desde la integración de sensores hasta la automatización completa. Transformamos tu negocio a través de tecnología avanzada y datos en tiempo real.",
    en: "Custom IoT solutions designed to optimize processes and improve device connectivity, from sensor integration to full automation. We transform your business with advanced technology and real-time data.",
  },

  idTitle: { es: "I + D", en: "R + D" },
  idSub: { es: "Investigación y Desarrollo", en: "Research and Development" },
  idDesc: {
    es: "Mediante métodos científicos, llevamos a cabo procesos de investigación y desarrollo que generan nuevos conocimientos, permitiendo crear avances tecnológicos innovadores, relevantes, viables y aplicables a procesos y productos, con potencial de ser patentados y protegidos por la propiedad intelectual.",
    en: "Through scientific methods we run R&D processes that generate new knowledge and enable innovative, viable and applicable technological advances — patentable and protected by intellectual property.",
  },

  corfoKicker: { es: "Recursos CORFO · Ley I+D", en: "CORFO Resources · R&D Law" },
  corfoTitle: {
    es: "Obtén recursos CORFO: Ley I+D y Fondos Concursables",
    en: "Access CORFO funding: R&D Law and Competitive Funds",
  },
  corfoDesc: {
    es: "PMCustom gestiona un servicio integral para acceder a recursos CORFO a través de Ley I+D y Fondos Concursables, en dos etapas: asesoramiento y desarrollo e implementación del proyecto.",
    en: "PMCustom provides end-to-end support to access CORFO funding through the R&D Law and Competitive Funds — in two stages: advisory and project development & implementation.",
  },
  corfoStep1: { es: "Etapa 1 · Asesoramiento", en: "Stage 1 · Advisory" },
  corfoStep1a: { es: "Formulación y postulación a fondos concursables.", en: "Formulation and application to competitive funds." },
  corfoStep1b: { es: "Asesoramiento para acceder a la Ley I+D.", en: "Guidance to access the R&D Law." },
  corfoStep2: { es: "Etapa 2 · Desarrollo e Implementación", en: "Stage 2 · Development & Implementation" },
  corfoStep2a: { es: "Ejecución de las etapas del proyecto, asegurando su éxito.", en: "Execution of every project stage, ensuring success." },

  cycleKicker: { es: "Planifica tu futuro con PMCustom", en: "Plan your future with PMCustom" },
  cycleDesc: {
    es: "Instalamos sensores en terreno que recopilan datos de tus procesos productivos. Estos viajan a un módulo central en campo para un preprocesamiento inicial, luego a un servidor en la nube donde se organizan, tabulan y filtran, entregando información cuantificada en una interfaz personalizada para que tomes decisiones estratégicas, ejecutes acciones y controles tu negocio de manera eficiente.",
    en: "We deploy field sensors that collect production-process data. They reach a central field module for initial preprocessing, then travel to a cloud server where they are organized, tabulated and filtered into a custom interface — enabling strategic decisions and efficient control of your business.",
  },
  cycle1: { es: "Sensores en terreno", en: "Field sensors" },
  cycle2: { es: "Módulo central", en: "Central module" },
  cycle3: { es: "Servidor en la nube", en: "Cloud server" },
  cycle4: { es: "Interfaz personalizada", en: "Custom interface" },

  productsKicker: { es: "Productos destacados", en: "Featured products" },
  productsTitle: {
    es: "Soluciones para IoT agrícola e industrial.",
    en: "Solutions for agricultural and industrial IoT.",
  },

  otherTitle: { es: "Productos destacados", en: "Featured products" },
  otherA: { es: "Tablero Control de Riego", en: "Irrigation Control Panel" },
  otherB: { es: "Nodo PMCustom", en: "PMCustom Node" },
  otherC: { es: "Data Logger DSL1", en: "Data Logger DSL1" },
  otherD: { es: "Desarrollo a medida", en: "Custom development" },

  contactKicker: { es: "Contacto", en: "Contact" },
  contactTitle: { es: "¿En qué podemos ayudarte?", en: "How can we help?" },
  contactDesc: {
    es: "Contáctanos para evaluar tu proyecto de sistemas embebidos, IoT, I+D o acceso a recursos CORFO. Te respondemos en menos de 24 horas hábiles.",
    en: "Contact us to evaluate your embedded systems, IoT, R&D or CORFO project. We reply within 24 business hours.",
  },
  fCompanyName: { es: "Nombre Empresa", en: "Company name" },
  fCompanyGiro: { es: "Giro Empresa", en: "Industry / business activity" },
  fCompanyRut: { es: "RUT Empresa", en: "Company RUT / Tax ID" },
  fContactName: { es: "Nombre del contacto", en: "Contact name" },
  fContactPhone: { es: "Teléfono del contacto", en: "Contact phone" },
  fComments: { es: "Comentarios", en: "Comments" },
  fName: { es: "Nombre", en: "Name" },
  fEmail: { es: "Email", en: "Email" },
  fCompany: { es: "Empresa", en: "Company" },
  fMessage: { es: "Cuéntanos sobre tu proyecto", en: "Tell us about your project" },
  fSend: { es: "Enviar", en: "Send" },
  fSuccess: { es: "¡Gracias! Te contactaremos pronto.", en: "Thanks! We'll be in touch shortly." },

  footer: { es: "© PMCustom · Partner Tecnológico en Sistemas Embebidos e IoT", en: "© PMCustom · Embedded Systems & IoT Technology Partner" },
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
