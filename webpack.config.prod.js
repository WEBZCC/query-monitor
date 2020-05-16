const path = require( 'path' );

module.exports = {
  mode: 'production',
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
    ]
  },
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: path.resolve( 'build' ),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  externals: {
    react: 'react',
    reactDOM: 'reactDOM',
  },
};
