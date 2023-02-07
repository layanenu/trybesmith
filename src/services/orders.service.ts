import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

export default class OrderService {
  ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  async listAllOrders() {
    try {
      const result = await this.ordersModel.listAllOrders();
      return { message: result };
    } catch (e) {
      return { message: 'orders not found' };
    }
  }
}