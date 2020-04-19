const api = require("./api");

module.exports = (agents) => {
  setInterval(() => {
    console.log(agents);
  }, 3000);
};
