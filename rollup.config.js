import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import _ from 'lodash';

let browser = {
    input: 'src/browser.js',
    output: {
        file: 'dist/browser.js',
        format: 'iife',
        name: 'Origami'
    },
    plugins: [
        resolve({
            browser: true
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};

let browserMinified = _.cloneDeep(browser);
browserMinified.output.file = 'dist/browser.min.js';
browserMinified.plugins.push(uglify());

let cjs = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'esm',
        name: 'Origami'
    },
    external: [ 'three' ],
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [['@babel/preset-env', { modules: false }], '@babel/preset-flow'],
        })
    ]
};

export default [ cjs, browser, browserMinified ];
