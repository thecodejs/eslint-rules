'use strict'

const mergeObject = require('lodash/fp/merge')
const defaultConfig = require('./rules-js')

module.exports = mergeObject(defaultConfig, {
    'react/display-name': 'off',
    'react/jsx-no-bind': 'error',
    'react/no-find-dom-node': 'warn',
    'react/prop-types': 'error',
    'react/self-closing-comp': ['error', { 'component': true, 'html': true }],
})
