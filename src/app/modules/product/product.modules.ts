import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
  },

  tags: { type: [String], required: true },
  variants: [
    {
      color: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  inventory: { quantity: { type: Number }, inStock: { type: Boolean } },
});

export const Product = model<TProduct>('Product', productSchema);
