import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../../app';
import Users from '../../database/models/users';

chai.use(chaiHttp);

describe('GET /cpf', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return all Cpf', async () => {
    sinon.stub(Users, 'findAll').resolves([]);
    const response = await chai.request(app).get(`/cpf`);

    expect(response.status).to.equal(200);
  });
});
