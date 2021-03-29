const express = require('express')
const app = express()

// Routes.
const routes = require('./Routes/PostsRoutes');

// Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/', routes);

module.exports = app