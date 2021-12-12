const router = require('express').Router()
const uploader = require('../config/cloudinary.config')

const Image = require('../models/Image.model')
const User = require('../models/User.model')
const { isAuthenticated } = require('../middleware/jwt.js')

// get images /api/images
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const images = await Image.find({}).populate('user', 'id name')
    res.status(200).json(images)
    console.log(images)
  } catch (err) {
    next(new Error(err.message))
  }
})

// get logged in user images /api/images/user-images
router.get('/user-images', isAuthenticated, async (req, res, next) => {
  try {
    const images = await Image.find({ user: req.payload })
    res.status(200).json(images)
  } catch (err) {
    next(new Error(err.message))
  }
})

// add an image box /api/images
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

      const image = await Image.create({
        imgPath: imgPath,
        text,
        user: userInfo._id,
      })

      res.status(201).json(image)
    } catch (err) {
      next(new Error(err.message))
    }
  }
)

// get an image /api/images/:id
router.get('/:id', async (req, res, next) => {
  try {
    const image = await Image.findById(req.params.id).populate(
      'user',
      'name email'
    )
    if (!mongoose.Types.ObjectId.isValid(image._id)) {
      res.status(400).json({ message: 'Image id is not valid' })
      return
    }
    res.status(404).json(image)
  } catch (err) {
    next(new Error(err.message))
  }
})

// delete image /api/images/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await Image.findByIdAndDelete(req.params.id).then(() => {
      res.status(200).json({ message: 'image deleted' })
    })
  } catch (err) {
    next(new Error(err.message))
  }
})

module.exports = router
