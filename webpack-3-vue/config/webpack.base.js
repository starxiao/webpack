/**
 * Created by xiaoxx on 2017/9/20.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin =require("html-webpack-plugin");
const RootPath = require('./config');

var isProd = process.env.NODE_ENV === 'prod';
module.exports = {
    entry: {
        vendor: ['vue', 'vue-router'],
        app: path.resolve(__dirname, '../src'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: 'bundle.js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: isProd?{
                    loaders:{
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }:{}
            },
            {
                test: /\.css$/,
                loader: isProd?ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }):['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                include: [path.resolve(__dirname, '../src')]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]?[hash]'
                }
            },
        ]

    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src'),
            '~static': path.resolve(__dirname, '../static'),
            '~components': path.resolve(__dirname, '../src/components')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'commons.js',
            minChunks: Infinity,
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue',
            VueRouter: 'vue-router',
            axios: 'axios'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/static/template.html'),
            hash: isProd
        })
    ]
};