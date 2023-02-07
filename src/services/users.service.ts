import UsersModel from '../models/users.model';
import { IUser } from '../interfaces/users.interface';
import connection from '../models/connection';

export default class UsersService {
  usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel(connection);
  }

  async newUser(body: IUser) {
    try {
      const result = await this.usersModel.newUser(body);
      return { message: result };
    } catch (e) {
      return { message: 'unregistered user' };
    }
  }
}