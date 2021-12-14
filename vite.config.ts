import { defineConfig, styleResolves } from 'vite-react';

export default defineConfig({
  server: {
    port: 2186,
  },
  styleImport: {
    options: {
      libs: [styleResolves.antd()],
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  legacy: {
    enable: false,
  },
});
