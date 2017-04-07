const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const compiler = webpack(webpackConfig);

const app = express();
app.use(webpackDevMiddleware(compiler, {publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get("/*", (req, res) => {
    console.log(webpackConfig.output.path);
    res.sendFile(path.resolve(webpackConfig.output.path, "index.html"));
})

app.listen(3000, () => console.log("listening on port 3000"));