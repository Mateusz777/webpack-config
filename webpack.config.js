const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.(sa|sc|c)ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            title: "test konfiguracji webpacka i trening grida z bem i scss"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}