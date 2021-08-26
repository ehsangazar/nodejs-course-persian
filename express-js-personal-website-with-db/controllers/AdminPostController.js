const Category = require('../models/Category')
const Post = require('../models/Post')

const get = async (req, res) => {
  const categories = await Category.findAll()
  res.render('post/create', {
    flash: req.flash(),
    errors: [],
    categories,
  })
}
const post = async (req, res) => {
  await Post.create({
    title: req.body.title,
    description: req.body.description,
    image: `http://localhost:4000/uploads/${req.file.filename}`,
    create_at: new Date(),
    category_id: req.body.category_id,
  })
  res.redirect('/dashboard')
}

module.exports = {
  get,
  post,
}
