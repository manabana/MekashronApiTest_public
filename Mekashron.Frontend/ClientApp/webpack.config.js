const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",

    output: {
        path: path.resolve(__dirname, "../wwwroot/dist"),
        filename: "bundle.js",
        clean: true
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })
    ]
};
