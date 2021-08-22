'use strict'

const defaultConfig = require('./rules-js')

module.exports = Object.assign({}, defaultConfig, {
    'react/display-name': 'off',
    'react/jsx-no-bind': 'error',
    'react/no-find-dom-node': 'warn',
    'react/prop-types': 'error',
    'react/self-closing-comp': ['error', { 'component': true, 'html': true }],
})
