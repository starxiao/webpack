/**
 * Created by xiaoxx on 2017/9/20.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
module.exports = merge(base,{
    // devtool: 'inline-source-map',
    devServer:{
        contentBase: path.resolve(__dirname,'../dist'),
        host: 'huodong.500boss.com',
        allowedHosts: ['huodong.500boss.com'],
        hot: true,
        // https: true,
        proxy:{
            "/api": {
                target:"http://10.0.1.15/~xiaoxx",
                // secure: false
            },
        },
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     _RootPath: JSON.stringify("//huodong.500boss.com/~xiaoxx/webpack")
        // })
    ]
});