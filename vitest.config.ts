/// <reference types="vitest" />
import { getViteConfig } from "astro/config"

export default getViteConfig(
  {
    test: {
      // Vitest configuration options
      // use the APIs globally like Jest
      globals: true,
      coverage: {
        provider: 'v8',
        include: [
          'test?(s)/**',
          'test?(-*).?(c|m)[jt]s?(x)',
          '**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
        ],
        exclude: [
          'dist/**',
          '.husky/**',
          '.vscode/**',
          '.github/**',
          'public/**',
          'coverage/',
          '**/node_modules/**',
          '**/*.astro',
          '**/script.js',
          '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier,astro,commitlint}.config.*',
        ],
        thresholds: {
          branches: 80,
          lines: 80,
          functions: 80,
          statements: 80
        }
      },
    }
  }
)