/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/components/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/components'),
    library: '@lucid/components-react',
    libraryTarget: 'umd',
    publicPath: '/dist/components',
    umdNamedDefine: true
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    }
  }
};
