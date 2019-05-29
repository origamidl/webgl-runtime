import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import _ from 'lodash';

let browser = {
    input: 'src/browser.ts',
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
        }),
        typescript()
    ]
};

let browserMinified = _.cloneDeep(browser);
browserMinified.output.file = 'dist/browser.min.js';
browserMinified.plugins.push(uglify());

let cjs = {
    input: 'src/index.ts',
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
            presets: [['@babel/preset-env', { modules: false }]],
        }),
        typescript()
    ]
};

export default [ cjs, browser, browserMinified ];
