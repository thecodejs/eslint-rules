# ESlint Rules

Standard ESlint rules for JavaScript, ReactJS and TypeScript developers

## Installation

```
npm i @thecodejs/eslint-rules --save
```


## Usage
These rules can be only used in .eslintrc file to apply rules.

```js
const Rules = require('@thecodejs/eslint-rules')

module.exports = {
    env: {...},
    extends: {...},
    parserOptions: {...},
    rules: { ...Rules.JavaScriptRules }
}
```

## Available rules:
```
JavaScriptRules - For JavaScript projects
ReactJsRules    - For ReactJS Projects
ReactTsRules    - For ReactJS with TypeScript projects
```


## For Developer
To publish this package, execute following command:
```
npm publish --access public
```


## License
See in LICENSE
