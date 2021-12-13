const router = require('express').Router()
const uploader = require('../config/cloudinary.config')

const VisionBoard = require('../models/VisionBoard.model')
const ImageBox = require('../models/ImageBox.model')
const User = require('../models/User.model')
const { isAuthenticated } = require('./../middleware/jwt.js')

// get all vision boards /api/visions
router.get('/', async (req, res, next) => {
  try {
    const visionBoards = await VisionBoard.find({})
      .populate('user', 'id name')
      .populate('images', 'id imgPath text')
    res.status(200).json(visionBoards)
  } catch (err) {
    next(new Error(err.message))
  }
})

// add a vision board /api/visions
router.post('/', isAuthenticated, async (req, res, next) => {
  try {
    const { title, user } = req.body
    if (!title || !user) {
      res.status(400)
      return
    }

    const userInfo = await User.findById(user._id)
    const visionBoard = await VisionBoard.create({
      title,
      user: userInfo.id,
      images: [],
    })

    res.status(201).json(visionBoard)
  } catch (err) {
    next(new Error(err.message))
  }
})

// get vision boards of logged in user /api/visions/user
router.get('/user-visions', isAuthenticated, async (req, res, next) => {
  try {
    const visionBoards = await VisionBoard.find({ user: req.payload }).populate(
      'images',
      'id imgPath text'
    )

    res.status(200).json(visionBoards)
  } catch (err) {
    next(new Error(err.message))
  }
})

// delete vision board /api/visions/:id
router.delete('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const visionBoard = await ImageBox.findByIdAndRemove(req.params.id)
    res.status(201).json({ message: 'Vision Board deleted' }, visionBoard)
  } catch (error) {
    next(new Error(error.message))
  }
})

module.exports = router
