const { join } = require("path")
    // 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: join(__dirname, "lib"), // 出口路径
        filename: "index.js", // 出口文件名
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        open: true,
        port: 30000
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", 'less-loader']
        }, {
            test: /\.(png|jpg|gif|jpeg)$/i,
            type: 'asset',
            parser: {
                dataUrlCondition: {
                    maxSize: 20 * 1024
                }
            },
            generator: {
                filename: 'image/[hash:6][ext]'
            }
        }, ]
    }
}