import express from 'express';
import ProductsController from '../controllers/products.controller';

const productController = new ProductsController();

const router = express.Router();

router.post('/', productController.newProduct);
router.get('/', productController.listAllProducts);

export default router;