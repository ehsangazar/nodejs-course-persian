const Post = require('../models/Post')
const Category = require('../models/Category')

const getAll = async (req, res) => {
  const posts = await Post.findAll({
    include: Category,
  })
  res.json(posts)
}

const get = async (req, res) => {
  const posts = await Post.findOne({
    where: {
      id: req.params.id,
    },
    include: Category,
  })
  res.json(posts)
}
const post = async (req, res) => {
  await Post.create({
    title: req.body.title,
    description: req.body.description,
    image: `http://localhost:4000/uploads/${req.file.filename}`,
    create_at: new Date(),
    category_id: req.body.category_id,
  })
  res.json({})
}

module.exports = {
  getAll,
  get,
  post,
}
