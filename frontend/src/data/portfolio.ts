export interface PhotoItem {
  id: string;
  title: string;
  seriesId: string;
  series: string;
  seriesNumber: string;
  pillar: 'dinamismo' | 'luz' | 'composicion';
  pillarLabel: string;
  year: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  frameNumber: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
    iso: string;
  };
  concept: string;
  dimensions?: string;
  edition?: string;
}

export interface SeriesItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  curatorNote: string;
  coverImage: string;
  photoCount: number;
  year: string;
  location: string;
  photos: PhotoItem[];
}

export const PHOTOS: PhotoItem[] = [
  // Serie 01: IMPULSO & TENSIÓN
  {
    id: 'ph-01',
    title: 'Ingravidez en Carbono',
    seriesId: 'impulso-tension',
    series: 'IMPULSO & TENSIÓN',
    seriesNumber: '01',
    pillar: 'dinamismo',
    pillarLabel: 'Dinamismo e Impulso',
    year: '2026',
    frameNumber: '01A',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '120 x 150 cm',
    edition: 'Edición limitada de 5 + 2 AP',
    exif: {
      camera: 'Leica SL2-S',
      lens: 'Summilux-SL 50mm f/1.4 ASPH',
      focalLength: '50mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/8000s',
      iso: 'ISO 100'
    },
    concept: 'Captura en el ápice del salto. La tela y el cabello quedan congelados en el aire desafiando la gravedad por un milisegundo.'
  },
  {
    id: 'ph-02',
    title: 'Giro en Penumbra',
    seriesId: 'impulso-tension',
    series: 'IMPULSO & TENSIÓN',
    seriesNumber: '01',
    pillar: 'dinamismo',
    pillarLabel: 'Dinamismo e Impulso',
    year: '2026',
    frameNumber: '02A',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '100 x 125 cm',
    edition: 'Edición limitada de 7 + 2 AP',
    exif: {
      camera: 'Leica M11 Monochrom',
      lens: 'APO-Summicron-M 35mm f/2 ASPH',
      focalLength: '35mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/4000s',
      iso: 'ISO 200'
    },
    concept: 'Gesto espontáneo de giro imprevisto. El dinamismo es capturado con nitidez analógica y grano mineral natural.'
  },
  {
    id: 'ph-03',
    title: 'Fricción Sonora',
    seriesId: 'impulso-tension',
    series: 'IMPULSO & TENSIÓN',
    seriesNumber: '01',
    pillar: 'dinamismo',
    pillarLabel: 'Dinamismo e Impulso',
    year: '2026',
    frameNumber: '03A',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '110 x 140 cm',
    edition: 'Edición limitada de 5 + 1 AP',
    exif: {
      camera: 'Sony A7R V',
      lens: 'FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/1.2',
      shutterSpeed: '1/6400s',
      iso: 'ISO 100'
    },
    concept: 'La vibración del movimiento corporal antes de detenerse por completo. La mirada fija contrasta con la velocidad del cuerpo.'
  },

  // Serie 02: LUZ & ATMÓSFERA
  {
    id: 'ph-04',
    title: 'El Vértice de la Mirada',
    seriesId: 'chiaroscuro-penumbra',
    series: 'LUZ & ATMÓSFERA',
    seriesNumber: '02',
    pillar: 'luz',
    pillarLabel: 'Luz y Atmósfera',
    year: '2026',
    frameNumber: '04A',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '120 x 160 cm',
    edition: 'Edición limitada de 3 + 1 AP',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 80mm f/1.9',
      focalLength: '80mm',
      aperture: 'f/1.9',
      shutterSpeed: '1/250s',
      iso: 'ISO 64'
    },
    concept: 'Un único reflector lateral de luz difusa esculpe los relieves óseos dejando el 70% del rostro sumergido en penumbra profunda.'
  },
  {
    id: 'ph-05',
    title: 'Resonancia Oblicua',
    seriesId: 'chiaroscuro-penumbra',
    series: 'LUZ & ATMÓSFERA',
    seriesNumber: '02',
    pillar: 'luz',
    pillarLabel: 'Luz y Atmósfera',
    year: '2026',
    frameNumber: '05A',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '90 x 120 cm',
    edition: 'Edición limitada de 7 + 2 AP',
    exif: {
      camera: 'Hasselblad 907X 50C',
      lens: 'XCD 45mm f/4 P',
      focalLength: '45mm',
      aperture: 'f/4.0',
      shutterSpeed: '1/125s',
      iso: 'ISO 100'
    },
    concept: 'Estudio tonal de la luz de atardecer filtrada a través de celosías de hormigón, generando franjas lumínicas en el espacio.'
  },

  // Serie 03: COMPOSICIÓN & NARRATIVA
  {
    id: 'ph-06',
    title: 'Monolito y Figura',
    seriesId: 'geometria-silencio',
    series: 'COMPOSICIÓN & NARRATIVA',
    seriesNumber: '03',
    pillar: 'composicion',
    pillarLabel: 'Composición y Narrativa',
    year: '2026',
    frameNumber: '06A',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '140 x 175 cm',
    edition: 'Edición limitada de 3 + 1 AP',
    exif: {
      camera: 'Sony A7R V',
      lens: 'FE 35mm f/1.4 GM',
      focalLength: '35mm',
      aperture: 'f/5.6',
      shutterSpeed: '1/500s',
      iso: 'ISO 200'
    },
    concept: 'Alineación geométrica entre las diagonales de hormigón brutalista y la postura erguida del sujeto, creando tensión arquitectónica.'
  },
  {
    id: 'ph-07',
    title: 'Eje y Vacío',
    seriesId: 'geometria-silencio',
    series: 'COMPOSICIÓN & NARRATIVA',
    seriesNumber: '03',
    pillar: 'composicion',
    pillarLabel: 'Composición y Narrativa',
    year: '2026',
    frameNumber: '07A',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '100 x 130 cm',
    edition: 'Edición limitada de 5 + 2 AP',
    exif: {
      camera: 'Leica M11',
      lens: 'Summicron 28mm f/2 ASPH',
      focalLength: '28mm',
      aperture: 'f/4.0',
      shutterSpeed: '1/1000s',
      iso: 'ISO 125'
    },
    concept: 'El sujeto situado en el tercio inferior derecho, cediendo el protagonismo visual al silencio absoluto del espacio negativo.'
  },

  // Serie 04: RETRATOS DE AUTOR
  {
    id: 'ph-08',
    title: 'Retrato de la Mirada Fija',
    seriesId: 'identidad-cruda',
    series: 'RETRATOS DE AUTOR',
    seriesNumber: '04',
    pillar: 'composicion',
    pillarLabel: 'Composición y Narrativa',
    year: '2026',
    frameNumber: '08A',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '110 x 145 cm',
    edition: 'Pieza única 1/1 + 1 AP',
    exif: {
      camera: 'Leica SL2',
      lens: 'Noctilux-M 50mm f/0.95 ASPH',
      focalLength: '50mm',
      aperture: 'f/0.95',
      shutterSpeed: '1/2000s',
      iso: 'ISO 50'
    },
    concept: 'Profundidad de campo milimétrica donde solo los iris del sujeto se mantienen en foco hipernítido, sumergiendo el entorno en un bokeh cremoso.'
  },
  {
    id: 'ph-09',
    title: 'Silencio en Grafito',
    seriesId: 'identidad-cruda',
    series: 'RETRATOS DE AUTOR',
    seriesNumber: '04',
    pillar: 'luz',
    pillarLabel: 'Luz y Atmósfera',
    year: '2026',
    frameNumber: '09A',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    dimensions: '100 x 125 cm',
    edition: 'Edición limitada de 5 + 1 AP',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 90mm f/2.5 V',
      focalLength: '90mm',
      aperture: 'f/2.8',
      shutterSpeed: '1/400s',
      iso: 'ISO 100'
    },
    concept: 'Retrato desprovisto de artificios de moda. La verdad del sujeto revelada a través de la textura epidérmica y la contención emotiva.'
  }
];

export const SERIES_LIST: SeriesItem[] = [
  {
    id: 'impulso-tension',
    number: '01',
    title: 'IMPULSO & TENSIÓN',
    tagline: 'El movimiento antes de extinguirse en el tiempo.',
    description: 'Una investigación visual sobre la ingravidez corporal, el salto suspendido y el latido previo a la caída.',
    curatorNote: 'En esta serie, la cámara actúa como un bisturí temporal que corta la trayectoria del cuerpo en su momento de máxima energía cinética. Las figuras parecen flotar en un vacío mineral donde la gravedad pierde su autoridad.',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    photoCount: 3,
    year: '2026',
    location: 'Estudio Central • CDMX',
    photos: PHOTOS.filter(p => p.seriesId === 'impulso-tension')
  },
  {
    id: 'chiaroscuro-penumbra',
    number: '02',
    title: 'LUZ & ATMÓSFERA',
    tagline: 'La sombra no es ausencia, es donde respira la forma.',
    description: 'Estudio de contrastes absolutos donde un único haz de luz revela la textura y la emoción del sujeto.',
    curatorNote: 'Heredera del claroscuro caravaggista pero desprovista de retórica pictórica clásica. La luz no baña el espacio: corta, aísla y revela la vulnerabilidad oculta en la penumbra.',
    coverImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    photoCount: 2,
    year: '2026',
    location: 'Nave Industrial • Mineral de Pozos',
    photos: PHOTOS.filter(p => p.seriesId === 'chiaroscuro-penumbra')
  },
  {
    id: 'geometria-silencio',
    number: '03',
    title: 'COMPOSICIÓN & NARRATIVA',
    tagline: 'Composiciones deliberadas con vocación de museo.',
    description: 'Encuadres arquitectónicos y diagonales estrictas que guían la mirada hacia el enigma de la figura humana.',
    curatorNote: 'El diálogo tenso entre la escala monumental del hormigón y la fragilidad del sujeto. Las líneas de fuga convergen en gestos sutiles que demandan contemplación prolongada.',
    coverImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    photoCount: 2,
    year: '2026',
    location: 'Espacios Brutalistas • Ciudad de México',
    photos: PHOTOS.filter(p => p.seriesId === 'geometria-silencio')
  },
  {
    id: 'identidad-cruda',
    number: '04',
    title: 'RETRATOS DE AUTOR',
    tagline: 'Canalizar el pulso auténtico sin artificios.',
    description: 'Retratos despojados de artificio comercial, buscando el silencio interior en la mirada del espectador.',
    curatorNote: 'Una aproximación frontal y honesta a la condición humana. Cada pieza busca establecer un contacto visual directo que interpele al espectador en su intimidad.',
    coverImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85',
    photoCount: 2,
    year: '2026',
    location: 'Estudio de Retrato • Oaxaca / CDMX',
    photos: PHOTOS.filter(p => p.seriesId === 'identidad-cruda')
  }
];
