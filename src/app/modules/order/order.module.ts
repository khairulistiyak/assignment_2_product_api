import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  productId: { type: String, required: true },
  email: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// orderSchema.pre('save', function () {
//   console.log(this.quantity);
// });

export const Order = model<TOrder>('Order', orderSchema);
