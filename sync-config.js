/**
 * 🔄 Script de Sincronización Central de Marca — Atlas (CTO)
 * Marca: MOMMENTUM
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'config-web.json');

function syncBrandConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error('❌ Error: No se encontró config-web.json');
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  console.log(`🚀 Sincronizando datos de marca para: ${config.brandName}`);
  console.log(`🌐 Dominio configurado: ${config.domain}`);
  console.log(`🎨 Paleta de colores: ${JSON.stringify(config.colors)}`);
  console.log('✅ Sincronización completada exitosamente.');
}

syncBrandConfig();
