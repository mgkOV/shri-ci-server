require("regenerator-runtime/runtime");
require("ignore-styles");
require("url-loader");
require("file-loader");
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "syntax-dynamic-import",
    "dynamic-import-node",
    "@babel/plugin-proposal-class-properties"
  ]
});

const config = require("config");

const port = config.get("port");
const server = require("./server");

server.listen(port, () => {
  console.log(`CI server listening on port ${port}!`);
});
