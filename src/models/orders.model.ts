import { Pool, RowDataPacket } from 'mysql2/promise';

export default class OrdersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async listAllOrders() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      ` SELECT o.id, o.user_id AS userId, json_arrayagg(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p ON
      o.id = p.order_id
      GROUP BY o.id
      `,
    );
    return result;
  }
}