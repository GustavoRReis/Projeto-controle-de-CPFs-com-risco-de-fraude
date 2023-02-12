import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../../app';
import Users from '../../database/models/users';
import { userCpf } from '../mocks/userMocks';

chai.use(chaiHttp);

describe('DELETE /cpf/{cpf}', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should delete a user with CPF', async () => {
    sinon.stub(Users, 'findOne').resolves('64852893055' as unknown as Users );
    sinon.stub(Users, 'destroy').resolves(1 as unknown as number);

    const response = await chai.request(app).delete(`/cpf/${userCpf.cpf}`);
    expect(response.status).to.equal(204);
  });

  it('should return 404 if the CPF does not exist', async () => {
    
    sinon.stub(Users, 'destroy').resolves(0 as unknown as number);
    const response = await chai.request(app).delete(`/cpf/${userCpf.cpf}`);
    expect(response.status).to.equal(404);
    expect(response.body)
      .to.have.property('type')
      .equal('NotFoundCpfException');
  });

  it('should return 404 if the CPF does not valid', async () => {
    sinon.stub(Users, 'destroy').resolves(0 as unknown as number);
    const response = await chai.request(app).delete(`/cpf/1111`);
    expect(response.status).to.equal(401);
    expect(response.body)
      .to.have.property('type')
      .equal('InvalidCpfException');
  });
});
