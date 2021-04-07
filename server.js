
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' })

// Database connection
mongoose.connect(process.env.DATABASE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Database Connection Error: ${err.message}`);
})

// Import models globally.
require('./src/models/Posts');
require('./src/models/Kwats');

// Serve app.
const app = require('./src/app');
const server = app.listen(3000, () => {
  console.log(`Express running on port: ${server.address().port}`)
})

module.exports = app