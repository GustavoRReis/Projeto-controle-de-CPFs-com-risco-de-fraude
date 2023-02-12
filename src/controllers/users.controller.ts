import UsersService from '../services/users.service';
import { Response, Request } from 'express';
import validarCPF from '../utils/validateCpf';

interface User {
  cpf: string;
  createdAt?: Date;
}

interface UserServiceResponse {
  type?: string;
  message?: string;
  data?: User;
}

export default class UsersController {
  constructor(private _service: UsersService) {}

  async insertUser(req: Request, res: Response): Promise<Response> {
    const { cpf } = req.body;
    const result: UserServiceResponse = await this._service.insertUser(cpf);

    if (result.data) {
      return res.status(201).json(result.data);
    }

    return res.status(400).json({ type: result.type, message: result.message });
  }

  async findCpf(req: Request, res: Response): Promise<Response> {
    const cpf = req.params.cpf;
    const result: UserServiceResponse = await this._service.findCpf(cpf);

    if (result.data) {
      return res.status(200).json(result.data);
    }

    return res
      .status(404)
      .json({ type: 'NotFoundCpfException', message: 'Cpf not found' });
  }

  async deleteCpf(req: Request, res: Response): Promise<Response> {
    const cpf = req.params.cpf;
    const result = await this._service.deleteCpf(cpf);

    if (!validarCPF(cpf)) {
      return res
        .status(401)
        .json({ type: 'InvalidCpfException', message: 'CPF is not valid.' });
    }
    if (result === 'Cpf not found') {
      return res
        .status(404)
        .json({ type: 'NotFoundCpfException', message: 'Cpf not found' });
    }

    return res.status(204).json({ message: 'Successfully deleted user' });
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const [result] = await this._service.findAll();
    if (result === undefined) {
      return res.status(200).json([]);
    }
    return res
      .status(200)
      .json({ cpf: result.cpf, createdAt: result.createdAt });
  }
}
