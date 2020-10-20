const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
module.exports = function(env){
    return merge(base(env), {
        devServer:{
            contentBase: path.resolve(__dirname,'../dist'),
            compress: true,
            host: 'localhost',
            hot: true,
            port: 8080,
            proxy:{
                "/api": {
                    target:"http://localhost:8090",
                },
            },
        },
        watchOptions:{
            ignored: /node_modules/
        }
    });
}