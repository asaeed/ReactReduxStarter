var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var postcssImport = require('postcss-import')
var postcssUrl = require('postcss-url')
var postcssVars = require('postcss-custom-properties')
var postcssNesting = require('postcss-nesting')
//var mixins = require('postcss-mixins')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        //exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        // use this one for dev since it provides hot module replacement for css
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader',
        
        // use this one for a separate app.css file - don't forget to include in index.html head
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader'),
        
        // if switching to global css (like sass) use this to not modify file names when imported in react
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader'),
        
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.join(__dirname, 'node_modules/font-awesome')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./font/[name].[ext]',
        include: [
          path.join(__dirname, 'node_modules/font-awesome'),
          path.join(__dirname, 'src/assets/font')
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./font/[name].[ext]',
        include: [
          path.join(__dirname, 'node_modules/font-awesome'),
          path.join(__dirname, 'src/assets/font')
        ]
      }
    ]
  },
  postcss: function(webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssUrl,
      postcssVars,
      postcssNesting,
      autoprefixer
    ];
  }
}
