# ESlint Rules

Standard ESlint rules for JavaScript, ReactJS and TypeScript developers

## Installation

```
npm i @thecodejs/eslint-rules --save
```


## Usage
These are only ESLint rules and user need to configure other properties too. 

Instead use other recoommended packages.

```
@thecodejs/eslint-config-js
@thecodejs/eslint-config-react
@thecodejs/eslint-config-react-ts
```

These rules can be only used in `.eslintrc.js` file to apply rules.

```js
const Rules = require('@thecodejs/eslint-rules')

module.exports = {
    env: {...},
    extends: {...},
    parserOptions: {...},
    rules: { ...Rules.JavaScriptRules }
}
```
For Prettier, `.prettierrc.js`
```js
module.exports = require('@thecodejs/eslint-rules/prettier-config')
```

## Available rules:
```
JavaScriptRules - For JavaScript projects
ReactJsRules    - For ReactJS Projects
ReactTsRules    - For ReactJS with TypeScript projects
PrettierRules   - For Prettier
```


## For Developer
To publish this package, execute following command:
```
npm publish --access public
```


## License
See in LICENSE
