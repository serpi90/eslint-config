import js from '@eslint/js';
import globals from 'globals';
import rules from './rules.cjs';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.node },
      sourceType: 'module',
    },
    rules,
  },
];
