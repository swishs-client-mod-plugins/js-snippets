/* The below source code is licensed under MIT. */

import scss from 'rollup-plugin-scss';
import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './src/renderer',
  output: {
    file: 'dist/renderer.js',
    format: 'esm'
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.scss']
    }),
    sucrase({
      exclude: ['node_modules/**', 'src/styles.scss'],
      transforms: ['jsx']
    }),
    scss({
      output: 'dist/styles.css',
      runtime: require('sass')
    })
  ]
};