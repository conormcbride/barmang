var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: [
        './public/javascripts/angularApp'
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:3000/',
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({ inject: 'head',
            template: __dirname + "/public/index.tmpl.html"}),
        new ExtractTextPlugin("[name]-[hash].css")
    ],
    module: {
        loaders: [
            { test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"}
            ,
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url?limit=100000&name=img/[name].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
                loader: 'url?limit=100000&name=fonts/[name].[ext]'
            }
        ]
    }
};