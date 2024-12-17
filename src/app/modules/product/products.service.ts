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

const updateASingleProductFromDb = async (
  _id: string,
  updatedProduct: TProduct,
) => {
  const result = await Product.updateOne(
    { _id },
    {
      $set: {
        name: updatedProduct.name,
        description: updatedProduct.description,
        price: updatedProduct.price,
        tags: updatedProduct.tags,
        variants: updatedProduct.variants,
        inventory: updatedProduct.inventory,
      },
    },
  );
  return result;
};

export const ProductsServices = {
  createProductDB,
  getAllProductFomDb,
  getASingleProductFromDb,
  updateASingleProductFromDb,
};
