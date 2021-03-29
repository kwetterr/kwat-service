const bodyParser = require('body-parser')

const express = require('express')
const app = express()

// Routes.
const routes = require('./Routes/PostsRoutes');

// Middleware.
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/', routes);

module.exports = app