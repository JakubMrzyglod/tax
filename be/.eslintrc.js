module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    'jest.api.config.js',
    'jest.config.js',
    'jest.functions.config.js',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': 2,
    indent: 'off',
    'quote-props': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'object-curly-spacing': 0,
    'import/no-unresolved': 0,
    'new-cap': 0,
    'no-console': 1,
    'require-jsdoc': 0,
    'prefer-promise-reject-errors': 0,
  },
};
