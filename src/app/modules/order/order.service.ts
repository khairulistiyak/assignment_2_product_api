import { TOrder } from './order.interface';
import { Order } from './order.module';

// const createOrderDb = async (oderData: TOrder) => {
//   const oder = new Order(oderData);
//   const result = await oder.save();
//   return result;
// };

const createOrderDb = async (orderData: TOrder) => {
  const order = await new Order(orderData).save();
  return order;
};

const getAllOrderFromDb = async () => {
  const result = Order.find();
  return result;
};

// const getOrdersByEmailDb = async (email: string) => {
//   const result = await Order.find({ email: { $eq: email } });
//   return result;
// };
const getOrdersByEmailDb = async (email: string) => {
  const result = await Order.find(email ? { email } : {});
  return result;
};

export const orderService = {
  createOrderDb,
  getAllOrderFromDb,
  getOrdersByEmailDb,
};
