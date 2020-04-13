const express = require('express');
const morgan = require('morgan');
const path = require('path');
let serverRenderer;
// const watcher = require("./utils/watcher");

require('express-async-errors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

if (process.env.NODE_ENV === 'test') {
  serverRenderer = (req, res) => {
    res.sendFile(path.join('client', 'build', 'index.html'));
  };
} else {
  serverRenderer = require('./renderer');
}

//регистрируем routes
app.use('^/$', serverRenderer);

app.use(express.static(path.join('client', 'build')));

require('./routes')(app);

app.get('*', serverRenderer);

module.exports = app;
