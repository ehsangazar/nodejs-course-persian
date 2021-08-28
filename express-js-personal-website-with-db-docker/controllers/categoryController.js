const Category = require('../models/Category')
const Post = require('../models/Post')

const categoryController = async (req, res) => {
  const categories = await Category.findAll()
  const activePageId = Number(req.query.page) || 1
  const offset = (Number(req.query.page) - 1) * 11 || 0
  const counts = await Post.count({
    where: {
      category_id: Number(req.params.id) + 1,
    },
  })
  const posts = await Post.findAll({
    where: {
      category_id: Number(req.params.id) + 1,
    },
    limit: 11,
    offset,
    include: Category,
  })
  res.render('index', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeCategoryId: Number(req.params.id),
    counts,
    activePageId,
    user: req.user,
  })
}

module.exports = categoryController
