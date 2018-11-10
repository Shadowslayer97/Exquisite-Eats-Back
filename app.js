const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const cron = require('node-cron');
const updateStatusCron = require('./server/crons').updateStatus;

dotenv.load({ path: '.env' });
// Set up the express app
const app = express();
app.use(cors())

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

cron.schedule("* * * * *",() => {
  console.log("Cron task => updateStatus");
  updateStatusCron();
})

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
