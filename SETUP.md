# Setting Up a CRA project a la GuardTools style

## ESLint
We use ESLint for both checking code standard and auto formating. Uninstall Prettier or disabled it since it will conflict with used ESLint rules.

### Prettier
Uninstall or disable the Prettier extension.

### Install eslint plugin
Run `> npm i -D @stylistic/eslint-plugin-js`
Run `> npm i -D eslint-plugin-react-refresh@latest`

### Add ESLint config file
Add `.eslintrs.cjs` file in project root.

### Set ESLint as default formatter in vscode workspace setting
This is done in `.vscode/settings.json.`

### Add ESLint script in package.json
Add the following scripts in package.json file.\
`"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",`\
`"lint-fix": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0 --fix",`

### Add ESLint Ignore file
Add `.eslintignore` in projct root
