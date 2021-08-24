const Category = require('../models/Category')

const contactController = async (req, res) => {
  const categories = await Category.findAll()
  res.render('contact', {
    categories: categories.map((category) => category.name),
    activeCategoryId: null,
    user: req.user,
  })
}

module.exports = contactController
