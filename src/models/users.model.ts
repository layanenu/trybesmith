import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/users.interface';

export default class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async newUser(body: IUser) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [body.username, body.vocation, body.level, body.password],
    );
    return insertId;
  }
}