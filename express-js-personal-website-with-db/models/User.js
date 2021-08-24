const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const User = db.define(
  'users',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: false,
  }
)

User.validPassword = (user, pwd) => {
  return user.password === pwd
}

module.exports = User
