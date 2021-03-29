const express = require('express')
const app = express()

// Routes.
const routes = require('./routes/PostsRoutes');

// Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/', routes);

module.exports = app