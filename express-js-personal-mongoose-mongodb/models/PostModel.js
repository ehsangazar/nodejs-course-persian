const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  image: String,
  description: String,
  created_at: String,
  category: String,
})

const PostModel = mongoose.model('posts', PostSchema)

module.exports = PostModel
