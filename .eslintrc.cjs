
module.exports = {
  root: true,
  env: { node: true, commonjs: true, browser: true, es6: true, es2020: true },
  globals: { process: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@stylistic/js'],
  rules: {},
}
