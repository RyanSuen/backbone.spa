/**
 * Created by ryan on 16/7/14.
 */

var webpack = require('webpack'),
    path    = require('path');

var config = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2'
    }
};

module.exports = config;