const { promisify } = require("util");
const rimraf = promisify(require("rimraf"));
const exec = promisify(require("child_process").exec);
const path = require("path");
const axios = require("axios");

const githubOptions = {
  headers: { Accept: "application/vnd.github.v3+json" }
};

const { ghToken } = require("../agent-conf");

if (ghToken) {
  githubOptions.headers["Authorization"] = `token ${ghToken}`;
}

module.exports = async (req, res, next) => {
  try {
    res.sendStatus(200);

    let { build } = req.body;

    await rimraf(path.join(".", "storage"));

    // клонируем репозиторий в storage
    const repository = await axios.get(
      `https://api.github.com/repos/${build.repoName}`,
      githubOptions
    );

    await exec(`git clone ${repository.data.clone_url} storage`);
    console.log("Finish clone...");
    next();
  } catch (error) {
    console.log(error.message);
  }
};
