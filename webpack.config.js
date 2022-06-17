const { join } = require("path")
module.exports = {
    entry: "./src/main.js",
    output: {
        path: join(__dirname, "lib"), // 出口路径
        filename: "index.js" // 出口文件名
    }
}