/**
 * Created by xiaoxx on 2017/9/20.
 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RootPath = require('./config');

module.exports = merge(base,{
    plugins:[
        new MiniCssExtractPlugin({
                filename: 'style.css',
                allChunks: true
            }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify("production")
            },
            _RootPath: JSON.stringify(RootPath[process.env.NODE_ENV])
        })
    ],
    optimization:{minimizer: [new UglifyJSPlugin()]}
});