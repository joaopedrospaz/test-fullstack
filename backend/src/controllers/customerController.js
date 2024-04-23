const service = require('../services/customerService');

const getAllCustomers = async (_req, res) => {
  const customers = await service.getAll();
  return res.status(200).json(customers);
};

const createNewCustomer = async (req, res, next) => {
  try {
    const data = req.body;
    const createUser = await service.create(data);
    res.status(201).json(createUser);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const data = req.body;
    const update = await service.update(data);
    res.status(200).json(update);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
};
