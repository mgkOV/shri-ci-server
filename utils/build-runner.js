const { spawn } = require("child_process");
const axios = require("axios");
const config = require("config");
const https = require("https");

const JWT = config.get("jwt");
const URL = "https://hw.shri.yandex/api";

const agent = new https.Agent({
  rejectUnauthorized: false
});

const shriApi = require("../api/shri-api");

const buildRunner = {
  buildList: [],

  currentBuild: null,

  addBuilds(tasks) {
    this.buildList = this.buildList.concat(tasks);
    this.runBuilder();
  },

  runBuilder() {
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
      const { id: buildId } = this.currentBuild;
      console.log(`Started building ${buildId}...`);

      const buildLog = `Starting child process with 'node index.js' Received SIGINT, killing child process... Parent process exiting, terminating child...`;

      const startTime = new Date();

      const buildData = {
        buildId,
        dateTime: startTime
      };

      await shriApi.postBuildStart(buildData);

      const endTime = new Date().getTime();
      const duration = endTime - startTime.getTime();

      const finishedBuild = {
        buildId,
        duration,
        success: true,
        buildLog
      };

      await shriApi.postBuildFinish(finishedBuild);

      console.log(`Finished building ${buildId}...`);

      const nextBuild = this.buildList.shift();
      this.currentBuild = nextBuild ? nextBuild : null;

      if (this.currentBuild) {
        this.build();
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  killBuildProcess() {
    clearTimeout(this.timerId);
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
