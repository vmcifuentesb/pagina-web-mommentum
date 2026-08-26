const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.join(__dirname, '../public/fotografias');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      try {
        const stats = fs.statSync(fullPath);
        // Only optimize if > 300KB
        if (stats.size > 300 * 1024) {
          const buffer = fs.readFileSync(fullPath);
          const optimized = await sharp(buffer)
            .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 82, progressive: true })
            .toBuffer();
          fs.writeFileSync(fullPath, optimized);
          console.log(`Optimized ${entry.name}: ${(stats.size / 1024 / 1024).toFixed(2)}MB -> ${(optimized.length / 1024).toFixed(0)}KB`);
        }
      } catch (err) {
        console.error(`Error processing ${entry.name}:`, err.message);
      }
    }
  }
}

async function main() {
  console.log('Starting high-speed photo optimization...');
  await processDirectory(baseDir);
  console.log('Optimization complete! All photos are now lightweight and high-definition.');
}

main();
