const axios = require("axios");
const config = require("config");

const URL = "https://api.github.com";
const options = {
  headers: { Accept: "application/vnd.github.v3+json" }
};

const ghToken = config.get("github-token");

if (ghToken) {
  options.headers["Authorization"] = `token ${ghToken}`;
}

const githubApi = {
  async getRepo(repoName) {
    const response = await axios.get(`${URL}/repos/${repoName}`, options);

    return response.data;
  },

  async getBranch(repoName, mainBranch) {
    const response = await axios.get(`${URL}/repos/${repoName}/branches/${mainBranch}`, options);

    return response.data;
  },

  async getCommit(repoName, commitHash) {
    const response = await axios.get(`${URL}/repos/${repoName}/commits/${commitHash}`, options);

    return response.data;
  },

  async getCommits(repoName, mainBranch, since) {
    const response = await axios.get(
      `${URL}/repos/${repoName}/commits?sha=${mainBranch}${since ? "&since=" + since : ""}`,
      options
    );

    return response.data;
  }
};

module.exports = githubApi;
