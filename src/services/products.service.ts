import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import { IProduct } from '../interfaces/products.interface';

export default class ProductService {
  productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  async newProduct(body: IProduct) {
    try {
      const result = await this.productsModel.newProduct(body);
      return { message: { id: result, ...body } };
    } catch (e) {
      return { message: 'unregistered product' };
    }
  }

  async listAllProducts() {
    try {
      const result = await this.productsModel.listAllProducts();
      return { message: result };
    } catch (e) {
      return { message: 'products not found' };
    }
  }
}
