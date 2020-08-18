module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        singleQuote: true,
        semi: false
      }
    ]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:vue/essential', '@vue/prettier']
}
