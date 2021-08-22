const jsRules = require('./rules-js')
const prettierRules = require('./prettier-config')
const reactRules = require('./rules-react')
const reactTsRules = require('./rules-react-ts')

module.exports = {
    JavaScriptRules: jsRules,
    PrettierRules: prettierRules,
    ReactJsRules: reactRules,
    ReactTsRules: reactTsRules
}
