const githubApi = {
  async getRepo(repoName) {
    // const response = await axios.get(`${URL}/repos/${repoName}`, options);
    // return response.data;
  },

  async getBranch(repoName, mainBranch) {
    // const response = await axios.get(`${URL}/repos/${repoName}/branches/${mainBranch}`, options);
    // return response.data;
  },

  async getCommit(repoName, commitHash) {
    return {
      sha: commitHash,
      commit: {
        author: {
          name: 'Monalisa Octocat',
        },
        message: 'Fix all the bugs',
      },
    };
  },

  async getCommits(repoName, mainBranch, since) {
    return [
      {
        sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
        commit: {
          author: {
            name: 'Monalisa Octocat',
          },
          message: 'Fix all the bugs',
        },
      },
    ];
  },
};

module.exports = githubApi;
