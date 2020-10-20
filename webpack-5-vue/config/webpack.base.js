const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function(env, argv) {
    return {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '',
            filename: env.prod ? '[name].[contenthash].js' : '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: {
                        loader: 'vue-loader'
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: env.prod ? MiniCssExtractPlugin.loader : 'vue-style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                esModule: false
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use:{
                        loader: 'html-loader'
                    }
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
                }
            ],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../src'),
                '@pages': path.resolve(__dirname, '../src/pages'),
                '@components': path.resolve(__dirname, '../src/components'),
                '@commons': path.resolve(__dirname, '../src/commons'),
                '@static': path.resolve(__dirname, '../src/static'),
                '@store': path.resolve(__dirname, '../src/store')
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname,'../src/static/template.html'),
            }),
        ]
    }
}