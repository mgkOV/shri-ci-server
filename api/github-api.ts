const axios = require("axios");
const config = require("config");

const URL = "https://api.github.com";

interface Options {
  headers: {
    Accept: string;
    Authorization?: string;
  };
}
const options: Options = {
  headers: { Accept: "application/vnd.github.v3+json" },
};

const ghToken = config.get("github-token");

if (ghToken) {
  options.headers["Authorization"] = `token ${ghToken}`;
}

const githubApi = {
  async getRepo(repoName: string) {
    const response = await axios.get(`${URL}/repos/${repoName}`, options);

    return response.data;
  },

  async getBranch(repoName: string, mainBranch: string) {
    const response = await axios.get(
      `${URL}/repos/${repoName}/branches/${mainBranch}`,
      options
    );

    return response.data;
  },

  async getCommit(repoName: string, commitHash: string) {
    const response = await axios.get(
      `${URL}/repos/${repoName}/commits/${commitHash}`,
      options
    );

    return response.data;
  },

  async getCommits(repoName: string, mainBranch: string, since: string) {
    const response = await axios.get(
      `${URL}/repos/${repoName}/commits?sha=${mainBranch}${
        since ? "&since=" + since : ""
      }`,
      options
    );

    return response.data;
  },
};

export default githubApi;
