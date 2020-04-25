const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const path = require('path');
const axios = require('axios');
const axiosRetry = require('axios-retry');

axiosRetry(axios, { retries: 4, retryDelay: axiosRetry.exponentialDelay });

const clone = require('./middleware/clone');
const checkout = require('./middleware/checkout');
const { port, serverHost, serverPort } = require('./agent-conf');

const PORT = process.env.PORT || port;
const SERVER_HOST = process.env.SERVER_HOST || serverHost;
const SERVER_PORT = process.env.SERVER_PORT || serverPort;

module.exports = (app) => {
  app.post('/build', clone, checkout, async (req, res) => {
    let { build } = req.body;
    const startTime = new Date();

    try {
      const { stdout, stderr } = await exec(build.buildCommand, {
        cwd: path.join('.', 'storage'),
      });
      console.log('Finish build...');

      const duration = new Date().getTime() - startTime.getTime();
      const result = {
        id: build.id,
        status: 'Success',
        log: stdout,
        port: PORT,
        duration,
      };

      await axios.post(
        `http://${SERVER_HOST}:${SERVER_PORT}/notify-build-result`,
        result
      );
    } catch (error) {
      console.log('Finish error...');

      const duration = new Date().getTime() - startTime.getTime();
      const result = {
        id: build.id,
        status: 'Failed',
        log: error.stderr,
        port: PORT,
        duration,
      };

      await axios.post(
        `http://${SERVER_HOST}:${SERVER_PORT}/notify-build-result`,
        result
      );
    }
  });
};
