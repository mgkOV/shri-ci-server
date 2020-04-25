import "regenerator-runtime/runtime";
import "ignore-styles";
import "url-loader";
import "file-loader";
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "syntax-dynamic-import",
    "dynamic-import-node",
    "@babel/plugin-proposal-class-properties",
  ],
});

import config from "config";

import server from "./server";

const port = config.get("port");

server.listen(port, () => {
  console.log(`CI server listening on port ${port}!`);
});
