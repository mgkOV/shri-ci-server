const express = require('express');
const axios = require('axios');
const axiosRetry = require('axios-retry');
axiosRetry(axios, { retries: 4, retryDelay: axiosRetry.exponentialDelay });

const morgan = require('morgan');
const { port, serverHost, serverPort } = require('./agent-conf');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

require('./routes')(app);

app.use(errorHandler);

const PORT = process.env.PORT || port;
const SERVER_HOST = process.env.SERVER_HOST || serverHost;
const SERVER_PORT = process.env.SERVER_PORT || serverPort;

app.listen(PORT, async function () {
  console.log(`Build agent run on port ${PORT}`);
  try {
    await axios.post(`http://${SERVER_HOST}:${SERVER_PORT}/notify-agent`, {
      port: PORT,
    });
  } catch (error) {
    console.log(error.message, error.config);
    this.close();
  }
});

async function errorHandler(err, req, res, next) {
  try {
    const { build } = req.body;
    const result = {
      id: build ? build.id : build,
      status: 'Failed',
      log: err.message,
      port,
      duration: 0,
    };

    await axios.post(
      `http://${SERVER_HOST}:${SERVER_PORT}/notify-build-result`,
      result
    );
  } catch (error) {
    console.log(error.message);
  }
}
