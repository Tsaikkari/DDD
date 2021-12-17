const router = require('express').Router()
const uploader = require('../config/cloudinary.config')

// upload image to Cloudinary
router.post('/', uploader.single('image'), (req, res, next) => {
  try {
    res.json({ secure_url: req.file.path })
  } catch (err) {
    next(new Error(err))
  }
})

module.exports = router
