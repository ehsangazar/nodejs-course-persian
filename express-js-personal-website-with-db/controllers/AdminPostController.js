const get = async (req, res) => {
  res.render('post/create', {
    flash: req.flash(),
    errors: [],
  })
}

module.exports = {
  get,
}
