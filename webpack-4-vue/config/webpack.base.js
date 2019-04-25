/**
 * Created by xiaoxx on 2017/9/20.
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === 'prod';

module.exports = {
    mode: isProd ? 'production' : 'development', 
    devtool: isProd ? 'none' : 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: isProd ? '[name].[contenthash].js' : '[name].js' ,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use:{
                    loader: 'vue-loader',
                },             
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'../src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@vue/babel-preset-app']
                        }
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]?[hash]'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:{
                    loader: 'file-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                }
            }
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/static/template.html'),
            hash: isProd
        }),
    ]
}; 