const getAllMock = [
  {
    id: 1,
    name: 'Juliana Oliveira',
    phone: '(11) 91234-5678',
    email: 'juliana.oliveira@email.com',
    cpf: '123.456.789-00',
    status: 'ativo',
    createdAt: '2024-03-17T19:31:44.454Z',
    updatedAt: '2024-03-17T19:31:44.454Z',
  },
  {
    id: 2,
    name: 'André Silva',
    phone: '(21) 98765-4321',
    email: 'andre.silva@email.com',
    cpf: '987.654.321-00',
    status: 'inativo',
    createdAt: '2024-03-17T19:31:44.454Z',
    updatedAt: '2024-03-17T19:31:44.454Z',
  },
];

const validCustomer = {
  name: 'Juliana Santos',
  phone: '(11) 91234-5678',
  email: 'juliana.Santos@email.com',
  cpf: '123.456.789-00',
  status: 'aguardando',
};
const invalidEmail = {
  name: 'Juliana Santos',
  phone: '(11) 91234-5678',
  cpf: '123.456.789-00',
  status: 'aguardando',
};

const invalidName = {
  phone: '(11) 91234-5678',
  email: 'juliana.Santos@email.com',
  cpf: '123.456.789-00',
  status: 'aguardando',
};
const invalidCPF = {
  name: 'juliana Santos',
  phone: '(11) 91234-5678',
  email: 'juliana.Santos@email.com',
  cpf: '12345678912345',
  status: 'aguardando',
};

const ValidUpdate = {
  id: 1,
  name: 'Juliana Oliveira',
  phone: '(11) 91234-5678',
  email: 'juliana.oliveira@email.com',
  cpf: '123.456.789-00',
  status: 'inativo',
  createdAt: '2024-03-17T19:31:44.454Z',
  updatedAt: '2024-03-17T19:31:44.454Z',
};

const invalidId = {
  name: 'Juliana Oliveira',
  phone: '(11) 91234-5678',
  email: 'juliana.oliveira@email.com',
  cpf: '123.456.789-00',
  status: 'inativo',
  createdAt: '2024-03-17T19:31:44.454Z',
  updatedAt: '2024-03-17T19:31:44.454Z',
};
const invalidPhone = {
  name: 'Juliana Oliveira',
  phone: '123456789112',
  email: 'juliana.oliveira@email.com',
  cpf: '123.456.789-00',
  status: 'inativo',
};

module.exports = {
  getAllMock,
  validCustomer,
  invalidName,
  invalidCPF,
  ValidUpdate,
  invalidId,
  invalidPhone,
  invalidEmail,
};
