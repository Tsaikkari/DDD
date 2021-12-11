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

// TODO
// add image box to vision board
router.post(
  '/imgbox',
  uploader.single('image'),
  isAuthenticated,
  async (req, res, next) => {
    try {
      const { text, user } = req.body
      const imgPath = req.file.path
      if (!imgPath || !user) {
        res.status(400)
        return
      }

      const userInfo = await User.findById(user._id)

      const image = await ImageBox.create({
        imgPath: imgPath,
        text,
        user: userInfo._id,
      })

      const visionBoards = await VisionBoard.find({ user: userInfo._id })
      const currentVisionBoard = visionBoards[visionBoards.length - 1]

      const updatedBoard = await VisionBoard.findByIdAndUpdate(
        currentVisionBoard._id,
        {
          $push: { images: image._id },
        }
      )

      res.status(200).json(updatedBoard)
    } catch (err) {
      next(new Error(err.message))
    }
  }
)

module.exports = router
