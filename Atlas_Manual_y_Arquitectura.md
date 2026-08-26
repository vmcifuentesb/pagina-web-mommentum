# 🏛️ Manual de Arquitectura y Lógica de Dirección — Atlas (CTO)
**Proyecto:** MOMMENTUM

Este documento establece las responsabilidades técnicas, arquitectura de software, lineamientos de la Web y sincronizaciones para **MOMMENTUM**.

---

## 📐 1. Principios Técnicos de Atlas
* **Frontend Web Ultrarrápido**: Arquitectura estática (SSG) basada en Astro o Next.js, optimizada para PageSpeed 100/100 y SEO de alta indexación.
* **Content Collections (Markdown)**: Los artículos de blog residen como archivos `.md` en `frontend/src/content/blog/`, permitiendo que Anita cree contenido sin bases de datos lentas.
* **Sincronización de Marca Central**: El archivo `config-web.json` actúa como la fuente única de verdad para colores, enlaces y parámetros globales.
* **Orquestación de Ecosistema**: Atlas coordina los activos entre la Web, la App y las campañas de redes sociales.

---

## 🛠️ 2. Flujo de Trabajo Técnico
1. **Actualización de Marca**: Modificar `config-web.json` y ejecutar `node sync-config.js`.
2. **Compilación de la Web**: Ejecutar `npm run build` en `frontend/` para generar las rutas estáticas de blog y páginas.
3. **Despliegue Continuo**: Integrar con GitHub Actions o despliegue vía FTP/Hosting.
