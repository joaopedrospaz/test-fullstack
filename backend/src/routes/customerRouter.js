const { Router } = require('express');
const controller = require('../controllers/customerController');

const customerRouter = Router();
customerRouter.get('/', controller.getAllCustomers);
customerRouter.post('/create', controller.createNewCustomer);
customerRouter.put('/update', controller.updateCustomer);
module.exports = customerRouter;
