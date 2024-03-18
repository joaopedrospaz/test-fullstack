const model = require('../database/models/customerModel');
const validate = require('./validations/newCustomerValidation');
const updateValidate = require('./validations/updateValidation');
const { validateCPF, validatePhone } = require('./validations/validateFunctions');

const getAll = async () => {
  const customers = await model.findAll();
  return customers;
};

const create = async (dataCustomer) => {
  validate(dataCustomer);
  validateCPF(dataCustomer.cpf);
  validatePhone(dataCustomer.phone);
  const newCustomer = await model.create(dataCustomer);
  return newCustomer;
};
const update = async (updateCustomer) => {
  updateValidate(updateCustomer);
  validateCPF(updateCustomer.cpf);
  validatePhone(updateCustomer.phone);
  await model.update(updateCustomer, { where: { id: updateCustomer.id } });
  const findUpdated = await model.findByPk(updateCustomer.id);
  return findUpdated;
};

module.exports = {
  getAll,
  create,
  update,
};
