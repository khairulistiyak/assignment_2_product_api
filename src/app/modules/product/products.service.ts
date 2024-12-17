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

const getASingleProductFromDb = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

export const ProductsServices = {
  createProductDB,
  getAllProductFomDb,
  getASingleProductFromDb,
};
