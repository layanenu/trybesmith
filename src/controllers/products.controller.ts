import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  newProduct = async (req: Request, res: Response) => {
    try {
      const { message } = await this.productsService.newProduct(req.body);
      res.status(201).json(message);
    } catch (e) {
      res.status(500).json(e);
    }
  };

  listAllProducts = async (req: Request, res: Response) => {
    try {
      const { message } = await this.productsService.listAllProducts();
      res.status(200).json(message);
    } catch (e) {
      res.status(404).json(e);
    }
  };
}
