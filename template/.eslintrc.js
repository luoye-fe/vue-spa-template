module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    globals: {
        ENV: false
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
		"indent": ["error", "tab"],
		"semi": ["error", "always"],
	    "space-before-function-paren": ["error", "never"],
	    "no-unused-vars": ["off"],
	    "no-extend-native": ["error", {
	        "exceptions": ["Object", "Date", "String", "Array", "Function"]
	    }],
	    "no-unneeded-ternary": ["error", {
	        "defaultAssignment": false
	    }],
    	{{#if_eq lintConfig "standard"}}
        'arrow-parens': 0,
    	{{/if_eq}}
    	{{#if_eq lintConfig "airbnb"}}
        'import/no-unresolved': 0,
    	{{/if_eq}}
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
