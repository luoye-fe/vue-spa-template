import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { exec } from 'child_process';

export const cssLoaders = (options) => {
    options = options || {}
    function generateLoaders(loaders) {
        let sourceLoader = loaders.map((loader) => {
            let extraParamChar;
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')

        if (options.extract) {
            return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
        } else {
            return ['vue-style-loader', sourceLoader].join('!')
        }
    }

    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

export const styleLoaders = (options) => {
    let output = []
    const loaders = cssLoaders(options)
    for (let extension in loaders) {
        let loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        })
    }
    return output
}

export const openUrl = (url) => {
	const execStr = process.platform === 'win32' ? 'start' : 'open';
	exec(`${execStr} ${url}`);
}
