const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExctract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,                
                use: [ 'style-loader', 'css-loader']               
            },
            {
                test: /styles.css$/,
                use:[ MiniCssExctract.loader, 'css-loader']
                            
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },

            {                
                test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                          presets: ['@babel/preset-env']
                        }
                }                                                      
            }

        ]
    },

    optimization: {
        minimize: true,
        minimizer:[
            new CssMinimizer(),
            new Terser(),
        ]

    },
    plugins: [
        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebPack({
            title: 'Mi Webpack App 2',
            filename: 'elements.html',
            template: './src/elements.html'
        }),
        new HtmlWebPack({
            title: 'Mi Webpack App 3',
            filename: 'index2.html',
            template: './src/index2.html'
        }),
        new HtmlWebPack({
            title: 'Canciones',
            filename: 'canciones.html',
            template: './src/canciones.html'
        }),
        new HtmlWebPack({
            title: 'Generic',
            filename: 'generic.html',
            template: './src/generic.html'
        }),
        new MiniCssExctract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false

        }),

        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/' }
            ]                
        }),

    ],
}