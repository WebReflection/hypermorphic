import alias from 'rollup-plugin-alias';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'client/index.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [
    alias({
      hypermorphic: 'node_modules/hyperhtml/esm/index.js'
    }),
    uglify({
      output: {
        comments: (node, comment) => /^!/.test(comment.value)
      }
    })
  ],
  watch: {
    exclude: ['node_modules/**']
  }
};
