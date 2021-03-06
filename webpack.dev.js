/* eslint-disable @typescript-eslint/no-var-requires */
// 해당 파일은 필요 없으나 학습을 위해 남겨놓음
// production환경에서는 삭제할것
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.tsx',
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index_dev.html',
        }),
    ],
};
