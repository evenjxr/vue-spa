const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { resolve } = require('path')
const argv = require('yargs-parser')(process.argv.slice(2))

const config = {
    mode: 'development',
    entry: {
        'main': './src/main.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss', '.css', '.sass'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.js',
            '@': resolve('src')
        }
    },
    devServer:{},
    optimization: {
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[a|c]ss$/,
                loader: [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            filename: "[name].css?[hash:4]"
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    outputPath: 'img',
                    name: '[name].[ext]?[hash:4]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            hash: true,
            loading: '<span>加载中...</span>'
        }),
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: "./style/[name].css?[hash:4]"
        }),
    ]
}
module.exports = config;