import { Request, Response, NextFunction } from 'express';

import validarCPF from '../utils/validateCpf';

const checkCPFMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { cpf } = req.body;
  if (validarCPF(cpf) === false) {
    return res
      .status(401)
      .json({ type: 'InvalidCpfException', message: 'CPF is not valid.' });
  }
  return next();
};

const checkCPFParamsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cpf } = req.params;
  if (validarCPF(cpf) === false) {
    return res
      .status(401)
      .json({ type: 'InvalidCpfException', message: 'CPF is not valid.' });
  }
  return next();
};

export { checkCPFMiddleware, checkCPFParamsMiddleware };
