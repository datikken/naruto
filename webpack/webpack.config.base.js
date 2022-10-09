const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  context: __dirname,
  entry: ['../src/main.ts'],
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.vue', '.json', ".js", '.png', ".sass"],
    alias: {
      '@': path.join(__dirname, '..', 'src')
    }
  },
  output: {
    crossOriginLoading: 'anonymous',
    publicPath: '/'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 2048000
  },
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true
  },
  optimization: {minimize: true},
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['babel-preset-typescript-vue', { onlyRemoveTypeImports: true}]],
            plugins: [
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-proposal-numeric-separator",
              "@babel/plugin-proposal-nullish-coalescing-operator",
              ["@babel/plugin-proposal-decorators", {"legacy": true}],
              ["@babel/plugin-proposal-class-properties", {"loose": true}],
              ['istanbul']
            ],
            babelrc: false,
          },
        }],
      },
      {
        exclude: /node_modules/,
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
};
