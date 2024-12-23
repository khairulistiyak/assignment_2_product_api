import { TOrder } from './order.interface';
import { Order } from './order.module';

const createOrderDb = async (orderData: TOrder) => {
  const order = await new Order(orderData).save();
  return order;
};

const getAllOrderFromDb = async () => {
  const result = Order.find();
  return result;
};

const getOrdersByEmailDb = async (email: string) => {
  const result = await Order.find(email ? { email } : {});
  return result;
};

export const orderService = {
  createOrderDb,
  getAllOrderFromDb,
  getOrdersByEmailDb,
};
