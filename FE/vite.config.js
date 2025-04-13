// vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // List your html files here, e.g:
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        auth: resolve(__dirname, 'auth.html'),
        calc: resolve(__dirname,'calc.html'),
        entries: resolve(__dirname, 'entries.html'),
        homepage: resolve(__dirname, 'homepage.html')

      },
    },
  },
  base: '/https://github.com/anne-chin/WEBBI-FE.git/',
});

