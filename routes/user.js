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

module.exports = router

// get user profile /api/users/profile
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password')

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

// PUT /api/users/:userId - update user
// const updateUserProfile = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user._id)

//     if (!mongoose.Types.ObjectId.isValid(user._id)) {
//       res.status(400).json({ message: 'User id is not valid' })
//       return
//     }

//     if (user) {
//       user.name = req.body.name || user.name
//       user.email = req.body.email || user.email
//       if (req.body.password) {
//         user.password = req.body.password
//       }

//       const updatedUser = await user.save()

//       res.status(200).json({
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         isAdmin: updatedUser.isAdmin,
//         token: generateToken(updatedUser._id),
//       })
//     }
//   } catch (error) {
//     next(new Error(error.message))
//   }
// }

// // DELETE /api/users/:userId - delete user
// const deleteUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user._id)

//     if (!mongoose.Types.ObjectId.isValid(user._id)) {
//       res.status(400).json({ message: 'User id is not valid' })
//       return
//     }

//     const deletedUser = await User.findByIdAndRemove(user._id)
//     res.status(201).json({ message: 'User deleted' }, deletedUser)
//   } catch (error) {
//     next(new Error(error.message))
//   }
// }
