import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../../app';
import Users from '../../database/models/users';
import { userCpf } from '../mocks/userMocks';

chai.use(chaiHttp);

describe('POST /cpf', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should create a new user with CPF', async () => {
    sinon.stub(Users, 'create').resolves(userCpf as unknown as Users);

    const response = await chai
      .request(app)
      .post('/cpf')
      .send({ cpf: '11314078062' });
    expect(response.status).to.equal(201);
  });

  it('should not insert a new user if the CPF already exists', async () => {
    sinon.stub(Users, 'findOne').resolves(userCpf as unknown as Users);

    const response = await chai
      .request(app)
      .post('/cpf')
      .send({ cpf: '11314078062' });
    expect(response.status).to.equal(400);
  });
});
