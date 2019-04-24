/**
 * Created by xiaoxx on 2017/9/20.
 */
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
module.exports = merge(base,{
    devServer:{
        contentBase: path.resolve(__dirname,'../dist'),
        compress: true,
        host: 'huodong.500boss.com',
        allowedHosts: ['huodong.500boss.com'],
        hot: true,
        // port: 80,
        // https: true,
        // proxy:{
        //     "/api": {
        //         target:"http://10.0.1.15/~xiaoxx",
        //         // secure: false
        //     },
        // },
    },
    watchOptions:{
        ignored: /node_modules/
    }
});