const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Category = db.define(
  'categories',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Category
