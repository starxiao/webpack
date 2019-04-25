/**
 * Created by xiaoxx on 2017/9/20.
 */
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(base,{
    plugins:[
        new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin(),
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