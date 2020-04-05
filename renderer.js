import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

import App from "./client/src/components/App";
import configureStore from "./client/src/redux/store";
import loadState from "./loadState";

const path = require("path");
const fs = require("fs");
const util = require("util");

module.exports = async (req, res) => {
  try {
    const readFile = util.promisify(fs.readFile);
    const filePath = path.resolve(__dirname, "client", "build", "index.html");
    const htmlData = await readFile(filePath, "utf8");

    const store = configureStore();

    await loadState(req.originalUrl, store);

    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const reduxState = JSON.stringify(store.getState());

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        // добавляем state
        .replace("__REDUX_STATE__={}", `__REDUX_STATE__=${reduxState}`)
    );
  } catch (error) {
    console.error(error);
    return res.status(404).end();
  }
};
