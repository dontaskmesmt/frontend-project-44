import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        node: true,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',


      '@stylistic/indent': ['error', 2], 
      '@stylistic/quotes': ['error', 'single'], 
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'], 
      '@stylistic/space-before-function-paren': ['error', 'always'], 
    },
  },
]