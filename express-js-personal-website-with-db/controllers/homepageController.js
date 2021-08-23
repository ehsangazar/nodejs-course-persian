const Category = require('../models/Category')

const homepageController = async (req, res) => {
  const categories = await Category.findAll()
  res.render('index', {
    categories: categories.map((category) => category.name),
  })
}

module.exports = homepageController
