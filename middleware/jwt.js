const jwt = require('express-jwt')

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'payload',
  getToken: getTokenFromHeaders,
})

const isAdmin = async (req, res, next) => {
  const user = req.payload

  if (user && user.isAdmin === true) {
    return next()
  } else {
    return next(new Error('Not authorized as an admin'))
  }
}

function getTokenFromHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    const token = req.headers.authorization.split(' ')[1]
    return token
  }
  return null
}

module.exports = {
  isAuthenticated,
}
