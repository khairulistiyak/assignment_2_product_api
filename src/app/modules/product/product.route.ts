import express from 'express';
import { ProductController } from './products.controller';

const router = express.Router();

router.post('/products', ProductController.createNewProduct);
router.get('/products', ProductController.getAllProduct);
router.get('/product/:productId', ProductController.getASingleProduct);

export const ProductRoute = router;
