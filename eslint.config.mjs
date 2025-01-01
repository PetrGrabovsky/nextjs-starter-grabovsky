import path from 'node:path';
import url from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import promisePlugin from 'eslint-plugin-promise';
import regexpPlugin from 'eslint-plugin-regexp';
import eslintComments from 'eslint-plugin-eslint-comments';
import securityPlugin from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import testingLibrary from 'eslint-plugin-testing-library';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

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
  ),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      promise: promisePlugin,
      security: securityPlugin,
      sonarjs,
      unicorn,
      regexp: regexpPlugin,
      'eslint-comments': eslintComments,
      'testing-library': testingLibrary,
      react: reactPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'promise/always-return': 'off',
      'security/detect-unsafe-regex': 'error',
      'security/detect-non-literal-require': 'error',
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-child-process': 'error',
      'security/detect-object-injection': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-possible-timing-attacks': 'error',
      'sonarjs/cognitive-complexity': ['error', 15],
      'sonarjs/no-duplicate-string': 'error',
      'sonarjs/no-identical-functions': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/no-nested-switch': 'error',
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
      'testing-library/no-debugging-utils': 'error',
      'testing-library/prefer-screen-queries': 'error',
      'testing-library/no-container': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'import/no-cycle': 'error',
      'import/no-unused-modules': 'error',
    },
  },
];

export default eslintConfig;
