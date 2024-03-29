const Sequelize = require('sequelize');
const config = require('./dbConfig');

const sequelizeSync = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

module.exports = sequelizeSync;