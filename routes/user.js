const router = require('express').Router()
const User = require('../models/User.model')

// get users /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
    console.log(users)
    res.status(200).json(users)
  } catch (error) {
    next(new Error(error.message))
  }
})

// TODO: fix: this router does not exist ?!
// update user /api/users/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { email, password, name, user } = req.body
    const userInfo = await User.findById(req.params.id)

    if (userInfo) {
      name = req.body.name || user.name
      email = req.body.email || user.email
      if (req.body.password) {
        password = req.body.password
      }
    }

    const updatedUser = await userInfo.save()

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } catch (err) {
    next(new Error(err))
  }
})

// delete user /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    const deletedUser = await User.findByIdAndRemove(user._id)
    res.status(201).json({ message: 'User deleted' }, deletedUser)
  } catch (error) {
    next(new Error(error.message))
  }
})

module.exports = router
