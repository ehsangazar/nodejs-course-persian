const express = require('express')
const router = require('./routes')
const morgan = require('morgan')

const app = express()
const PORT = 4000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))

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
