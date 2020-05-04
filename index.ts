import config from "config";

import server from "./server";

const port = config.get("port");

server.listen(port, () => {
  console.log(`CI server listening on port ${port}!`);
});
