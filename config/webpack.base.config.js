const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { resolve } = require('path')
const argv = require('yargs-parser')(process.argv.slice(2));

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const path = require('path');
// const glob = require('glob');


const config = {
    mode: 'development',
    entry: {
        'main': './src/main.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
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
                loader: 'style-loader!css-loader!sass-loader',
            },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({
            //       fallbackLoader: 'style-loader',
            //       loader: 'css-loader'
            //     })
            //   }
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
        // new ExtractTextPlugin('[name].[contenthash].css'),
        // new PurifyCSSPlugin({
        //     paths: glob.sync(path.join(__dirname, 'app/*.html')),
        // })
    ]
}
module.exports = config;