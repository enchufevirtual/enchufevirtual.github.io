const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        clean: true
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@images': path.resolve(__dirname, './public/assets/'),
            '@hooks': path.resolve(__dirname, './hooks/'),
            '@public': path.resolve(__dirname, './public/'),
            '@containers': path.resolve(__dirname, './src/containers/'),
            '@context': path.resolve(__dirname, './src/context/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'public/[name].[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public", "assets"),
                    to: "assets"
                }
            ]
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}