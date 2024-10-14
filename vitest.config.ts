/// <reference types="vitest" />
import { getViteConfig } from "astro/config"

export default getViteConfig({
  test: {
    // Vitest configuration options
    // use the APIs globally like Jest
    globals: true,
    environment: 'node',
  }
})