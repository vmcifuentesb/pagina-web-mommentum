export interface PhotographerItem {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  instagram: string;
  handle: string;
  avatarUrl: string;
  featuredShot: string;
  collabProjects: string[];
}

export const PHOTOGRAPHERS: PhotographerItem[] = [
  {
    id: 'collab-01',
    name: 'Mateo Sandoval',
    role: 'Fotógrafo Documental & Expedición',
    specialty: 'Fotoperiodismo & Gran Angular de Carretera',
    bio: 'Especialista en expediciones visuales extremas y crónicas de carretera. Colaborador principal en la cobertura de la Caravana del Zorro y series de viaje en América Central.',
    instagram: 'https://www.instagram.com/mateosandoval.doc/',
    handle: '@mateosandoval.doc',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    featuredShot: 'https://mommentum.promptendweb.com/wp-content/uploads/2026/04/mommentum_caravana_del_zorro_2026-8-scaled.jpg',
    collabProjects: ['Caravana del Zorro 2026', 'Ruta Altiplano']
  },
  {
    id: 'collab-02',
    name: 'Elena Valenzuela',
    role: 'Directora de Fotografía & Retrato Editorial',
    specialty: 'Iluminación Chiaroscuro & Formato Medio',
    bio: 'Fotógrafa de alta costura y retrato intimista. Su dominio del claroscuro y la dirección de pose define la colaboración estética en sesiones editoriales de MOMMENTUM.',
    instagram: 'https://www.instagram.com/elenavalenzuela.ph/',
    handle: '@elenavalenzuela.ph',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    featuredShot: 'https://mommentum.promptendweb.com/wp-content/uploads/2026/02/IMG_3576-scaled.jpg',
    collabProjects: ['Luz y Contraste Carmesí', 'Sesión Andy']
  },
  {
    id: 'collab-03',
    name: 'Carlos Monterroso',
    role: 'Fotógrafo de Paisaje & Óptica Anamórfica',
    specialty: 'Atmósferas Nebulosas & Larga Exposición',
    bio: 'Explorador de volcanes y cumbres del altiplano guatemalteco. Aporta su sensibilidad con ópticas fijas luminosas y capturas atmosféricas de escala monumental.',
    instagram: 'https://www.instagram.com/carlosmonterroso.lens/',
    handle: '@carlosmonterroso.lens',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    featuredShot: 'https://mommentum.promptendweb.com/wp-content/uploads/2022/05/joshua-earle-VntWEWgutxA-unsplash-6.jpg',
    collabProjects: ['Cromatismo del Afecto', 'Horizontes de Niebla']
  }
];
