import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getOrdersByEmail);
router.get('/orders', orderController.getAllOrder);

export const OrderRouter = router;
