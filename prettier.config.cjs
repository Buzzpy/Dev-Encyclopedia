/** @type {import("prettier").Config} */
module.exports = {
  // standard configuration
  ...require('prettier-config-standard'),
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        semi: false,
        tabWidth: 2,
        singleQuote: false
      }
    }
  ]
}
