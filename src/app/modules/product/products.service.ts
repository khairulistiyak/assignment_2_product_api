import { TProduct } from './product.interface';
import { Product } from './product.modules';

const createProductDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

export const ProductsServices = {
  createProductDB,
};
