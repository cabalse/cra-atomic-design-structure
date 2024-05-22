
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
  rules: {
    'max-len': ["warn", { "code": 80 }],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 0,
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'no-multiple-empty-lines': ["warn", { "max": 1, "maxEOF": 0 }],
    'eol-last': ["warn", "always"],
    'sort-imports': ['warn', {
      'ignoreCase': false,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': true
    }],
    'semi-spacing': "warn",
    'comma-spacing': ["error", { "before": false, "after": true }],
    'prefer-const': "warn",
    "key-spacing": ['warn', {
      "beforeColon": false,
      "afterColon": true
    }]
  },
}
