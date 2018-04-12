module.exports = {
  mode: 'production',
  entry: './client/index.js',
  resolve: {
    alias: {
      // hyperhtml/cjs is returned by hypermorphic
      // so that aliasing viperhtml as hyperhtml/cjs
      // will basically nullify viperhtml require
      'viperhtml': 'hyperhtml/cjs'
    }
  }
};
