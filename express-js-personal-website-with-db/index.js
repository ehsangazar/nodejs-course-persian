const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./models/User')
const app = express()
const PORT = 4000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

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

app.use('/', router)

app.use((req, res) => {
  res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
