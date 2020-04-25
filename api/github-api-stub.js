const githubApi = {
  async getRepo(repoName) {},

  async getBranch(repoName, mainBranch) {},

  async getCommit(repoName, commitHash) {
    return {
      sha: commitHash,
      commit: {
        author: {
          name: "Monalisa Octocat"
        },
        message: "Fix all the bugs"
      }
    };
  },

  async getCommits(repoName, mainBranch, since) {
    return [
      {
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
        commit: {
          author: {
            name: "Monalisa Octocat"
          },
          message: "Fix all the bugs"
        }
      }
    ];
  }
};

module.exports = githubApi;
