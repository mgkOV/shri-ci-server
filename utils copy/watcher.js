/* Утилита для автопроверки репозитория на github
  Есть недочет - при добавлении НЕпоследнего комита в лист билдов (/build/request) до первой проверки,
  утилита будет считать его последним, а все комиты, идущие после, как новые,
  и поставит их в очередь на сборку.

  Еще нужно добавить скачивание обновленного репозитория
*/

var moment = require("moment");

const shriApi = require("../api/shri-api");
const githubApi = require("../api/github-api");
const { addBuilds } = require("./build-runner");

let isRunning;

// генератор автопроверки комитов
async function* watchCommits(period = 3000, repoName, mainBranch) {
  // Дата последней проверки
  let lastCheckDate;
  while (isRunning) {
    // Сохраняем лист билдов и последний хэш
    const response = await shriApi.getBuildList();
    const buildList = response.data;
    let lastHash = null;

    if (buildList.length > 0) {
      lastHash = buildList[0].commitHash;
    }

    // ждем
    await new Promise(resolve => setTimeout(resolve, period));
    if (!lastHash) continue;

    // дата комита с гитхаба
    // возможно стоит добаить логику проверки хэши в const response = await shriApi.getBuildList() для решения недочета

    let commitDateStr = await getLastCommitDate(repoName, lastHash);
    if (!commitDateStr) continue;

    let lastCommitDate =
      moment(commitDateStr)
        .utc()
        .add(1, "s")
        .format("YYYY-MM-DD[T]HH:mm:ss") + "Z";
    /*
    Сравниваем даты чтобы уйти от проблемы последней проверки и последнего комита
    */

    if (lastCheckDate && new Date(lastCheckDate) > new Date(lastCommitDate)) {
      lastCommitDate = lastCheckDate;
    }

    //получаем новые комиты
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
      .reverse();

    //добавляем новые комиты в сборку
    for await (let value of addToList(buildsToAdd)) {
      console.log(value);
    }

    lastCheckDate =
      moment()
        .utc()
        .format("YYYY-MM-DD[T]HH:mm:ss") + "Z";

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
    // проверяем наличие настроек
    if (!response || !response.data || !response.data.repoName) return;

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
