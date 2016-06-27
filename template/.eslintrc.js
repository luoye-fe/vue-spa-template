module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    {{#if_eq lintConfig "standard"}}
    extends: 'standard',
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    extends: 'airbnb-base',
    {{/if_eq}}
    plugins: [
        'html'
    ],
    'rules': {
    {{#if_eq lintConfig "standard"}}
        'arrow-parens': 0,
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
        'import/no-unresolved': 0,
    {{/if_eq}}
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
