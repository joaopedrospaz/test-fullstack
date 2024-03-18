const Sequelize = require('sequelize');
const db = require('../config/config');

const customerModel = db.define('customer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING(14),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('ativo', 'inativo', 'desativo', 'aguardando'),
    allowNull: false,
  },
});

module.exports = customerModel;
