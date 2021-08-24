const { Op } = require('sequelize')
const Category = require('../models/Category')
const Post = require('../models/Post')

const searchController = async (req, res) => {
  const categories = await Category.findAll()
  const activePageId = Number(req.query.page) || 1
  const offset = (Number(req.query.page) - 1) * 11 || 0
  const counts = await Post.count({
    where: {
      title: {
        [Op.like]: `%${req.query.q}%`,
      },
    },
  })
  const posts = await Post.findAll({
    where: {
      title: {
        [Op.like]: `%${req.query.q}%`,
      },
    },
    limit: 11,
    offset,
    order: [['created_at', 'DESC']],
  })
  res.render('search', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeCategoryId: null,
    counts,
    activePageId,
  })
}

module.exports = searchController
