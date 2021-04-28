const express = require('express')
const app = express()

// Routes.
const postRoutes = require('./routes/PostsRoutes');
const kwatRoutes = require('./routes/KwatsRoutes');

// Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/posts', postRoutes);
app.use('/', kwatRoutes);

module.exports = app