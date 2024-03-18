const InvalidParams = require('../../middlewares/erros/InvalidParams');

const validateCPF = (cpf) => {
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!regexCPF.test(cpf)) {
    throw new InvalidParams('O campo "CPF" é inválido');
  }
};

const validatePhone = (phone) => {
  const regexPhone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  if (!regexPhone.test(phone)) {
    throw new InvalidParams('O campo "phone" é inválido');
  }
};

module.exports = {
  validateCPF,
  validatePhone,
};
