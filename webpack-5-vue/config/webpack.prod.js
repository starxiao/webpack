const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(env) { 
    return merge(base(env), {
        plugins:[
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            })
        ],
        optimization: {
            minimizer: [
                new UglifyJSPlugin({
                    include: path.resolve(__dirname, '../src')
                }),
                new OptimizeCSSAssetsPlugin()
            ],
            splitChunks: {
                automaticNameDelimiter: '-',
                cacheGroups: {
                    libs: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        name: 'libs',
                        priority: -10,
                    },
                    commons: {
                        test: /[\\/]commons[\\/]index\.js/,
                        minSize: 0,
                        chunks: 'all',
                        name: 'commons',
                        priority: -20
                    },
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        priority: -30,
                        enforce: true,
                    },
                }
            }
        }
    });
}