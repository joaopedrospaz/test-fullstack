const express = require('express');
const cors = require('cors');
const customerRouter = require('../routes/customerRouter');
const ErrorMiddleware = require('../middlewares/ErrorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/customer', customerRouter);
app.use(ErrorMiddleware);
module.exports = app;