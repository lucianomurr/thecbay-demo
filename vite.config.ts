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
      static: true,
      prerender: {
        routes: async () => {
          return [
            '/',
            '/about',
            '/blog',
            {
              contentDir: 'src/content/blog',
              transform: (file: PrerenderContentFile) => {
                // do not include files marked as draft in frontmatter
                if (file.attributes.draft) {
                  return false;
                }
                // use the slug from frontmatter if defined, otherwise use the files basename
                const slug = file.attributes.slug || file.name;
                return `/blog/${slug}`;
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
