import { defineConfig } from 'vite-react';

export default defineConfig({
  server: {
    port: 2186,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  legacy: {
    enable: false,
  },
});
