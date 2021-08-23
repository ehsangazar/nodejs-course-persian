const Category = require('../models/Category')
const Post = require('../models/Post')

const categoryController = async (req, res) => {
  const categories = await Category.findAll()
  const posts = await Post.findAll({
    where: {
      category_id: Number(req.params.id) + 1,
    },
  })
  res.render('index', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeId: Number(req.params.id),
  })
}

module.exports = categoryController
