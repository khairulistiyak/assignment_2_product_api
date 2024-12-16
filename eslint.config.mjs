import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['src/**/*.ts'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly', // Add process as a global variable (readonly)
      },
    },
  },
  {
    rules: {
      eqeqeq: 'off',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    },
  },

  {
    ignores: [
      '.node_modules/*',
      'dist/*', // Add this line to ignore dist files
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
