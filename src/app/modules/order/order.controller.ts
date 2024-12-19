import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrderDb(order);
    res.status(200).json({
      success: true,
      massage: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      massage: 'something went wring',
    });
  }
};

export const orderController = {
  createOrder,
};
