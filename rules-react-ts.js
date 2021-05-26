'use strict'

const mergeObject = require('lodash/fp/merge')
const defaultConfig = require('./rules-react')

module.exports = mergeObject(defaultConfig, {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'all' }]
})
