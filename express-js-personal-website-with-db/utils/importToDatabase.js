const data = require('../public/posts.json')
const Post = require('../models/Post')

const importToDatabase = () => {
  data.forEach((post) => {
    Post.create({
      ...post,
      created_at: new Date(post.created_at).getTime(),
      category_id: post.category,
    })
  })
}

importToDatabase()
