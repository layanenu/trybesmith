import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  listAllOrders = async (req: Request, res: Response) => {
    try {
      const { message } = await this.ordersService.listAllOrders();
      res.status(200).json(message);
    } catch (e) {
      res.status(404).json(e);
    }
  };
}