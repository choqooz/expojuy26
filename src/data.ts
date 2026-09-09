export const CONTENT_LABEL = "Contenido demostrativo";
export const PROVISIONAL_LABEL = "Información provisional";
export const ILLUSTRATIVE_IMAGE_LABEL = "Imagen ilustrativa";

export const NAV_ITEMS = [
  { label: "Inicio", target: "inicio" },
  { label: "ExpoJuy 2026", target: "expojuy" },
  { label: "Agenda", target: "agenda" },
  { label: "Expositores", target: "expositores" },
  { label: "Mapa", target: "mapa" },
  { label: "Noticias", target: "noticias" },
  { label: "Instituciones", target: "sponsors" },
  { label: "Preguntas frecuentes", target: "preguntas" },
  { label: "Contacto", target: "contacto" },
] as const;

export const INTERESTS = [
  "Producción y territorio",
  "Tecnología e innovación",
  "Comercio y negocios",
  "Conocimiento y formación",
] as const;

export interface AgendaItem {
  id: string;
  title: string;
  category: string;
  description: string;
  format: string;
}

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: "agenda-territorio",
    title: "Territorio que conecta",
    category: "Producción y territorio",
    description: "Conversación demostrativa sobre territorio, producción y oportunidades de vinculación regional.",
    format: "Conversación demostrativa",
  },
  {
    id: "agenda-innovacion",
    title: "Tecnología para crecer",
    category: "Tecnología e innovación",
    description: "Encuentro demostrativo sobre herramientas tecnológicas aplicadas a desafíos productivos.",
    format: "Encuentro demostrativo",
  },
  {
    id: "agenda-negocios",
    title: "Rondas de conexión",
    category: "Comercio y negocios",
    description: "Dinámica demostrativa para explorar vínculos entre comercio, logística e instituciones.",
    format: "Actividad demostrativa",
  },
];

export interface ExhibitorItem {
  id: string;
  name: string;
  sector: string;
  description: string;
}

export const EXHIBITORS: ExhibitorItem[] = [
  {
    id: "expositor-andes",
    name: "Iniciativa productiva",
    sector: "Producción y territorio",
    description: "Ficha demostrativa para una iniciativa vinculada al desarrollo productivo y territorial.",
  },
  {
    id: "expositor-nodo",
    name: "Nodo de tecnología aplicada",
    sector: "Tecnología e innovación",
    description: "Ficha demostrativa para una propuesta de tecnología aplicada al desarrollo regional.",
  },
  {
    id: "expositor-trama",
    name: "Red de comercio y logística",
    sector: "Comercio y negocios",
    description: "Ficha demostrativa para una red de intercambio, comercialización y corredores.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "¿Cuándo y dónde se realizará ExpoJuy 2026?",
    answer: "La fecha y el lugar se publicarán por los canales oficiales cuando estén confirmados.",
  },
  {
    question: "¿Cómo se habilitarán las entradas?",
    answer: "La información sobre entradas y su canal oficial estará disponible próximamente. Este prototipo no procesa pagos.",
  },
  {
    question: "¿Cómo participarán expositores y sponsors?",
    answer: "Las modalidades de participación se comunicarán por canales oficiales una vez definidas.",
  },
] as const;

export interface ContextImageAsset {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  objectPosition: string;
}

export const CONTEXT_IMAGES = {
  purmamarca: {
    src: "/media/sections/territory-purmamarca.webp",
    alt: "Panorámica del Cerro de los Siete Colores en Purmamarca, Jujuy.",
    caption: "Cerro de los Siete Colores en Purmamarca, Jujuy.",
    width: 1600,
    height: 600,
    objectPosition: "center",
  },
  quebrada: {
    src: "/media/sections/territory-quebrada.webp",
    alt: "Vista panorámica de la Quebrada de Humahuaca cerca de Tilcara, con montañas estratificadas, valle cultivado y cactus.",
    caption: "Quebrada de Humahuaca cerca de Tilcara, Jujuy.",
    width: 1280,
    height: 720,
    objectPosition: "center 42%",
  },
  salinas: {
    src: "/media/sections/territory-salinas.webp",
    alt: "Salinas Grandes, entre Jujuy y Salta, con planicie salina, montañas andinas y cielo nublado.",
    caption: "Salinas Grandes entre Jujuy y Salta.",
    width: 1280,
    height: 720,
    objectPosition: "center",
  },
  olaroz: {
    src: "/media/sections/sector-olaroz.webp",
    alt: "Imagen satelital en falso color del Salar de Olaroz, Jujuy, con el salar blanco, estanques de evaporación y relieve circundante.",
    caption: "Imagen satelital en falso color del Salar de Olaroz, Jujuy.",
    width: 1280,
    height: 720,
    objectPosition: "center",
  },
  cauchari: {
    src: "/media/sections/sector-cauchari.webp",
    alt: "Paneles solares de Cauchari III con el paisaje altoandino de Jujuy al fondo.",
    caption: "Paneles solares de Cauchari III, Jujuy.",
    width: 1280,
    height: 720,
    objectPosition: "center 54%",
  },
  pasoJama: {
    src: "/media/sections/corridor-paso-jama.webp",
    alt: "Cordillera de los Andes en el Paso de Jama, Jujuy, con cumbres nevadas y una ruta en primer plano.",
    caption: "Cordillera andina en el Paso de Jama, Jujuy.",
    width: 1280,
    height: 720,
    objectPosition: "center",
  },
  ruta52: {
    src: "/media/sections/corridor-ruta-52.webp",
    alt: "Ruta Nacional 52 entre el Paso de Jama y Purmamarca, entre montañas de Jujuy.",
    caption: "Ruta Nacional 52 entre el Paso de Jama y Purmamarca, Jujuy.",
    width: 1280,
    height: 720,
    objectPosition: "center",
  },
} as const satisfies Record<string, ContextImageAsset>;
