var webpack = require('webpack');
var config = require('./webpack.base.js');

config.entry.app.unshift('./build/dev.client.js');

config.plugins = config.plugins.concat([
                                       	new webpack.HotModuleReplacementPlugin(),
                                       	//new webpack.NoEmitOnErrorsPlugin()
                                       ])

module.exports = config;