const express = require('express')
const router = require('./routes')

const app = express()
const PORT = 4000

app.use('/', router)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
