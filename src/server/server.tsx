/* eslint-disable @typescript-eslint/no-var-requires */
import path from "path";
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Helmet from "react-helmet";

// files
import App from "../client/App";

// constants
const PORT = 3003;

const app = express();

if (process.env.NODE_ENV !== "production") {
    const webpack = require("webpack");
    const webpackConfig = require("../webpack.client.js");

    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");

    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            logLevel: "silent",
            publicPath: webpackConfig.output.publicPath
        })
    );

    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname)));

app.get("*", (req, res) => {
    const context = {};

    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    res.set("content-type", "text/html");
    res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no">
          <meta name="google" content="notranslate">
          ${helmet.title.toString()}
        </head>
        <body>
          <div id="root">${html}</div>
          <script type="text/javascript" src="main.js"></script>
        </body>
      </html>
  `);
});

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
