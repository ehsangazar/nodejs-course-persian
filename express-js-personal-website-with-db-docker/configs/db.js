const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_ROOT_USERNAME,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: 'mysql',
    dialect: 'mysql',
    port: process.env.MYSQL_ROOT_PORT,
    logging: false,
  }
)

try {
  db.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

module.exports = db
