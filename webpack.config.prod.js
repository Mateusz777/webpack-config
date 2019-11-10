const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader','sass-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}