import path from 'node:path';
import url from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintComments from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import regexpPlugin from 'eslint-plugin-regexp';
import securityPlugin from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import tailwindcss from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import unicorn from 'eslint-plugin-unicorn';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:testing-library/react',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
  ),
  {
    plugins: {
      'simple-import-sort': simpleImportSort, // Řazení importů a exportů
      promise: promisePlugin, // Pravidla pro práci s Promisy
      security: securityPlugin, // Detekce bezpečnostních problémů
      sonarjs, // Detekce bugů a code smells
      unicorn, // Různá užitečná pravidla (např. filename-case, no-null)
      regexp: regexpPlugin, // Pravidla pro práci s regulárními výrazy
      'eslint-comments': eslintComments, // Pravidla pro ESLint direktivy v komentářích
      'testing-library': testingLibrary, // Pravidla pro Testing Library
      react: reactPlugin, // Pravidla pro React
      import: importPlugin, // Pravidla pro importy (např. no-cycle, no-unused-modules)
      tailwindcss, // Pravidla pro Tailwind CSS
    },
    rules: {
      'prettier/prettier': 'error', // Integrace s Prettierem

      // Importy
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-cycle': 'error',
      'import/no-unused-modules': 'error',

      // Bezpečnost
      'security/detect-unsafe-regex': 'error',
      'security/detect-non-literal-require': 'error',
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-child-process': 'error',
      'security/detect-object-injection': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-possible-timing-attacks': 'error',

      // SonarJS
      'sonarjs/cognitive-complexity': ['error', 20],
      'sonarjs/no-duplicate-string': 'error',
      'sonarjs/no-identical-functions': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/no-nested-switch': 'error',

      // Unicorn
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
            kebabCase: true,
          },
        },
      ],
      'unicorn/no-null': 'off',

      // Testing Library
      'testing-library/no-debugging-utils': 'error',
      'testing-library/prefer-screen-queries': 'error',
      'testing-library/no-container': 'error',
      'testing-library/prefer-explicit-assert': 'error',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/no-unstable-nested-components': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],

      // Tailwind CSS
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-arbitrary-value': 'error',

      // Promise
      'promise/always-return': 'off',
      'no-async-promise-executor': 'error',

      // Max Length
      'max-len': [
        'warn',
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true, // URL adresy se ignorují
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreRegExpLiterals: false,
        },
      ],

      // Další pravidla
      'no-await-in-loop': 'error',
      'require-await': 'error', // Zakazuje await v cyklu
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Povoluje console.warn a console.error
      'no-debugger': 'error',
      'no-alert': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }], // Striktní porovnávání s výjimkou null
      'no-var': 'error', // Nepoužívat var
    },
  },
];

export default eslintConfig;
