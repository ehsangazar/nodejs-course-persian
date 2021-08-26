const Category = require('../models/Category')

const aboutController = async (req, res) => {
  const categories = await Category.findAll()
  res.render('about', {
    categories: categories.map((category) => category.name),
    activeCategoryId: null,
    user: req.user,
  })
}

module.exports = aboutController
