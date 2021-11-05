const BundleAnalyzerPlugin = require(
    'webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const mode = process.env.NODE_ENV === 'development' ?
    'development' :
    'production';

module.exports = {
  mode: mode,
  entry: {
    app: './src/app.ts',
  },
  output: {
    filename: mode === 'development' ?
        '[name].bundle.js' :
        '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/images/[hash][ext]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          mode === 'development' ?
              'style-loader' :
              {
                loader: ExtractCssChunks.loader,
                options: {
                  hmr: mode === 'development',
                },
              },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.STATS || 'disabled',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ExtractCssChunks({
      filename: mode === 'development' ?
          '[name].css' :
          '[name].[hash].bundle.css',
      chunkFilename: mode === 'development' ? '[id].css' : '[id].[hash].css',
    }),
    new WebpackManifestPlugin({
      writeToFileEmit: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,ts,jsx}',
      },
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: [
      path.resolve(__dirname, 'public'),
    ], // previous contentBase
    port: 3000,
    hot: true, // default in 4.4.0
  },
  experiments: {
    topLevelAwait: true,
  },
};
