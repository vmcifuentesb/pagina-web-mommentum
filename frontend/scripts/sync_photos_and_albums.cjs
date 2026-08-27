const fs = require('fs');
const path = require('path');

const sourceDir = 'd:/ATLAS/Marcas/MOMMENTUM/FOTOGRAFIAS';
const targetDirs = [
  'd:/ATLAS/Marcas/MOMMENTUM/pagina-web-mommentum/frontend/public/fotografias',
  'd:/ATLAS/Marcas/MOMMENTUM/pagina-web-mommentum-final/frontend/public/fotografias'
];

const albumMeta = {
  'Antigua Guatemala': {
    id: 'album-1',
    slug: 'antigua-guatemala',
    title: 'Antigua Guatemala',
    category: 'Urbano & Calles',
    year: '2025',
    description: 'Fotografías de las calles empedradas, arquitectura colonial y personas en el día a día.',
    styleName: 'Marcos con Paspartú',
    shutter: '1/250s',
    aperture: 'f/2.8',
    iso: 'ISO 100',
    dimensions: '3840 × 2160'
  },
  'Caravana del Zorro 2026': {
    id: 'album-2',
    slug: 'caravana-del-zorro',
    title: 'Caravana del Zorro 2026',
    category: 'Eventos & Acción',
    year: '2026',
    description: 'Crónica fotográfica de la peregrinación motociclista más grande de Centroamérica hacia Esquipulas.',
    styleName: 'Tira Cinemática Horizontal',
    shutter: '1/500s',
    aperture: 'f/4.0',
    iso: 'ISO 200',
    dimensions: '3840 × 2160'
  },
  'Familia Erick': {
    id: 'album-3',
    slug: 'familia-erick',
    title: 'Familia Erick',
    category: 'Familia & Momentos',
    year: '2025',
    description: 'Momentos espontáneos, risas y la calidez de la vida familiar compartida.',
    styleName: 'Marcos con Paspartú',
    shutter: '1/200s',
    aperture: 'f/2.0',
    iso: 'ISO 100',
    dimensions: '3840 × 2160'
  },
  'Ruby': {
    id: 'album-4',
    slug: 'ruby',
    title: 'Sesión Ruby',
    category: 'Retratos',
    year: '2025',
    description: 'Sesión fotográfica de retrato editorial con iluminación natural y composiciones de estudio.',
    styleName: 'Visor Cinemático',
    shutter: '1/160s',
    aperture: 'f/1.8',
    iso: 'ISO 100',
    dimensions: '3840 × 2160'
  },
  'Semana Santa': {
    id: 'album-5',
    slug: 'semana-santa',
    title: 'Semana Santa',
    category: 'Cultura & Devoción',
    year: '2025',
    description: 'Mística, incienso, cortejos procesionales y la solemnidad de las tradiciones de Guatemala.',
    styleName: 'Composición Asimétrica',
    shutter: '1/125s',
    aperture: 'f/2.8',
    iso: 'ISO 400',
    dimensions: '3840 × 2160'
  },
  'Sesión Andy': {
    id: 'album-6',
    slug: 'sesion-andy',
    title: 'Sesión Andy',
    category: 'Retratos',
    year: '2025',
    description: 'Retrato de carácter en exteriores, luz suave y expresiones auténticas.',
    styleName: 'Visor Cinemático',
    shutter: '1/250s',
    aperture: 'f/2.2',
    iso: 'ISO 100',
    dimensions: '3840 × 2160'
  },
  'Sesión embarazada': {
    id: 'album-7',
    slug: 'sesion-embarazada',
    title: 'Sesión Maternidad',
    category: 'Retratos',
    year: '2025',
    description: 'La espera, la ternura y la luz natural celebrando la llegada de una nueva vida.',
    styleName: 'Visor Cinemático',
    shutter: '1/200s',
    aperture: 'f/2.0',
    iso: 'ISO 100',
    dimensions: '3840 × 2160'
  }
};

// 1. Sync files to target public/fotografias
targetDirs.forEach(targetBase => {
  if (fs.existsSync(targetBase)) {
    fs.rmSync(targetBase, { recursive: true, force: true });
  }
  fs.mkdirSync(targetBase, { recursive: true });

  const folders = fs.readdirSync(sourceDir).filter(f => fs.statSync(path.join(sourceDir, f)).isDirectory());
  folders.forEach(folder => {
    const srcFolder = path.join(sourceDir, folder);
    const dstFolder = path.join(targetBase, folder);
    fs.mkdirSync(dstFolder, { recursive: true });

    const files = fs.readdirSync(srcFolder);
    files.forEach(file => {
      fs.copyFileSync(path.join(srcFolder, file), path.join(dstFolder, file));
    });
  });
  console.log('Synchronized photos to:', targetBase);
});

// 2. Build ALBUMS array
const folders = fs.readdirSync(sourceDir).filter(f => fs.statSync(path.join(sourceDir, f)).isDirectory());
const albums = [];

folders.forEach((folder) => {
  const meta = albumMeta[folder];
  if (!meta) return;

  const srcFolder = path.join(sourceDir, folder);
  const files = fs.readdirSync(srcFolder);

  const portadaFile = files.find(f => f.toLowerCase().startsWith('portada')) || files[0];
  const mejorFotoFile = files.find(f => f.toLowerCase().startsWith('mejor foto')) || portadaFile;

  const encodedFolder = encodeURIComponent(folder);
  const coverUrl = `/fotografias/${encodedFolder}/${encodeURIComponent(portadaFile)}`;
  const bestUrl = `/fotografias/${encodedFolder}/${encodeURIComponent(mejorFotoFile)}`;

  // Gallery photos: all photos except Portada and Mejor foto (unless they are the only ones)
  const regularPhotoFiles = files.filter(f => !f.toLowerCase().startsWith('portada') && !f.toLowerCase().startsWith('mejor foto'));
  const galleryFiles = regularPhotoFiles.length > 0 ? regularPhotoFiles : files;

  const photos = galleryFiles.map((file, idx) => {
    const photoId = `${meta.slug}-${idx + 1}`;
    const photoUrl = `/fotografias/${encodedFolder}/${encodeURIComponent(file)}`;
    return {
      id: photoId,
      title: `${meta.title} #${idx + 1}`,
      url: photoUrl,
      anitaCopy: `Fotografía ${idx + 1} de la serie ${meta.title}.`,
      category: meta.category,
      albumSlug: meta.slug,
      shutter: meta.shutter,
      aperture: meta.aperture,
      iso: meta.iso,
      dimensions: meta.dimensions,
      year: meta.year
    };
  });

  const bestPhoto = {
    id: `${meta.slug}-best`,
    title: `${meta.title} — Obra Principal`,
    url: bestUrl,
    anitaCopy: `Obra principal seleccionada de la serie ${meta.title}.`,
    category: meta.category,
    albumSlug: meta.slug,
    shutter: meta.shutter,
    aperture: meta.aperture,
    iso: meta.iso,
    dimensions: meta.dimensions,
    year: meta.year
  };

  albums.push({
    id: meta.id,
    slug: meta.slug,
    title: meta.title,
    category: meta.category,
    year: meta.year,
    coverImage: coverUrl,
    description: meta.description,
    styleName: meta.styleName,
    bestPhoto,
    photos
  });
});

// Sort by ID
albums.sort((a, b) => a.id.localeCompare(b.id));

const albumsTsContent = `// Catálogo Oficial de Álbumes y Fotografías Locales de MOMMENTUM
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

export const ALBUMS: AlbumItem[] = ${JSON.stringify(albums, null, 2)};

export const ALL_PHOTOS: PhotoItem[] = ALBUMS.flatMap(a => a.photos);
`;

const albumTsPaths = [
  'd:/ATLAS/Marcas/MOMMENTUM/pagina-web-mommentum/frontend/src/data/albums.ts',
  'd:/ATLAS/Marcas/MOMMENTUM/pagina-web-mommentum-final/frontend/src/data/albums.ts'
];

albumTsPaths.forEach(p => {
  fs.writeFileSync(p, albumsTsContent, 'utf8');
  console.log('Wrote updated albums.ts to:', p);
});
