const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

// google login
router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile'],
    session: false,
  }),

  async (req, res, next) => {
    try {
      const user = await req.payload
      const id = user._id

      // create the json web token
      const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: '12h',
      })
      res.status(200).json({ token: token })

      res.cookie('token', token)
      //res.redirect('http://localhost:3000/users/profile')
    } catch (err) {
      next(new Error(err.message))
    }
  }
)

module.exports = router
