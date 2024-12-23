import { Request, Response } from 'express';
import { orderService } from './order.service';
import { orderValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    // const productUpdate = Product.findOne(order.productId);

    // if (order === productUpdate) {
    //   console.log('ok is ont ');
    // }

    const validationOrderData = orderValidation.parse(order);
    const result = await orderService.createOrderDb(validationOrderData);
    res.status(200).json({
      success: true,
      massage: 'Order created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.massage || 'something went wring',
      error: error,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrderFromDb();

    res.status(200).json({
      success: true,
      massage: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.massage || 'something went wring',
      error: error,
    });
  }
};
const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await orderService.getOrdersByEmailDb(email);
    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for user email: ${email}`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
  getOrdersByEmail,
};
