const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-figstrap.js',
    library: {
      name: 'reactFigstrap',
      type: 'umd',
    },
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  }
};