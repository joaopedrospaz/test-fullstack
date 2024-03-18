const Sequelize = require('sequelize');

const sequelize = new Sequelize('test-fullstack-list', 'root', '12345', {
  dialect: 'sqlite',
  host: 'localhost',
  port: 3306,
  storage: './databasefile.sqlite',
});

module.exports = sequelize;
