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
      massage: 'product created is successfully',
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
      massage: error.massage || 'something went wring!!!!!!!!!',
      error: error,
    });
  }
};

const getASingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductsServices.getASingleProductFromDb(productId);
    res.status(200).json({
      success: true,
      massage: 'A single products retrieved successfully.',
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
const updateASingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = req.body;
    const result = await ProductsServices.updateASingleProductFromDb(
      productId,
      updatedProduct,
    );
    res.status(200).json({
      success: true,
      massage: 'Product updated successfully!',
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductsServices.singleProductDeleteDb(productId);
    res.status(200).json({
      success: true,
      massage: 'Product Delete successfully!',
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

// ***************************

const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await ProductsServices.searchProductFromDb(searchTerm);
    res.status(200).json({
      success: true,
      message: `Products matching fetched successfully.`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: error.massage || 'something went wring',
      error: error,
    });
  }
};

// *******************

export const ProductController = {
  createNewProduct,
  getAllProduct,
  getASingleProduct,
  updateASingleProduct,
  deleteProduct,
  searchProducts,
};
