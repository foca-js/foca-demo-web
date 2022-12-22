/// <reference types='vitest/globals' />
/// <reference types='vitest' />

import { defineConfig } from 'vite-react';

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    coverage: {
      enabled: true,
      all: true,
      include: ['src/**'],
      reporter: ['html', 'lcov', 'text-summary'],
    },
  },
});
