import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import nodePolyfills from 'rollup-plugin-polyfill-node'

process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills({
      include: ['buffer']
    }),
  ],
  server: {
    port: 8080
  },
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
