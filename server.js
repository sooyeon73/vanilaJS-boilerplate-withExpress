const express = require("express");
const path = require("path");
const app = express();

const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpack = require("webpack");
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleWare(compiler, {
    publicPath: webpackConfig.output.publicPath,
}));

app.set("port", 3000);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(app.get("port"), () => {
    console.log("listening on port 3000..");
});