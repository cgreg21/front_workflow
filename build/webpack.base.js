var path = require('path');
var root = path.resolve(__dirname,'../');
var webpack = require('webpack');

module.exports = {
	entry : {
		app: ['./src/style/main.css','./src/js/main.js']
	},
	output: {
		path: path.resolve(__dirname , '../dist/'),
		filename: 'app.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader']
			},
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /(node_modules|bower_components)/,
				enforce: 'pre'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				include: root
			},
			{
				test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
				loader: 'url-loader',
				query: {
					limit: 0,
					name: '[name]-[hash:7].[ext]'
				}
			}
		]
	},
	plugins: [new webpack.LoaderOptionsPlugin({
		options: {
			eslint: {
				configFile: path.resolve(root, './.eslintrc'),
				formatter: require('eslint-friendly-formatter')
			}
		}
	})]
}