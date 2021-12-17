const router = require('express').Router()
const uploader = require('../config/cloudinary.config')

const VisionBoard = require('../models/VisionBoard.model')
const ImageBox = require('../models/ImageBox.model')
const User = require('../models/User.model')
const { isAuthenticated } = require('./../middleware/jwt.js')

// get image boxes
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const imgBoxes = await ImageBox.find({})
    res.status(200).json(imgBoxes)
  } catch (err) {
    next(new Error(err.message))
  }
})

// upload image to Cloudinary
router.post('/', uploader.single('image'), (req, res, next) => {
  try {
    res.json({ secure_url: req.file.path })
  } catch (err) {
    next(new Error(err))
  }
})

// add image box to vision board
router.post('/', isAuthenticated, async (req, res, next) => {
  try {
    const { text, user, id, imgPath } = req.body
    if (!imgPath || !user || !id) {
      res.status(400)
      return
    }

    const userInfo = await User.findById(user._id)

    const image = await ImageBox.create({
      imgPath: imgPath,
      text,
      user: userInfo._id,
      visionBoard: id,
    })

    const updatedBoard = await VisionBoard.findByIdAndUpdate(
      image.visionBoard,
      {
        $push: { images: image._id },
      }
    )

    res.status(200).json(updatedBoard)
  } catch (err) {
    next(new Error(err.message))
  }
})

// delete imgbox /api/imgboxes/:id
router.delete('/:id', isAuthenticated, async (req, res, next) => {
  try {
    await ImageBox.findByIdAndDelete(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(new Error(error.message))
  }
})

module.exports = router
