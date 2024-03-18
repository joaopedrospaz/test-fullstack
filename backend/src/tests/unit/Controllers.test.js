const Sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const controller = require('../../controllers/customerController');
const service = require('../../services/customerService');
const mocks = require('./mocks');
const InvalidParams = require('../../middlewares/erros/InvalidParams');

const { expect } = chai;
chai.use(sinonChai);

describe('Testa o controller de Customer', () => {
  describe('GET /customer', () => {
    it('Deve retornar status 200 quando a requisição é feita com sucesso', async () => {
      const req = {};
      const res = {};
      const next = Sinon.stub();

      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();

      Sinon.stub(service, 'getAll').resolves(mocks.getAllMock);
      await controller.getAllCustomers(req, res, next);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mocks.getAllMock);
    });
  });

  describe('POST /customer/create', () => {
    it('Deve retornar status 200 quando o usuário é criado com sucesso', async () => {
      const req = { body: mocks.validCustomer };
      const res = {};
      const next = Sinon.stub();

      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();

      Sinon.stub(service, 'create').resolves(mocks.validCustomer);

      await controller.createNewCustomer(req, res, next);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(mocks.validCustomer);
    });
    it('Deve falhar quando algum campo não é passado', async () => {
      const req = { body: { name: 'joao' } };
      const res = {};
      const next = Sinon.stub();

      const error = new InvalidParams('O campo "Nmae" é obrigatório');

      Sinon.stub(service, 'create').throws(error);

      await controller.createNewCustomer(req, res, next);

      expect(next).to.have.been.calledWith(error);
    });
  });
  describe('POST /customer/create', () => {
    it('Deve retornar status 200 quando o usuário é atualizado com sucesso', async () => {
      const req = { body: mocks.getAllMock[0] };
      const res = {};
      const next = Sinon.stub();

      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();

      Sinon.stub(service, 'update').resolves(mocks.getAllMock[0]);

      await controller.updateCustomer(req, res, next);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mocks.getAllMock[0]);
    });
    it('Deve falhar quando algum campo não é passado', async () => {
      const req = { body: { name: 'joao' } };
      const res = {};
      const next = Sinon.stub();

      const error = new InvalidParams('O campo "a" deve ter no mínimo 7 caracteres');

      Sinon.stub(service, 'update').throws(error);

      await controller.updateCustomer(req, res, next);

      expect(next).to.have.been.calledWith(error);
    });
  });
  afterEach(() => Sinon.restore());
});
