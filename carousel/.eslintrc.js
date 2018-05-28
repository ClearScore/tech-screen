module.exports = {
  parser: 'babel-eslint',
  env: {
    browswer: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  parserOptons: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [2, require('./.prettierrc')]
  }
};
