const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExctract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    
    output: {
        clean: true,
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
        ]
    },

    optimization: {},
    plugins: [
        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'generic.html',
            template: './src/generic.html'
        }),
        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'elements.html',
            template: './src/elements.html'
        }),
        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'index3.html',
            template: './src/index3.html'
        }),
        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'landing.html',
            template: './src/landing.html'
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