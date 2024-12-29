/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-prisma',
    'prettier-plugin-packagejson',
    'prettier-plugin-sort-json',
    '@prettier/plugin-xml',
  ],
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
