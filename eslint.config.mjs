import { FlatCompat } from '@eslint/eslintrc';
import promisePlugin from 'eslint-plugin-promise';
import securityPlugin from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
  ),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      promise: promisePlugin,
      security: securityPlugin,
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
    },
  },
];

export default eslintConfig;
