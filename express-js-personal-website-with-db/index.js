const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const flash = require('connect-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const { handler404, handlerServerErrors } = require('./helpers/errorHandler')
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
app.use(flash())

app.use('/', router)

app.use(handler404)
app.use(handlerServerErrors)

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
