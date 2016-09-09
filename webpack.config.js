const webpack = require('webpack')

module.exports = {
	entry: './index.js',
	output: {
		publicPath: './',
		path: './',
		filename: 'bundle.js'
	},
	module: [
		{
  			test: /\.js$/,
      		loader: 'babel'
  		},
  		{
  			test: /\.scss$/,
  			loader: 'style!css!sass'
  		}
	],
	babel: {
	  presets: ['es2015'],
	  plugins: ['transform-runtime']
	},
	devtools: 'source-map',
	plugins : [
		new webpack.optimize.UglifyJsPlugin({
      		compress: {
        		warnings: false
      		}
    	})
	]
}

