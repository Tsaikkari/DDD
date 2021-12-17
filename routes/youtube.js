const router = require('express').Router()
const axios = require('axios')

router.get('/video', async (req, res, next) => {
  const apikey = process.env.API_KEY

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&maxResults=25&q=${req.query.search}&key=${apikey}`
    )
    res.status(200)
    console.log(response.data.items[0].snippet.channelId, 'SNIPPET')
  } catch (err) {
    next(new Error(err.message))
  }
})

module.exports = router
