import { TProduct } from './product.interface';
import { Product } from './product.modules';

const createProductDB = async (productData: TProduct) => {
  const product = new Product(productData);
  const result = await product.save();
  return result;
};

const getAllProductFomDb = async () => {
  const result = await Product.find();
  return result;
};

export const ProductsServices = {
  createProductDB,
  getAllProductFomDb,
};
