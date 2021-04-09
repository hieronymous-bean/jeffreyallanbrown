const webpack = require('webpack');
const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = ({
  mode: 'development',
  entry: {
    main: './src/main.js',
    styles: './src/assets/scss/main.scss',
    scripts: './src/assets/js/scripts.js',
    data: './src/app/data/projects.json'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },    
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      { 
        test: /\.vue$/, 
        loader: 'vue-loader' 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [
          path.resolve(__dirname, "./static")
        ],
        loader: 'file-loader',
        options: {
          name: 'static/[name].[ext]?[hash:5]'
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: [
          path.resolve(__dirname, "./static")
        ],
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash:5]'
        },
      },
      {
        test: /\.pdf$/,
        loader: 'file-loader',
        options: {
          name: 'docs/[name].[ext]?[hash:5]'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader',
        options: {
          outputPath: '/fonts',
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      appMountId: 'app',
      title: 'Full-Stack Web Developer | Jeffrey Allan Brown',
      template: path.resolve(__dirname, '..') + '/index.html',
      baseHref: '',
      meta: [
        {
          'charset':'utf-8'
        },
        {
          'content':'ie=edge',
          'http-equiv':'x-ua-compatible'
        },
        {
          'name':'description',
          'content':'Personal portfolio website of Jeffrey Brown.'
        }
      ],
      links: [
        {
          'href': 'static/apple-touch-icon.png',
          'rel': 'apple-touch-icon',
          'sizes': '180x180'
        },
        {
          'href': 'static/favicon-32x32.png',
          'rel': 'icon',
          'sizes': '32x32'
        }
      ],
      mobile: true,
      lang: 'en-US',
      googleAnalytics: {
        trackingId: 'UA-172335033-1',
        pageViewOnLoad: true
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "static", to: "static" }
      ],
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ]
})