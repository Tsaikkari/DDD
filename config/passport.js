const passportGoogle = require('passport-google-oauth20')

const User = require('../models/User.model')

const GoogleStrategy = passportGoogle.Strategy

const google = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/dailydose',
    scope: ['profile'],
  },
  function (accessToken, refreshToken, profile, done) {
    console.log(profile)
    User.findOne({ googleId: profile.id }, (err, user) => {
      if (user) {
        return done(err, user)
      } else {
        new User({
          name: profile.name.givenName,
          email: profile.emails[0].value,
          isAdmin: false,
          googleId: profile.id,
        })
          .save()
          .then((newUser) => {
            console.log(newUser)
            return done(null, newUser)
          })
      }
    })
  }
)

module.exports = { google }
