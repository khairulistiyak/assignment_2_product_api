import express from 'express';
import { ProductController } from './products.controller';

const router = express.Router();

router.post('/product', ProductController.createNewProduct);

export const ProductRoute = router;
