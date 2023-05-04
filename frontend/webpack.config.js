/* eslint-disable */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* eslint-enable */

const param = {
  title: 'Wb parser',
  entryPath: './src/main.tsx',
  distPath: './dist',
  templatePath: './src/assets/index.html',
};

module.exports = {
  entry: path.resolve(__dirname, param.entryPath),
  output: {
    path: path.resolve(__dirname, param.distPath),
    filename: 'index.[contenthash].js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~api': path.resolve(__dirname, 'src/api'),
      '~context': path.resolve(__dirname, 'src/context'),
      '~features': path.resolve(__dirname, 'src/features'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~libs': path.resolve(__dirname, 'src/libs'),
      '~types': path.resolve(__dirname, 'types'),
      '~utils': path.resolve(__dirname, 'src/utils'),
      '~ui': path.resolve(__dirname, 'src/ui'),
    },
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.scss',
      '.sass',
      '.css',
      '.yaml',
      '.yml',
    ],
    fallback: {
      stream: false,
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    https: false,
    port: 8080,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:5000/',
        changeOrigin: true,
        secure: false,
      },
    ],
    historyApiFallback: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false, // this option will solve the issue
            },
          },
        },
        exclude: /node_modules/,
      },
      { test: /\.(js)$/, use: 'source-map-loader', enforce: 'pre' },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // array of paths
              resources: ['./src/assets/css/variables.scss'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
    new HtmlWebpackPlugin({
      templateParameters: { title: param.title },
      template: param.templatePath,
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
};
