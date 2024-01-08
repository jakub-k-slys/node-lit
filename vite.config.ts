import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    build: {
        outDir: 'github-pages',
        sourcemap: true
    },
    css: {
        devSourcemap: true
    },
    plugins: [eslint()],
    test: {
        coverage: {
            exclude: [ '**/node_modules/**'],
            reporter: ['text', 'json-summary', 'json'],
            reportOnFailure: true
      },
      exclude: ['**/node_modules/**'],
    }
});