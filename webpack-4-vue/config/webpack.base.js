/**
 * Created by xiaoxx on 2017/9/20.
 */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin =require("html-webpack-plugin");
const RootPath = require('./config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


var isProd = process.env.NODE_ENV === 'prod';
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: '[name].[hash].js',
    },
    module: {
        noParse: /node_modules/,
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: isProd?{
                    loaders:MiniCssExtractPlugin.loader}:{}
            },
            {
                test: /\.css$/,
                loader: isProd ? MiniCssExtractPlugin.loader:['style-loader','css-loader']
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
        new VueLoaderPlugin(),
        // new webpack.ProvidePlugin({
        //     Vue: 'vue',
        //     VueRouter: 'vue-router',
        //     axios: 'axios'
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/template.html'),
            hash: isProd
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization:{
        splitChunks:{
            minSize: 0,
            cacheGroups:{
                libs:{
                    test: /js\\a\.js/,
                    name: 'libs',
                    chunks: 'initial',
                },
                node:{
                    test: /\\node_modules\\/,
                    name: 'node',
                    chunks: 'all'
                }
                // commons:{
                //     test: /index\.js$/,
                //     name: 'commons',
                //     chunks: 'initial',
                // },
                // config:{
                //     chunks: 'initial',
                //     test: '/config/',
                //     name: 'config'
                // },
                // default: false
            }
            // chunks: 'async',
            // minSize: 30000,
            // maxSize: 0,
            // minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // automaticNameDelimiter: '~',
            // name: true,
            // cacheGroups: {
            //     vendors: {
            //         test: '/[\\/]node_modules[\\/]/',
            //         priority: -10
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true
            //     }
            // }
        },
    }
}; 