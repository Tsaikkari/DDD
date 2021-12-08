require('dotenv/config')
require('./db')

const express = require('express')

const { isAuthenticated } = require('./middleware/jwt.js')

const app = express()

require('./config')(app)

const auth = require('./routes/auth')
const userRouter = require('./routes/user')
app.use('/auth', auth)
app.use('/api/users', isAuthenticated, userRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
