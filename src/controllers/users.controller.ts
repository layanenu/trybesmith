import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import { createTokenJWT } from '../utils/jwt';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  newUser = async (req: Request, res: Response) => {
    try {
      const { message } = await this.usersService.newUser(req.body);
      const TOKEN = createTokenJWT(Number(message));
      res.status(201).json({ token: TOKEN });
    } catch (e) {
      res.status(500).json(e);
    }
  };
}