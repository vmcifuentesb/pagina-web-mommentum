/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0E11',
        carbon: '#1F2023',
        concrete: '#2A2B30',
        graphite: '#6B7280',
        silver: '#D1D5DB',
        gallery: '#F4F4F6',
        pure: '#FFFFFF',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        condensed: ['"Oswald"', '"Bebas Neue"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
