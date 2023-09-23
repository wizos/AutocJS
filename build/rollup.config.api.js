import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

const PLUGIN_CONFIG = [
  nodeResolve({
    mainFields: ['module', 'jsnext', 'main', 'browser']
  }),
  commonjs(),
  terser()
]

export default [
  // build for documentation
  {
    input: './outline.js',
    output: {
      name: 'Outline',
      file: './docs/js/outline.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './anchors.js',
    output: {
      name: 'Anchors',
      file: './docs/js/anchors.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './chapters.js',
    output: {
      name: 'Chapters',
      file: './docs/js/chapters.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './drawer.js',
    output: {
      name: 'Drawer',
      file: './docs/js/drawer.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './toolbar.js',
    output: {
      name: 'Toolbar',
      file: './docs/js/toolbar.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './message.js',
    output: {
      name: 'Message',
      file: './docs/js/message.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  }
]