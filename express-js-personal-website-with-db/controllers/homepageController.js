const Category = require('../models/Category')
const Post = require('../models/Post')

const homepageController = async (req, res) => {
  const categories = await Category.findAll()
  const activePageId = Number(req.query.page) || 1
  const offset = (Number(req.query.page) - 1) * 11 || 0
  const counts = await Post.count()
  const posts = await Post.findAll({
    limit: 11,
    offset,
    order: [['created_at', 'DESC']],
  })
  res.render('index', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeCategoryId: null,
    counts,
    activePageId,
    user: req.user,
  })
}

module.exports = homepageController
