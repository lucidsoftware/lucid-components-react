module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'emotion'],
  rules: {
    'emotion/jsx-import': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'emotion/syntax-preference': [2, 'object'],
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/prop-types': 0
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
};
