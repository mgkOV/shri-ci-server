const rimraf = require("rimraf");
const { promisify } = require("util");
const { exec } = require("child_process");
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
    build = {
      commitHash: "d5a66494928e2f24d4",
      repoName: "mgkOV/shri-ci-test",
      buildCommand: "npm i && npm run build"
    };

    await promisify(rimraf)(path.join(".", "storage"));

    // клонируем репозиторий в storage
    const repository = await axios.get(
      `https://api.github.com/repos/${build.repoName}`,
      githubOptions
    );

    exec(`git clone ${repository.data.clone_url} storage`, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Finish clone...");

      next();
    });
  } catch (error) {
    console.log(error.message);
  }
};
