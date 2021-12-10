const router = require('express').Router()
const User = require('../models/User.model')
const { isAuthenticated } = require('./../middleware/jwt.js')

// get users /api/users
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const users = await User.find()
    //console.log(users)
    res.status(200).json(users)
  } catch (error) {
    next(new Error(error.message))
  }
})

// get user profile /api/users/profile
router.get('/profile', isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.find({ user: req.payload }).select('-password')
    console.log(user, 'user in get router')

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    }
  } catch (error) {
    next(new Error(error.message))
  }
})

// update user /api/users/:id
router.put('/:id', isAuthenticated, async (req, res, next) => {
  try {
    console.log(req.body)
    const update = req.body
    const user = await User.find({ user: req.payload })

    if (!user) {
      return next(new Error('No user'))
    }

    if (update.name) {
      user.name = update.name
    }
    if (update.email) {
      user.email = update.email
    }
    if (update.password) {
      user.password = update.password
    }

    await User.findByIdAndUpdate(user._id, user, { new: true })

    res.status(200).json(user)
  } catch (err) {
    next(new Error(err.message))
  }
})

// delete user /api/users/:id
router.delete('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    const deletedUser = await User.findByIdAndRemove(user._id)
    res.status(201).json({ message: 'User deleted' }, deletedUser)
  } catch (error) {
    next(new Error(error.message))
  }
})

module.exports = router
