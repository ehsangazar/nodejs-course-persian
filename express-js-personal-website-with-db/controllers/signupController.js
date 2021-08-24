const User = require('../models/User')

const get = (req, res) => {
  res.render('signup', {
    flash: req.flash(),
  })
}
const post = async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: await User.encryptPassword(req.body.password),
    age: 0,
  })
  res.render('signup', {
    flash: req.flash(),
  })
}

module.exports = {
  get,
  post,
}
