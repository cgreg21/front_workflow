var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var chokidar = require('chokidar');
var config = require('./webpack.dev.js');
var compiler = webpack(config);
var hotMiddleWare = require('webpack-hot-middleware')(compiler);

var port = 8080;

chokidar.watch('./*.html').on('all', function(action,path){
	console.log(action+': '+path);
	hotMiddleWare.publish({action: 'reload'});
})

var server = new webpackDevServer(compiler, {
	hot: true,
	contentBase: './',
	quiet: false,
	noInfo: false,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
});

server.use(hotMiddleWare);

server.listen(port, function(err){
	if(err) {
		console.log(err)
	} else {
		console.log('http://localhost:'+port+"\n");
	}
})