require('dotenv/config')
require('./db')

const express = require('express')

const { isAuthenticated } = require('./middleware/jwt.js')

const app = express()

require('./config')(app)

const path = require('path')
app.use(express.static(path.join(__dirname, '/client/build')))

const auth = require('./routes/auth')
const uploadRouter = require('./routes/upload')
const userRouter = require('./routes/user')
const videoRouter = require('./routes/video')
const visionBoardRouter = require('./routes/visionBoard')
const imageBoxRouter = require('./routes/imageBox')

app.use('/auth', auth)
app.use('/upload', uploadRouter)
app.use('/api/users', isAuthenticated, userRouter)
app.use('/api/videos', isAuthenticated, videoRouter)
app.use('/api/visions', isAuthenticated, visionBoardRouter)
app.use('/api/imgboxes', isAuthenticated, imageBoxRouter)

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + '/client/build/index.html')
})

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
