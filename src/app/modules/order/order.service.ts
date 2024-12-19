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

export const orderService = {
  createOrderDb,
};
