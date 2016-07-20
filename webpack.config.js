/**
 * Created by ryan on 16/7/14.
 */

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path    = require('path'),
    env = 'dev';    //    dev(开发) / pro(生产)

var config = {
    entry: {
        index: path.resolve(__dirname, 'build/index.js')/*,
        vender: ['zepto', 'underscore', 'backbone']*/
    },
    output: {
        path: path.resolve(process.cwd(), ''),
        filename: env === 'pro' ? '[name].[hash].bundle.js' : '[name].bundle.js'/*,
        libraryTarget: 'var',
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
    resolve: {
      extensions: ['', '.js', '.less']
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
    ],
    watch:true
};

var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

var DefinePlugin =  new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify('production')
    }
});

if( 'dev' === env ) {
    config['devtool'] = 'source-map';
} else if( 'pro' === env ) {
    config.plugins.push( UglifyJsPlugin );
    config.push( DefinePlugin );
}

module.exports = config;