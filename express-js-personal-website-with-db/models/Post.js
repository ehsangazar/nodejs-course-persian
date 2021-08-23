const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Post = db.define(
  'posts',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    category_id: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Post
