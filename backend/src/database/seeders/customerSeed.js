const db = require('../config/config');
const CustomerModel = require('../models/customerModel');

(async () => {
  await db.sync();
  await CustomerModel.bulkCreate([
    {
      name: 'Juliana Oliveira',
      phone: '(11) 91234-5678',
      email: 'juliana.oliveira@email.com',
      cpf: '123.456.789-00',
      status: 'ativo',
    },
    {
      name: 'André Silva',
      phone: '(21) 98765-4321',
      email: 'andre.silva@email.com',
      cpf: '987.654.321-00',
      status: 'inativo',
    },
    {
      name: 'Camila Santos',
      phone: '(31) 87654-3210',
      email: 'camila.santos@email.com',
      cpf: '456.789.123-00',
      status: 'aguardando',
    },
    {
      name: 'Lucas Lima',
      phone: '(41) 76543-2109',
      email: 'lucas.lima@email.com',
      cpf: '321.654.987-00',
      status: 'inativo',
    },
    {
      name: 'Mariana Costa',
      phone: '(51) 65432-1098',
      email: 'mariana.costa@email.com',
      cpf: '654.321.789-00',
      status: 'desativo',
    },
    {
      name: 'Rafaela Pereira',
      phone: '(61) 54321-0987',
      email: 'rafaela.pereira@email.com',
      cpf: '789.123.456-00',
      status: 'inativo',
    },
    {
      name: 'Thiago Souza',
      phone: '(71) 43210-9876',
      email: 'thiago.souza@email.com',
      cpf: '234.567.890-00',
      status: 'aguardando',
    },
  ]);
})();
