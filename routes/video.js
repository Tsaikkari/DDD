const router = require('express').Router()

const Video = require('../models/Video.model')
const User = require('../models/User.model')
const { isAuthenticated } = require('./../middleware/jwt.js')

// get all videos /api/videos
router.get('/', async (req, res, next) => {
  try {
    const videos = await Video.find({}).populate('user', 'id name')
    res.status(200).json(videos)
    console.log(videos)
  } catch (err) {
    next(new Error(err.message))
  }
})

// get videos filtered by title
router.get('/user-videos?title=:query', async (req, res, next) => {
  try {
    const video = await Video.find({
      user: req.payload,
      title: req.query.title,
    })
    res.status(200).json(video)
  } catch (err) {
    next(new Error(err.message))
  }
})

// get logged in user videos /api/videos/user-videos
router.get('/user-videos', async (req, res, next) => {
  try {
    const videos = await Video.find({ user: req.payload })
    res.status(200).json(videos)
  } catch (err) {
    next(new Error(err.message))
  }
})

// add a video /api/videos
router.post('/', async (req, res, next) => {
  try {
    const { title, url, user } = req.body
    if (!url || !user || !title) {
      res.status(400)
      return
    }

    const userInfo = await User.findById(user._id)
    const video = await Video.create({
      title,
      url,
      user: userInfo.id,
    })
    res.status(201).json(video)
  } catch (err) {
    next(new Error(err.message))
  }
})

// get a video /api/video/:id
router.get('/:id', async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id).populate(
      'user',
      'name email'
    )
    if (!mongoose.Types.ObjectId.isValid(video._id)) {
      res.status(400).json({ message: 'Video id is not valid' })
      return
    }
    res.status(404).json(video)
  } catch (err) {
    next(new Error(err.message))
  }
})

// delete video /api/videos/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await Video.findByIdAndDelete(req.params.id)
    res.status(204).end()
  } catch (err) {
    next(new Error(err.message))
  }
})

module.exports = router
