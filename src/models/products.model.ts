import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/products.interface';

export default class ProductsModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async newProduct(body: IProduct) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [body.name, body.amount],
    );
    return insertId;
  }

  async listAllProducts() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products ',
    );
    return result;
  }
}