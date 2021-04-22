'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const foodRoutes = require('./routes/food-routes.js');
const snackRoutes = require('./routes/snack-routes.js');

const notFound = require('./error-handling/404.js');
const errors = require('./error-handling/500.js');

app.use(express.json());

app.use(logger);
app.use(foodRoutes);
app.use(snackRoutes);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}