const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = 'd:/ATLAS/Marcas/MOMMENTUM/FOTOGRAFIAS';
const targetDirs = [
  'd:/ATLAS/Marcas/MOMMENTUM/pagina-web-mommentum/frontend/public/fotografias',
  'd:/ATLAS/Marcas/MOMMENTUM/pagina-web-mommentum-final/frontend/public/fotografias'
];

async function optimizeAll() {
  console.log('Starting high-performance photographic optimization with sharp...');
  
  // Clean target directories
  for (const targetBase of targetDirs) {
    if (fs.existsSync(targetBase)) {
      fs.rmSync(targetBase, { recursive: true, force: true });
    }
    fs.mkdirSync(targetBase, { recursive: true });
  }

  const folders = fs.readdirSync(sourceDir).filter(f => fs.statSync(path.join(sourceDir, f)).isDirectory());
  let totalSaved = 0;
  let totalOriginal = 0;

  for (const folder of folders) {
    const srcFolder = path.join(sourceDir, folder);
    const files = fs.readdirSync(srcFolder);

    for (const targetBase of targetDirs) {
      const dstFolder = path.join(targetBase, folder);
      fs.mkdirSync(dstFolder, { recursive: true });
    }

    for (const file of files) {
      const srcFile = path.join(srcFolder, file);
      const originalStat = fs.statSync(srcFile);
      totalOriginal += originalStat.size;

      // Optimize image: max dimension 2000px, quality 84, mozjpeg/progressive for instant rendering
      const isJpeg = file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg');
      
      for (const targetBase of targetDirs) {
        const dstFile = path.join(targetBase, folder, file);
        if (isJpeg) {
          await sharp(srcFile)
            .rotate() // auto-orient based on EXIF
            .resize({
              width: 2048,
              height: 2048,
              fit: 'inside',
              withoutEnlargement: true
            })
            .jpeg({
              quality: 84,
              progressive: true,
              mozjpeg: true
            })
            .toFile(dstFile);
        } else {
          fs.copyFileSync(srcFile, dstFile);
        }
      }

      const dstSample = path.join(targetDirs[0], folder, file);
      const optimizedStat = fs.statSync(dstSample);
      totalSaved += (originalStat.size - optimizedStat.size);
      console.log(`✓ ${folder}/${file}: ${(originalStat.size/1024/1024).toFixed(2)}MB -> ${(optimizedStat.size/1024).toFixed(0)}KB (-${Math.round((1 - optimizedStat.size/originalStat.size)*100)}%)`);
    }
  }

  console.log(`\n🎉 Optimization Complete!`);
  console.log(`Original total size: ${(totalOriginal/1024/1024).toFixed(1)} MB`);
  console.log(`Saved bandwidth: ${(totalSaved/1024/1024).toFixed(1)} MB (${Math.round(totalSaved/totalOriginal*100)}% reduction!)`);
}

optimizeAll().catch(err => {
  console.error('Optimization error:', err);
});
