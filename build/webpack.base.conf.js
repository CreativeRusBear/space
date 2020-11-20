const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const mozjpeg = require('imagemin-mozjpeg');
const pngquant=require('imagemin-pngquant');
require('core-js/stable');
require('regenerator-runtime/runtime');

const paths ={
	src  : path.resolve(__dirname, '../src'),
	dist : path.resolve(__dirname, '../dist'),
};

module.exports={
	externals: {
		paths: paths,
	},
	entry: {
		index_head: [`${paths.src}/js/index.js` ],
	},
	output: {
		filename   : 'js/[name].bundle.js',
		path       : paths.dist,
		publicPath : '.',
	},
	module: {
		rules: [ {
			test    : /\.js$/,
			loader  : 'babel-loader',
			exclude : '/node_modules/',
		}, {
			test    : /\.(png|jpe?g|svg|gif)$/,
			loader  : 'file-loader',
			options : {
				name     : '[path][name].[ext]',
				emitFile : false,
			},
		}, {
			test : /\.css$/,
			use  : [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader  : 'css-loader',
					options : {
						sourceMap: true,
					},
				}, {
					loader  : 'postcss-loader',
					options : {
						sourceMap : true,
						config    : {path: `${paths.src}/js/postcss.config.js`},
					},
				},
			],
		} ],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [ path.resolve(__dirname, '../dist') ],
		}),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			filename: path.resolve(__dirname, '../dist/index.html'),
     		chunks: ['index_head'],
			chunksConfig: {          
				async: ['index_head']  
			}
   		}),
   		new HtmlWebpackInjector(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new copyWebpackPlugin([
			{
				from : `${paths.src}/manifest.json`,
				to   : `${paths.dist}/manifest.json`,
			},
			{
				from : `${paths.src}/serviceWorker.js`,
				to   : `${paths.dist}/serviceWorker.js`,
			},
			{
				from : `${paths.src}/img`,
				to   : `${paths.dist}/img`,
			},
		]),
		new ImageminPlugin({
			interlaced  : true,
			progressive : true,
			svgPlugins  : [ {removeViewBox: false} ],
			plugins     : [
				mozjpeg({quality: 50}),
				pngquant(),
			],
		}),
	],
};
