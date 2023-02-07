import express from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersController = new OrdersController();

const router = express.Router();

router.get('/', ordersController.listAllOrders);

export default router;