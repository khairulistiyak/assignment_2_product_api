import express from 'express';
import { ProductController } from './products.controller';

const router = express.Router();

router.post('/products', ProductController.createNewProduct);
router.get('/products', ProductController.searchProducts);
router.get('/products', ProductController.getAllProduct);
router.get('/products/:productId', ProductController.getASingleProduct);
router.put('/products/:productId', ProductController.updateASingleProduct);
router.delete('/products/:productId', ProductController.deleteProduct);

export const ProductRoute = router;
