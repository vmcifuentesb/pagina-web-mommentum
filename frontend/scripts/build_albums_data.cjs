const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../public/fotografias');
const albumsFolders = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

const albumConfigs = {
  'Caravana del Zorro 2026': {
    slug: 'caravana-del-zorro',
    category: 'Cultura & Viajes',
    title: 'Caravana del Zorro 2026',
    year: '2026',
    description: 'Fotografías del recorrido en motocicleta hacia Esquipulas. Capturas en ruta, asfalto y momentos del trayecto.',
    styleName: 'Tira Cinemática Horizontal'
  },
  'Antigua': {
    slug: 'antigua-guatemala',
    category: 'Urbano & Calles',
    title: 'Antigua Guatemala',
    year: '2025',
    description: 'Fotografías de las calles empedradas, arquitectura colonial y personas en el día a día.',
    styleName: 'Marcos con Paspartú'
  },
  'Semana Santa': {
    slug: 'semana-santa',
    category: 'Cultura & Tradición',
    title: 'Semana Santa',
    year: '2025',
    description: 'Registro visual de las procesiones, alfombras de aserrín y devoción en las calles de Guatemala.',
    styleName: 'Fuelle de Acordeón Desplegable'
  },
  'Sesión Andy': {
    slug: 'sesion-andy',
    category: 'Retratos',
    title: 'Sesión Andy',
    year: '2025',
    description: 'Fotografías de retrato individual al aire libre con luz natural y fondos urbanos.',
    styleName: 'Fuelle de Acordeón Desplegable'
  },
  'Ruby': {
    slug: 'ruby',
    category: 'Retratos',
    title: 'Sesión Ruby',
    year: '2025',
    description: 'Sesión fotográfica de retratos en exterior explorando expresiones y luz de atardecer.',
    styleName: 'Composición Asimétrica'
  },
  'Familia Erick': {
    slug: 'familia-erick',
    category: 'Familia',
    title: 'Familia Erick',
    year: '2025',
    description: 'Fotografías de reunión y retratos familiares en exteriores.',
    styleName: 'Marcos con Paspartú'
  },
  'Sesion-embarazada': {
    slug: 'sesion-embarazada',
    category: 'Maternidad',
    title: 'Sesión Maternidad',
    year: '2025',
    description: 'Fotografías de dulce espera en locación natural con luz suave.',
    styleName: 'Composición Asimétrica'
  }
};

const resultAlbums = [];

albumsFolders.forEach((folder, idx) => {
  const folderPath = path.join(baseDir, folder);
  const files = fs.readdirSync(folderPath).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  
  const config = albumConfigs[folder] || {
    slug: folder.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    category: 'Fotografía',
    title: folder,
    year: '2025',
    description: `Fotografías de la carpeta ${folder}.`,
    styleName: 'Galería Dinámica'
  };

  const photos = files.map((file, pIdx) => {
    return {
      id: `${config.slug}-${pIdx + 1}`,
      title: `${config.title} #${pIdx + 1}`,
      url: `/fotografias/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
      anitaCopy: `Fotografía ${pIdx + 1} de la serie ${config.title}.`,
      category: config.category,
      albumSlug: config.slug,
      shutter: '1/250s',
      aperture: 'f/2.8',
      iso: 'ISO 100',
      dimensions: '3840 × 2160',
      year: config.year
    };
  });

  if (photos.length > 0) {
    resultAlbums.push({
      id: `album-${idx + 1}`,
      slug: config.slug,
      title: config.title,
      category: config.category,
      year: config.year,
      coverImage: photos[0].url,
      description: config.description,
      styleName: config.styleName,
      bestPhoto: photos[0],
      photos: photos
    });
  }
});

const fileContent = `// Catálogo Oficial de Álbumes y Fotografías Locales de MOMMENTUM
export interface PhotoItem {
  id: string;
  title: string;
  url: string;
  anitaCopy: string;
  category: string;
  albumSlug: string;
  shutter: string;
  aperture: string;
  iso: string;
  dimensions: string;
  year: string;
}

export interface AlbumItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  description: string;
  styleName: string;
  bestPhoto: PhotoItem;
  photos: PhotoItem[];
}

export const ALBUMS: AlbumItem[] = ${JSON.stringify(resultAlbums, null, 2)};

export const ALL_PHOTOS: PhotoItem[] = ALBUMS.flatMap(a => a.photos);
`;

fs.writeFileSync(path.join(__dirname, '../src/data/albums.ts'), fileContent, 'utf-8');
console.log(`Generated src/data/albums.ts with ${resultAlbums.length} albums and ${resultAlbums.reduce((acc, a) => acc + a.photos.length, 0)} real photos.`);
