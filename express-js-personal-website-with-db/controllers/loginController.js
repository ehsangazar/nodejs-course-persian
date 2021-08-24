const passport = require('passport')
const get = (req, res) => {
  res.render('login')
}
const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?failed',
  failureFlash: false,
  session: false,
})

module.exports = {
  get,
  post,
}
