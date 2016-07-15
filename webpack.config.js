/**
 * Created by ryan on 16/7/14.
 */

var webpack = require('webpack'),
    path    = require('path');

var config = {
    entry: {
        index: path.resolve(__dirname, 'build/index.js')/*,
        vender: ['zepto', 'underscore', 'backbone']*/
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
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
    ]
};

module.exports = config;