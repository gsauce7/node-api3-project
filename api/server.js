const express = require('express');
// const morgan = require('morgan')
// const helmet = require('helmet')
const { logger, validateUserId, validateUser, validatePost } = require('./middleware/middleware')
const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json())
// global middlewares and the user's router need to be connected here
server.use(logger, validateUserId, validateUser, validatePost)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
