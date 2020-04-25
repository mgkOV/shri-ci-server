const { promisify } = require('util');
const rimraf = promisify(require('rimraf'));
const exec = promisify(require('child_process').exec);
const path = require('path');
const axios = require('axios');
const axiosRetry = require('axios-retry');
axiosRetry(axios, { retries: 4, retryDelay: axiosRetry.exponentialDelay });

const githubOptions = {
  headers: { Accept: 'application/vnd.github.v3+json' },
};

const { ghToken } = require('../agent-conf');

const GH_TOKEN = process.env.GH_TOKEN || ghToken;

if (GH_TOKEN) {
  githubOptions.headers['Authorization'] = `token ${GH_TOKEN}`;
}

module.exports = async (req, res, next) => {
  try {
    res.sendStatus(200);

    let { build } = req.body;

    await rimraf(path.join('.', 'storage'));

    // клонируем репозиторий в storage
    const repository = await axios.get(
      `https://api.github.com/repos/${build.repoName}`,
      githubOptions
    );

    await exec(`git clone ${repository.data.clone_url} storage`);
    console.log('Finish clone...');
    next();
  } catch (error) {
    next(error);
  }
};
