const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const flash = require('connect-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const errorHandler = require('./helpers/errorHandler')
const passport = require('passport')
const app = express()
require('./helpers/passport')

const PORT = 4000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.use(cookieParser())
app.use(
  session({
    secret: 'keyboard dog and cat',
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', router)

app.use(errorHandler.handler404)
app.use(errorHandler.handlerServerErrors)

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
