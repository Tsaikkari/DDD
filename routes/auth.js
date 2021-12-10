const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('./../middleware/jwt.js')

const saltRounds = 10

// user signup /auth/signup
router.post('/signup', async (req, res, next) => {
  try {
    const { email, password, name } = req.body

    if (email === '' || password === '' || name === '') {
      res.status(400).json({ message: 'Provide email, password and name' })
      return
    }

    const emailValid = email.includes('@')

    if (!emailValid) {
      res.status(400).json({ message: 'Provide a valid email address.' })
      return
    }

    if (password.length < 4) {
      res.status(400).json({
        message:
          'Password must have at least 4 characters and contain at least one number, one lowercase and one uppercase letter.',
      })
      return
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400).json({ message: 'User already exists' })
    }

    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = await User.create({ email, password: hashedPassword, name })
    console.log(user, 'user created')

    res.status(201).json({ user })
  } catch (err) {
    next(new Error(err))
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// user login /auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (email === '' || password === '') {
      res.status(400).json({ message: 'Provide email and password' })
      return
    }

    const user = await User.findOne({ email })

    if (!user) {
      res.status(400).json({ message: 'User not found' })
      return
    }

    const passwordCorrect = bcrypt.compareSync(password, user.password)

    if (passwordCorrect) {
      const { _id, email, name } = user
      const payload = { _id, email, name }

      // create the json web token
      const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: '12h',
      })
      res.status(200).json({ authToken: authToken })
    } else {
      res.status(401).json({ message: 'Unable to authenticate user' })
    }
  } catch (err) {
    next(new Error(err.message))
    res.status(500)
  }
})

// verify token
router.get('/verify', isAuthenticated, async (req, res, next) => {
  try {
    // if the token is valid we can access it on : req.payload
    res.status(200).json(req.payload)
    console.log('USER', req.payload)
  } catch (err) {
    next(new Error(err))
  }
})

module.exports = router
