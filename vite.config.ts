import { defineConfig, styleResolves } from 'vite-react';

export default defineConfig({
  server: {
    port: 2186,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
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
