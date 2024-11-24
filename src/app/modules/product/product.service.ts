import { ProductType } from './product.interface';
import { Products } from './product.model';

// create a new bike into database
const createProductIntoDB = async (product: ProductType) => {
  const result = await Products.create(product);
  return result;
};

// get all bike from database
const getAllProductFromDB = async (searchTearm: unknown) => {
  if (searchTearm) {
    const result = await Products.aggregate([
      {
        $match: {
          $or: [
            { category: searchTearm },
            { name: searchTearm },
            { brand: searchTearm },
          ],
        },
      },
    ]);
    return result;
  } else {
    const result = await Products.find();
    return result;
  }
};

// get single bike from database
const getSingleProductFromDB = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};

// update a bike using id

const updateProductIntoDB = async (
  id: string,
  payload: Partial<ProductType>,
) => {
  const result = await Products.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// delete bike
const deleteProductFromDB = async (id: string) => {
  const result = await Products.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getSingleProductFromDB,
  getAllProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
