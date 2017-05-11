var webpack = require('webpack');
var config = require('./webpack.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('app.css');

config.plugins = config.plugins.concat([
	extractCSS,
	new webpack.optimize.UglifyJsPlugin({
		comments:false
	})
]);

var cssLoaders = config.module.loaders[0].loaders;

config.module.loaders[0].loaders = undefined;
config.module.loaders[0].loader = extractCSS.extract(cssLoaders.slice(1, 10));

module.exports = config;