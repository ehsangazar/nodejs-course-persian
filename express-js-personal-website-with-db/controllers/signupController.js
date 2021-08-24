const User = require('../models/User')

const get = (req, res) => {
  res.render('signup')
}
const post = async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: 0,
  })
  res.render('signup')
}

module.exports = {
  get,
  post,
}
