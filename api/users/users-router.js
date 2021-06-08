const express = require('express');
const router = express.Router();

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required
const User = require('./users-model.js')
const Post = require('../posts/posts-model.js')
const Users = require('./users-model.js');
const { logger, validateUserId, validateUser, validatePost } = require('../middleware/middleware.js');


router.get('/', (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  User.get()
    .then(users => {
      res.json(users)
    })
    .catch(next)
});


router.get('/:id', validateUserId, (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id

  res.json(req.user)
});

router.post('/', validateUser, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  User.insert({ name: req.name })
    .then(newUser => {
      // throw new Error('error thrown!')
      res.status(201).json(newUser)
    })
    .catch(next)

});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
});

router.delete('/:id', validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  console.log(req.user)
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  console.log(req.user)
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
  console.log(req.text)
});

// error handling middleware
router.use((err, req, res, next) => { // eslint - disable - line
  res.status(err.status || 500).json({
    customMessage: 'something horrible happened inside posts router',
    message: err.message,
    stack: err.stack
  })
})

// do not forget to export the router
module.exports = router