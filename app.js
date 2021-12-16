require('dotenv/config')
require('./db')

const express = require('express')
const passport = require('passport')
const { google } = require('./config/passport')

const { isAuthenticated } = require('./middleware/jwt.js')

const app = express()

require('./config')(app)

app.use(passport.initialize())
passport.use(google)

const auth = require('./routes/auth')
const userRouter = require('./routes/user')
const videoRouter = require('./routes/video')
const visionBoardRouter = require('./routes/visionBoard')
const imageBoxRouter = require('./routes/imageBox')
const youTubeRouter = require('./routes/youtube')
const googleRouter = require('./routes/google')

app.use('/auth', auth)
app.use('/api/users', isAuthenticated, userRouter)
app.use('/api/videos', videoRouter)
app.use('/api/visions', isAuthenticated, visionBoardRouter)
app.use('/api/imgboxes', imageBoxRouter)
app.use('/api/youtube', youTubeRouter)
app.use('/api/auth/google', googleRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
