import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController';

export const router = Router();

const userControler = new UserController()

router.post('/user', userControler.createuser);
router.get('/user', userControler.getAllUsers);
router.delete('/user', userControler.deleteUser)