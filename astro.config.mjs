import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://stretch-ceilings-landing.vercel.app',
  vite: {
    optimizeDeps: {
      exclude: ['aria-query', 'axobject-query', 'cssesc'],
    },
  },
});
