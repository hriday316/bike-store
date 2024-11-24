import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductServices } from './product.service';

// create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // joi product validation
    const { error, value } = productValidationSchema.validate(productData);
    if (error) {
      res.status(500).json({
        message: 'Validation Error',
        success: false,
        data: error,
        stack: error?.stack,
      });
    } else {
      const result = await ProductServices.createProductIntoDB(value);
      res.status(200).json({
        message: 'Bike created successfully!',
        success: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Bike created unsuccesfull!',
      success: false,
      data: error,
      stack: error?.stack,
    });
  }
};

// get all product

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.getAllProductFromDB(searchTerm);
    const length = result.length;
    if (length > 0) {
      res.status(200).json({
        message: 'Bikes retrieved successfully!',
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: 'No bikes matched!',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error?.message || 'something went wrong',
      success: false,
      data: error,
      stack: error?.stack,
    });
  }
};

// get product by id
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      status: true,
      message: 'Bike retrieved successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message || 'something went wrong',
      success: false,
      data: error,
      stack: error?.stack,
    });
  }
};

// update a bike
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateProductIntoDB(
      productId,
      updateData,
    );

    res.status(200).json({
      message: 'Bike updated successfully!',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message || 'something went wrong',
      success: false,
      data: error,
      stack: error?.stack,
    });
  }
};
// delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      message: 'Bike deleted successfully!',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message || 'something went wrong',
      success: false,
      data: error,
      stack: error?.stack,
    });
  }
};

export const productCotrollers = {
  createProduct,
  getSingleProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
};
