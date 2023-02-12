import { Router } from 'express';
import UserController from '..//controllers/users.controller';
import { checkCPFMiddleware, checkCPFParamsMiddleware } from '../middlewares/users.middleware';
import UserService from '../services/users.service';

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.post('/cpf', checkCPFMiddleware, (req, res) => userController.insertUser(req, res));
router.get('/cpf/:cpf', checkCPFParamsMiddleware, (req, res) => userController.findCpf(req, res));
router.delete('/cpf/:cpf', (req, res) =>
  userController.deleteCpf(req, res)
);
router.get('/cpf', (req, res) => userController.findAll(req, res));

export default router;
