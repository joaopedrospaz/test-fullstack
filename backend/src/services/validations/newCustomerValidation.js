const Joi = require('joi');
const InvalidParams = require('../../middlewares/erros/InvalidParams');

const schema = Joi.object().keys({
  name: Joi.string().min(7).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
  cpf: Joi.string().length(14).required(),
  status: Joi.string().valid('ativo', 'inativo', 'desativo', 'aguardando').required(),
}).messages({
  'string.min': 'O campo {#label} deve ter no mínimo {#limit} caracteres',
  'string.email': 'O campo {#label} deve ser um e-mail válido',
  'string.length': 'O campo {#label} deve ter exatamente {#limit} dígitos',
  'string.pattern.base': 'O campo {#label} deve conter apenas dígitos numéricos',
  'any.only': 'O campo {#label} deve ser "ativo", "desativo" ou "aguardando"',
  'any.required': 'O campo {#label} é obrigatório',
});

const validate = (data) => {
  const { error } = schema.validate(data);

  if (error) throw new InvalidParams(error.details[0].message);
};

module.exports = validate;
