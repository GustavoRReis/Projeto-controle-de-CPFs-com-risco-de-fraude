import Users from '../database/models/users';

interface User {
  cpf: string;
  createdAt?: Date;
}

interface UserServiceResponse {
  type?: string;
  message?: string;
  data?: User;
}

export default class UsersService {
  private _db = Users;

  async insertUser(cpf: string): Promise<UserServiceResponse> {
    const existingUser = await this._db.findOne({ where: { cpf } });

    if (existingUser) {
      return {
        type: 'ExistsCpfException',
        message: 'CPF has already been registered',
      };
    }

    const newUser = await this._db.create({ cpf });
    return { data: newUser };
  }

  async findCpf(cpf: string): Promise<UserServiceResponse> {
    const existingUser = await this._db.findOne({ where: { cpf } });

    if (!existingUser) {
      return {};
    }

    const userData = {
      cpf: existingUser.dataValues.cpf,
      createdAt: existingUser.dataValues.createdAt,
    };

    return { data: userData };
  }

  async deleteCpf(cpf: string): Promise<void | string> {
    const existingUser = await this._db.findOne({ where: { cpf } });
  
    if (!existingUser) {
      return 'Cpf not found';
    }
    await this._db.destroy({ where: { cpf } });
  }

  async findAll(): Promise<User[]> {
    const users = await this._db.findAll();
    return users;
  }
}
