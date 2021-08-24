const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

passport.initialize()
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, pwd, done) => {
      const user = await User.findOne({
        where: {
          email: email,
        },
      })
      try {
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' })
        }
        if (!User.validPassword(user, pwd)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      } catch (err) {
        done(err)
      }
    }
  )
)
