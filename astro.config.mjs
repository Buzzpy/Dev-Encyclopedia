import { defineConfig } from "astro/config"

import inoxToolsRuntimeLogger from "@inox-tools/runtime-logger"

export default defineConfig({
  site: "https://astro-devpedia.pages.dev/",
  // Reference - https://inox-tools.fryuni.dev/runtime-logger
  integrations: [inoxToolsRuntimeLogger()]
})
