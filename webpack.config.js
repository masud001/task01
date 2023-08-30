const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	performance: {
		hints: false,
	},
	entry: {
		bundel: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000, // Convert images < 8kb to base64 strin
							// name: 'assets/images/[name].[hash].[ext]',
							name: 'assets/images/[name].[hash].[ext]',
						},
					},
				],
			},
		],
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Assignment Task',
			filename: 'index.html',
			template: 'src/index.html',
		}),
		new MiniCssExtractPlugin({
			linkType: 'text/css',
			filename: '[name].style.css',
		}),
	],
};
