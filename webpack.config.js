/**
 * Created by ryan on 16/7/14.
 */

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path    = require('path');

var config = {
    entry: {
        index: path.resolve(__dirname, 'build/index.js')/*,
        vender: ['zepto', 'underscore', 'backbone']*/
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].[hash].bundle.js',
        /*libraryTarget: 'var',
        publicPath: '/',
        chunkFilename: '[name].bundle.js'*/
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.less$/,
                loader: 'css-to-string-loader!css-loader!less-loader'
            }
        ]
    },
    externals: [
        {
            "zepto": "$"
        },
        {
        "underscore": "_"
        },
        {
            "backbone": "Backbone"
        }
    ],
    plugins: [
        /*new webpack.optimize.CommonsChunkPlugin({
            names: ['vender', 'manifest']
        })*/
        new HtmlWebpackPlugin({
            title: 'ryan test',
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, 'build/template.html')
        })
    ]
};

module.exports = config;