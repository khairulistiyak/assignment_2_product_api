import { Request, Response } from 'express';
import { ProductsServices } from './products.service';
import ZodProductValidation from './product.validation';

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const validationParser = ZodProductValidation.parse(product);
    const result = await ProductsServices.createProductDB(validationParser);
    res.status(200).json({
      success: true,
      massage: 'product created is success fully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.massage || 'something  went wring',
      error: error,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductsServices.getAllProductFomDb();
    res.status(200).json({
      success: true,
      massage: 'All products retrieved successfully. ',
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

export const ProductController = {
  createNewProduct,
  getAllProduct,
};
