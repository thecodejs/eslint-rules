'use strict'

const defaultConfig = require('./rules-react')

module.exports = Object.assign({}, defaultConfig, {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'all' }]
})
