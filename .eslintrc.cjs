/** @type {import("eslint").Linter.Config} */

import { quoteProps } from './prettier.config.cjs'

// Note: this config has been migrated to eslint.config.mjs via
// npx @eslint/migrate-config .eslintrc.json

module.exports = {
  extends: ['plugin:astro/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {}
    }
  ]
}
