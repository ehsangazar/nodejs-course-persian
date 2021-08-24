const passport = require('passport')
const get = (req, res) => {
  res.render('login', {
    flash: req.flash(),
  })
}
const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?failed',
  failureFlash: true,
  session: true,
})

module.exports = {
  get,
  post,
}
