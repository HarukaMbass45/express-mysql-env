module.exports = {
  root: true,
  env: {
    'node': true,
    'jest': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unicorn',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'specs/**/*.ts',
    'src/command/generated/**/*.ts',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [1, { 'after': true }],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],
    'space-before-blocks': ['error', 'always'],
    'key-spacing': [1, { 'afterColon': true }],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      after: true,
    }],
    '@typescript-eslint/no-unused-vars': [
      'warn', // or error
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        'case': 'kebabCase',
      },
    ],
  },
};
