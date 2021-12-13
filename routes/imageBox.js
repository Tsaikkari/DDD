const router = require('express').Router()
const uploader = require('../config/cloudinary.config')

const VisionBoard = require('../models/VisionBoard.model')
const ImageBox = require('../models/ImageBox.model')
const User = require('../models/User.model')
const { isAuthenticated } = require('./../middleware/jwt.js')
const { default: ImgBox } = require('../client/src/components/ImgBox')

// get image boxes
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const imgBoxes = await ImageBox.find({})
    res.status(200).json(imgBoxes)
  } catch (err) {
    next(new Error(err.message))
  }
})

router.post('/upload', uploader.single('image'), (req, res, next) => {
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

// TODO: delete img /api/imgboxes/:id
router.delete('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const image = await ImageBox.findByIdAndRemove(req.params.id)
    res.status(201).json({ message: 'Image deleted' }, image)
  } catch (error) {
    next(new Error(error.message))
  }
})
module.exports = router
