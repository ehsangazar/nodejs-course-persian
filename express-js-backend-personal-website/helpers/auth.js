const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    req.flash('warning', 'You need to log in first')
    res.redirect('/login')
  }
  next()
}

const isNotLoggedIn = (req, res, next) => {
  if (req.user) {
    res.redirect('/')
  }
  next()
}

module.exports = {
  isLoggedIn,
  isNotLoggedIn,
}
