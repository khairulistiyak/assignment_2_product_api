import express from 'express';
import { ProductController } from './products.controller';

const router = express.Router();

router.post('/products', ProductController.createNewProduct);
router.get('/products', ProductController.getAllProduct);
router.get('/products', ProductController.searchProducts);
router.get('/product/:productId', ProductController.getASingleProduct);
router.put('/product/:productId', ProductController.updateASingleProduct);
router.delete('/product/:productId', ProductController.deleteProduct);

export const ProductRoute = router;
