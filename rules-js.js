module.export = {
    'arrow-parens': ['error', 'as-needed'],
    'babel/semi': ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'import/newline-after-import': [
        'error',
        {
            'count': 2
        }
    ],
    'import/no-unambiguous': 'off',
    'import/no-unresolved': 'error',
    'import/order': 'error',
    'import/prefer-default-export': 'off',
    'indent': [
        'error',
        4,
        {
            'SwitchCase': 1
        }
    ],
    'multiline-ternary': 'off',
    'no-case-declarations': 'off',
    'no-multiple-empty-lines': [
        'error',
        {
            'max': 2
        }
    ],
    'no-unused-vars': [
        'error',
        {
            'argsIgnorePattern': '^_',
            'vars': 'all',
        }
    ],
    'object-curly-newline': [
        'error',
        {
            'consistent': true
        }
    ],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': 'off',
    'quote-props': 'off',
    'quotes': ['error', 'single'],
    'sort-keys': [
        'error',
        'asc',
        {
            'caseSensitive': false,
            'natural': true
        }
    ],
    'space-before-function-paren': ['error', 'never']
}
