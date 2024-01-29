const js = require('@eslint/js');
const globals = require('globals');
const { rules } = require('./rules');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.node },
      sourceType: 'commonjs',
    },
    rules,
  },
];
