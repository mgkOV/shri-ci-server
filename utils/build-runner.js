const { spawn } = require("child_process");

const shriApi = require("../api/shri-api");

const buildLog = `Starting child process with 'node index.js' Received SIGINT, killing child process... Parent process exiting, terminating child...`;

const buildRunner = {
  buildList: [],

  currentBuild: null,

  addBuilds(tasks) {
    this.buildList = this.buildList.concat(tasks);
    this.runBuilder();
  },

  runBuilder() {
    // проверяем запущен ли this.build()
    if (!this.currentBuild) {
      const nextBuild = this.buildList.shift();
      this.currentBuild = nextBuild ? nextBuild : null;
    }
    if (this.currentBuild) {
      this.build();
    }
  },

  async build() {
    try {
      const { id, status, start } = this.currentBuild;
      // start для билда со статусом InProgress
      const startTime = start ? new Date(start) : new Date();
      console.log(`Started building ${id}...`);

      // если статус InProgress пропускаем этот блок кода
      if (status === "Waiting") {
        const buildData = {
          buildId: id,
          dateTime: startTime
        };
        // менеяем статус на InProgress
        await shriApi.postBuildStart(buildData);
      }

      const duration = new Date().getTime() - startTime.getTime();
      const finishedBuild = {
        buildId: id,
        duration,
        success: true,
        buildLog
      };

      // эмулируем задержку
      await new Promise(resolve => setTimeout(resolve, 2000));

      // менеяем статус на Success
      await shriApi.postBuildFinish(finishedBuild);

      console.log(`Finished building ${id}...`);

      // ставим следующий билд на сборку
      const nextBuild = this.buildList.shift();
      this.currentBuild = nextBuild ? nextBuild : null;

      if (this.currentBuild) {
        this.build();
      }
    } catch (err) {
      console.error(err.message);
    }
  },

  resetBuildRunner() {
    this.buildList = [];
    this.currentBuild = null;
    // this.killBuildProcess();
  }
};

module.exports = {
  addBuilds: buildRunner.addBuilds.bind(buildRunner),
  reset: buildRunner.resetBuildRunner.bind(buildRunner)
};
