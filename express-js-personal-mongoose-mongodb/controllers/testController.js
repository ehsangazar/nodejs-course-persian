const PostModel = require('../models/PostModel')

const testController = async (req, res) => {
  const data = await PostModel.find({})
  res.json(data)
}

module.exports = testController
