const router = require('express').Router()
const uploader = require('../config/cloudinary.config')

const VisionBoard = require('../models/VisionBoard.model')
const ImageBox = require('../models/ImageBox.model')

// add a vision board /api/visions

// get vision bords of the logged in user /api/visions/user

// delete vision board /api/visions/:id

// add an image box

// get image box that belongs to a vision board

// delete image box

// add image box to the vision board

module.exports = router
