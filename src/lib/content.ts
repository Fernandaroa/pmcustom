import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import pillarServices from "@/assets/pillar-services.jpg";
import pillarProducts from "@/assets/pillar-products.jpg";
import pillarCorfo from "@/assets/pillar-corfo.jpg";
import serviceEmbedded from "@/assets/service-embedded.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceRd from "@/assets/service-rd.jpg";

export type CaseStudy = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "control-riego",
    title: "Control Inteligente de Riego",
    short: "Automatización de irrigación y fertilización con monitoreo y control desde la nube.",
    description:
      "Automatización de sistemas de irrigación y fertilización mediante monitoreo de presión, flujo y control remoto desde la nube. Programable vía web y con comunicación celular, optimiza cada ciclo de riego según condiciones reales del cultivo.",
    benefits: [
      "Mayor eficiencia hídrica",
      "Menor intervención manual",
      "Optimización del uso de recursos",
      "Control centralizado",
    ],
    image: work1,
  },
  {
    slug: "nodo-iot-agricultura",
    title: "Nodo IoT para Agricultura",
    short: "Nodo autónomo solar con LoRa para distribución de riego por sectores.",
    description:
      "Sistema autónomo alimentado por energía solar que controla válvulas de riego y distribuye recursos por sectores utilizando tecnología LoRa. Diseñado para operar en terreno con cobertura amplia y bajo consumo energético.",
    benefits: [
      "Operación remota",
      "Menor consumo energético",
      "Mayor control territorial",
      "Escalabilidad por sectores",
    ],
    image: work2,
  },
  {
    slug: "data-logger",
    title: "Data Logger Inteligente",
    short: "Captura, almacena y visualiza datos multi-sensor en dashboard en tiempo real.",
    description:
      "Plataforma para captura, almacenamiento y visualización de datos provenientes de múltiples sensores. Integra variables como temperatura, presión, humedad, nivel y posición, entregando información lista para decisiones operacionales.",
    benefits: [
      "Monitoreo remoto",
      "Dashboard en tiempo real",
      "Integración de múltiples variables",
      "Mejor toma de decisiones",
    ],
    image: work3,
  },
];

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  body: string;
  benefits: string[];
  image: string;
};

export const services: ServicePage[] = [
  {
    slug: "sistemas-embebidos",
    title: "Sistemas Embebidos",
    metaTitle: "Sistemas Embebidos a Medida | PM CUSTOM",
    metaDescription:
      "Desarrollo de sistemas embebidos a medida: hardware, firmware y dispositivos electrónicos para automatizar y monitorear procesos críticos.",
    lead: "Dispositivos electrónicos inteligentes diseñados para tu operación.",
    body: "Desarrollamos dispositivos electrónicos inteligentes capaces de controlar, monitorear y automatizar procesos críticos. Acompañamos cada etapa: diseño de hardware, firmware embebido, validación y despliegue en terreno.",
    benefits: [
      "Hardware y firmware a medida",
      "Robustez para entornos industriales",
      "Bajo consumo y operación autónoma",
      "Integración con sensores y actuadores",
    ],
    image: serviceEmbedded,
  },
  {
    slug: "iot",
    title: "Soluciones IoT",
    metaTitle: "Soluciones IoT Industriales | PM CUSTOM",
    metaDescription:
      "Plataformas IoT a medida que conectan sensores, dispositivos y dashboards para entregar información en tiempo real desde cualquier lugar.",
    lead: "Conectamos sensores, dispositivos y plataformas para entregar datos en tiempo real.",
    body: "Diseñamos soluciones IoT que conectan sensores y dispositivos en terreno con plataformas y dashboards en la nube. Información oportuna y precisa para gestionar la operación desde cualquier lugar.",
    benefits: [
      "Telemetría cifrada hacia la nube",
      "Dashboards en tiempo real",
      "Alertas y automatizaciones",
      "Escalable a miles de dispositivos",
    ],
    image: pillarProducts,
  },
  {
    slug: "automatizacion-industrial",
    title: "Automatización Industrial",
    metaTitle: "Automatización Industrial | PM CUSTOM",
    metaDescription:
      "Soluciones de automatización industrial que reducen tareas manuales y mejoran la eficiencia operacional en agricultura, minería, manufactura e industria.",
    lead: "Menos tareas manuales, más eficiencia operacional.",
    body: "Reducimos tareas manuales y mejoramos la eficiencia operacional mediante soluciones automatizadas: controladores, integraciones, comunicación industrial y supervisión remota.",
    benefits: [
      "Reducción de errores operacionales",
      "Trazabilidad de procesos",
      "Integración con sistemas existentes",
      "Control remoto y supervisión 24/7",
    ],
    image: serviceAutomation,
  },
  {
    slug: "desarrollo-productos",
    title: "Desarrollo de Productos Tecnológicos",
    metaTitle: "Desarrollo de Productos Tecnológicos | PM CUSTOM",
    metaDescription:
      "Diseñamos hardware, software y plataformas para convertir desafíos complejos en productos tecnológicos funcionales y escalables.",
    lead: "De la idea al producto: hardware, software y plataformas.",
    body: "Diseñamos hardware, software y plataformas para convertir desafíos complejos en soluciones concretas. Acompañamos el ciclo completo: requerimientos, diseño, prototipado, manufactura piloto y soporte.",
    benefits: [
      "Diseño industrial y electrónico",
      "Prototipado rápido",
      "Manufactura piloto y escalado",
      "Soporte y mejora continua",
    ],
    image: pillarServices,
  },
  {
    slug: "investigacion-desarrollo",
    title: "Investigación y Desarrollo",
    metaTitle: "I+D, Ley I+D y CORFO | PM CUSTOM",
    metaDescription:
      "Procesos de I+D, prototipado y validación. Asesoría para acceder a Ley I+D, fondos CORFO y financiamiento de innovación tecnológica.",
    lead: "Transformamos ideas en productos tecnológicos validados.",
    body: "Transformamos ideas en productos tecnológicos funcionales mediante procesos de innovación, prototipado y validación. Asesoramos en la postulación a Ley I+D, fondos CORFO y otros instrumentos de financiamiento para que tu proyecto sea más accesible y rentable.",
    benefits: [
      "Método científico y validación técnica",
      "Asesoría Ley I+D",
      "Postulación a CORFO y fondos concursables",
      "Propiedad intelectual y patentes",
    ],
    image: serviceRd,
  },
];

export const industries = [
  { name: "Agricultura", description: "Monitoreo de cultivos, riego inteligente y gestión de recursos." },
  { name: "Minería", description: "Captura de datos operacionales y monitoreo remoto de activos." },
  { name: "Industria", description: "Automatización y optimización de procesos productivos." },
  { name: "Manufactura", description: "Control de variables críticas y trazabilidad." },
  { name: "Energía", description: "Monitoreo de infraestructura y gestión de datos." },
  { name: "Logística", description: "Seguimiento de activos y control operacional." },
];

export const pillars = [
  {
    title: "Seguridad",
    description:
      "Diseñamos soluciones tecnológicas robustas y seguras utilizando protocolos industriales, actualizaciones permanentes y altos estándares de desarrollo que protegen la información y garantizan la continuidad operacional.",
    image: pillarServices,
  },
  {
    title: "Robustez",
    description:
      "Nuestros dispositivos están preparados para operar en entornos exigentes como agricultura, minería e industria, asegurando estabilidad, disponibilidad de datos y funcionamiento continuo.",
    image: pillarProducts,
  },
  {
    title: "Usabilidad",
    description:
      "Creamos tecnología pensada para las personas. Soluciones intuitivas, fáciles de implementar y diseñadas para integrarse rápidamente a las operaciones de cada cliente.",
    image: pillarCorfo,
  },
];

export const benefitsList = [
  "Información en tiempo real",
  "Automatización de procesos",
  "Disminución de errores operacionales",
  "Mayor eficiencia productiva",
  "Control remoto de operaciones",
  "Escalabilidad tecnológica",
  "Optimización de recursos",
  "Mejor toma de decisiones",
];

export const process = [
  { n: "01", t: "Diagnóstico", d: "Entendemos el problema, la operación y los objetivos del negocio." },
  { n: "02", t: "Factibilidad Técnica", d: "Evaluamos tecnologías, recursos y oportunidades." },
  { n: "03", t: "Diseño de Solución", d: "Definimos arquitectura, hardware, software e integración." },
  { n: "04", t: "Prototipado", d: "Validamos la solución antes de escalar." },
  { n: "05", t: "Desarrollo", d: "Construimos la tecnología adaptada al proyecto." },
  { n: "06", t: "Implementación", d: "Integramos la solución a la operación." },
  { n: "07", t: "Optimización", d: "Monitoreamos, mejoramos y acompañamos el crecimiento." },
];
