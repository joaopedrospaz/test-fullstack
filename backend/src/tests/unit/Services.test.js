const { Model } = require('sequelize');
const Sinon = require('sinon');
const { expect } = require('chai');
const mocks = require('./mocks');
const services = require('../../services/customerService');

describe('Testa o service de Customer', () => {
  describe('GET /customer', () => {
    it('Deve retonar todos os usuários', async () => {
      Sinon.stub(Model, 'findAll').resolves(mocks.getAllMock);
      const result = await services.getAll();
      expect(result).to.deep.equal(mocks.getAllMock);
    });

    describe('POST /customer/create', () => {
      it('Deve criar um usuário com sucesso', async () => {
        Sinon.stub(Model, 'create').resolves(mocks.validCustomer);

        const result = await services.create(mocks.validCustomer);
        expect(result).to.deep.equal(mocks.validCustomer);
      });
      it('Deve lançar um erro quando um usuário é enviado sem o nome', async () => {
        Sinon.stub(Model, 'create').resolves(mocks.invalidName);

        try {
          await services.create(mocks.invalidName);
        } catch (error) {
          expect(error.message).to.be.equal('O campo "name" é obrigatório');
        }
      });
      it('Deve lançar um erro quando o CPF é inválido', async () => {
        Sinon.stub(Model, 'create').resolves(mocks.invalidCPF);

        try {
          await services.create(mocks.invalidCPF);
        } catch (error) {
          expect(error.message).to.be.equal('O campo "CPF" é inválido');
        }
      });
    });

    describe('PUT customer/update', () => {
      it('Deve atualizar um usuário com sucesso', async () => {
        Sinon.stub(Model, 'update').resolves(mocks.ValidUpdate);
        Sinon.stub(Model, 'findByPk').resolves(mocks.ValidUpdate);
        const result = await services.update(mocks.ValidUpdate);
        expect(result).to.deep.equal(mocks.ValidUpdate);
      });
      it('Deve lançar um erro quando o id não é enviado', async () => {
        try {
          await services.update(mocks.invalidId);
        } catch (error) {
          expect(error.message).to.be.equal('O campo "id" é obrigatório');
        }
      });
      it('Deve lançar um erro quando o número é inválido', async () => {
        Sinon.stub(Model, 'create').resolves(mocks.invalidCPF);

        try {
          await services.create(mocks.invalidPhone);
        } catch (error) {
          expect(error.message).to.be.equal('O campo "phone" é inválido');
        }
      });
    });
  });
  afterEach(() => Sinon.restore());
});
