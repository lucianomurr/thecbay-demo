/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { type PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  optimizeDeps: {
    include: ['@angular/common'],
  },
  build: {
    target: ['es2020'],
    reportCompressedSize: true,
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      nitro: {
        preset: 'vercel',
      },
      static: true,
      prerender: {
        routes: async () => {
          return [
            '/',
            '/blog',
            '/about',
            {
              contentDir: '/src/content/blog',
              transform: (file: PrerenderContentFile) => {
                if (file.attributes?.draft) {
                  return false;
                }
                return `/archived/${file.attributes.slug || file.name}`;
              },
            },
          ];
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
