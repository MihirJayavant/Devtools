import { defineConfig, splitVendorChunkPlugin } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin(), splitVendorChunkPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
