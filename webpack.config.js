const path = require("path");
const cwd = require("process").cwd;
const webpack = require("webpack");

module.exports = {
    context: path.resolve(cwd(), "app"),
    entry: [path.resolve(cwd(), "app", "app.js"), "webpack-hot-middleware/client?reload=true"],
    output: {
        path: path.resolve(cwd(), "app"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"]
                }
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [
            //         'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
            //     ] 
            // },
            {
                test: /\.css/,
                loader:"style-loader!css-loader"
            }
        ]
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        modules: [
            "node_modules",          
            path.resolve(cwd(), "app")
        ] 
    },
    watch: true
}