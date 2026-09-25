/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // Permite usar describe, it e expect sem precisar importá-los em todo arquivo
    environment: 'node', // Define o ambiente de execução como Node.js
  },
})