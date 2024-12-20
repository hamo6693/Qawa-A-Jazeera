const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    entry: './src/js/index.js',

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../'
                }
              },
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },

          {
            test: /\.(png|jpe?g|gif|webp)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "images",
                }
              },
            ],
          },

          {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "fonts",
                }
              },
            ],
          },

          {
            test: /\.html$/i,
            loader: 'html-loader',
          },

          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
    },

    performance: {
      hints: false
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        // compress: true,
        port: 9000,
        writeToDisk: true,
        stats: 'errors-only',
        open: true
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
          template: './src/projects.html',
          filename: 'projects.html',
        }),

        


        new HtmlWebpackPlugin({
          template: './src/about.html',
          filename: 'about.html',
        }),

        new HtmlWebpackPlugin({
          template: './src/contact.html',
          filename: 'contact.html',
        }),

        

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ],
};