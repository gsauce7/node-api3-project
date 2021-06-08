function logger(req, res, next) {
  // DO YOUR MAGIC

  // console.log(`${req.method}, ${req.url}, ${req.timestamp}`)
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.url
  console.log(`[${timestamp}], ${method}, ${url}`)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log('works')
  next()
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('works')
  next()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('works')
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}