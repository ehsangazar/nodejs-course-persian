const Category = require('../models/Category')
const Post = require('../models/Post')

const homepageController = async (req, res) => {
  const categories = await Category.findAll()
  const posts = await Post.findAll()
  res.render('index', {
    categories: categories.map((category) => category.name),
    posts: posts,
  })
}

module.exports = homepageController
