/* eslint-disable import/no-extraneous-dependencies */
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'

export default [
	{
		// input: 'build/index.js',
		input: 'index.ts',
		output: {
			file: 'build/index.umd.js',
			format: 'umd',
			name: 'Log',
			sourcemap: true
		},
		external: ['fs', 'http', 'https', 'child_process'],
		plugins: [
			replace({
				include: ['node_modules/uuid/**'],
				delimiters: ['', ''],
				values: {
					'crypto.randomBytes': "require('randombytes')"
				}
			}),
			typescript({
				tsconfig: './tsconfig.browser.json'
			}),
			resolve({
				browser: true
				// preferBuiltins: false
			}),
			commonjs({ extensions: ['.js', '.ts'] }),
			globals(),
			builtins()
		]
	},
	{
		// input: 'build/index.js',
		input: 'index.ts',
		output: {
			file: 'build/index.cjs.js',
			format: 'cjs',
			name: 'Log',
			sourcemap: true
		},
		external: ['fs', 'http', 'https', 'child_process'],
		plugins: [
			replace({
				include: ['node_modules/uuid/**'],
				delimiters: ['', ''],
				values: {
					'crypto.randomBytes': "require('randombytes')"
				}
			}),
			typescript({
				tsconfig: './tsconfig.json'
			}),
			resolve({
				browser: false
				// preferBuiltins: false
			}),
			commonjs({ extensions: ['.js', '.ts'] }),
			globals(),
			builtins()
		]
	},
	{
		// input: 'build/index.js',
		input: 'index.ts',
		output: {
			file: 'build/index.esm.js',
			format: 'esm',
			name: 'Log',
			sourcemap: true
		},
		external: ['fs', 'http', 'https', 'child_process'],
		plugins: [
			replace({
				include: ['node_modules/uuid/**'],
				delimiters: ['', ''],
				values: {
					'crypto.randomBytes': "require('randombytes')"
				}
			}),
			typescript({
				tsconfig: './tsconfig.json'
			}),
			resolve({
				browser: false
				// preferBuiltins: false
			}),
			commonjs({ extensions: ['.js', '.ts'] }),
			globals(),
			builtins()
		]
	}
]
