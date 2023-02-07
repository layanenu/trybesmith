import express from 'express';
import UserController from '../controllers/users.controller';

const userController = new UserController();

const router = express.Router();

router.post('/', userController.newUser);

export default router;