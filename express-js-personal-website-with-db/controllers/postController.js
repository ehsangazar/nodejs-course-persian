const Category = require('../models/Category')
const Post = require('../models/Post')

const postController = async (req, res) => {
  const categories = await Category.findAll()
  const post = await Post.findByPk(req.params.id)
  const prevPost = await Post.findByPk(Number(req.params.id) - 1)
  const nextPost = await Post.findByPk(Number(req.params.id) + 1)
  res.render('post', {
    categories: categories.map((category) => category.name),
    post: post,
    prevPostEnabled: !!prevPost,
    nextPostEnabled: !!nextPost,
    activeId: null,
  })
}

module.exports = postController
