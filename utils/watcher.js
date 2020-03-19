const shriApi = require("../api/shri-api");
const githubApi = require("../api/github-api");
const { addBuilds } = require("./build-runner");

let isRunning;

async function* watchCommits(period = 10000, repoName, mainBranch) {
  let commitDate;
  while (isRunning) {
    const response = await shriApi.getBuildList();
    const buildList = response.data;
    let lastHash = null;

    if (buildList.length > 0) {
      lastHash = buildList[0].commitHash;
    }

    await new Promise(resolve => setTimeout(resolve, period));
    if (!lastHash) continue;

    let ghCommitDate = await getLastCommitDate(repoName, lastHash);
    if (!ghCommitDate) continue;

    let lastCommitDate = ghCommitDate;

    if (commitDate && new Date(commitDate) > new Date(lastCommitDate)) {
      lastCommitDate = commitDate;
    }

    const newCommits = await githubApi.getCommits(repoName, mainBranch, lastCommitDate);

    const buildsToAdd = newCommits
      .map(c => {
        return {
          commitMessage: c.commit.message,
          commitHash: c.sha,
          branchName: mainBranch,
          authorName: c.commit.author.name
        };
      })
      .slice(0, newCommits.length - 1)
      .reverse();

    for await (let value of addToList(buildsToAdd)) {
      console.log(value);
    }

    yield isRunning;
  }
}

async function* addToList(buildsToAdd) {
  for (let build = 0; build < buildsToAdd.length; build++) {
    await shriApi.postBuildRequest(buildsToAdd[build]);

    const builds = await shriApi.getBuildList();
    const waitingBuild = builds.data.find(b => b.commitHash === buildsToAdd[build].commitHash);

    addBuilds(waitingBuild);

    yield waitingBuild.id;
  }
}

const getLastCommitDate = async (repoName, lastHash) => {
  const lastCommit = await githubApi.getCommit(repoName, lastHash);

  return (
    lastCommit &&
    lastCommit.commit &&
    lastCommit.commit.committer &&
    lastCommit.commit.committer.date
  );
};

const startWatch = async () => {
  try {
    const response = await shriApi.getConfig();
    if (!response || !response.data) return;

    const { period, repoName, mainBranch } = response.data;
    const ms = period * 60 * 1000;

    isRunning = true;
    console.log("Run github watcher...");

    let gen = watchCommits(ms, repoName, mainBranch);

    for await (let value of gen) {
    }
  } catch (error) {
    console.error(error);
  }
};

const getStatus = () => isRunning;

const stopWatch = () => {
  isRunning = false;
  console.log("Stopped github watcher...");
};

module.exports = {
  startWatch,
  stopWatch,
  getStatus
};
