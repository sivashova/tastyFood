const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = {
    entry: './dev/index.js',
    output: {
        path: path.resolve(__dirname, 'site'),
        filename: 'bundle.[chunkhash].js'
    },
    devtool: isDev && 'eval-source-map',
    watch: true,
    devServer: {
        contentBase: path.resolve(__dirname, 'site'),
        host: 'localhost',
        port: 9090,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },
            {
                test: /icons.*\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: '[name]'
                        }
                    },
                    'svgo-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
                exclude: /icons/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: isDev ? '[name]-[hash].[ext]' : 'images/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: isDev ? '[name]__[local]_[hash:base64:5]' : '[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')(),
                            ]
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new WebpackMd5Hash(),
        new MiniCSSExtractPlugin({
            filename: 'style.[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            template: './dev/template/index.html',
            filename: 'index.html',
            // inject: false
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve('./dev/static'),
                to: path.resolve('./site')
            }
        ])
    ]
}