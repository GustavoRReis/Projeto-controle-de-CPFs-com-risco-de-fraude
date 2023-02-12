import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../../app';
import Users from '../../database/models/users';
import { mockFindOne } from '../mocks/userMocks';

chai.use(chaiHttp);

describe('GET /cpf/{cpf}', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return a user by CPF', async () => {
     sinon.stub(Users, 'findOne').resolves(mockFindOne as unknown as Users);
    const response = await chai.request(app).get(`/cpf/64852893055`);

    expect(response.status).to.equal(200);
  });

  it('should return an error message if the cpf is invalid', async () => {
    const fakeUser = {
        dataValues: {
          cpf: '11111111111',
          createdAt: new Date(),
        },
      }
    sinon.stub(Users, 'findOne').resolves(fakeUser as unknown as Users);
    const response = await chai.request(app).get(`/cpf/64852`);

    expect(response.status).to.equal(401);
    expect(response.body).to.have.property('message').equal('CPF is not valid.');
  });


});
