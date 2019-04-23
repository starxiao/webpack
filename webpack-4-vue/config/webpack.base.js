/**
 * Created by xiaoxx on 2017/9/20.
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV === 'prod';

module.exports = {
    mode: isProd ? 'production' : 'development', 
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: '[name].[hash].js',
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
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@vue/babel-preset-app']
                    }

                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]?[hash]'
                    }
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
    optimization:{
        splitChunks: {
            minSize: 0,
            automaticNameDelimiter: '-',
            cacheGroups: {
                libs: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'libs',
                    priority: -10,
                },
                commons:{
                    test: /[\\/]commons[\\/]index\.js/,
                    minSize: 0,
                    chunks: 'all',
                    name: 'commons',
                    priority: -20
                }
            }
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/template.html'),
            hash: isProd
        }),
        new BundleAnalyzerPlugin()
    ]
}; 