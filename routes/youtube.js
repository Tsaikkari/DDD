const router = require('express').Router()
const axios = require('axios')

const User = require('../models/User.model')
const { isAuthenticated } = require('./../middleware/jwt.js')

router.get('/video', async (req, res, next) => {
  // try {
  //   const apikey = process.env.API_KEY
  // axios
  //   .get(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${req.query.queryterm}&key=${apikey}`
  //   )
  //   .then((res) => {
  //     res.status(200).json(es.data.items[1].snippet.title)
  //   })
  //   res.status(200)
  // } catch (err) {
  //   next(new Error(err.message))
  // }
})

module.exports = router
