const { DataTypes } = require('sequelize')
const db = require('../configs/db')
const bcrypt = require('bcrypt')

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
  return bcrypt.compareSync(pwd, user.password)
}

User.encryptPassword = async (myPlainTextPassword) => {
  const saltRounds = 10
  const salt = await bcrypt.genSaltSync(saltRounds)
  const hash = await bcrypt.hashSync(myPlainTextPassword, salt)
  return hash
}

module.exports = User
