/** @type {import("prettier").Config} */
module.exports = {
  // standard configuration
  ...require('prettier-config-standard'),
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    },
    {
      files: ['*.jsx, *.tsx, *.ts, *.js'],
      options: {
        trailingComma: 'es5'
      }
    }
  ]
}
