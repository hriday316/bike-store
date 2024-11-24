import { model, Schema } from 'mongoose';
import { ProductType } from './product.interface';

const productSchema = new Schema<ProductType>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required!'],
    },
    brand: {
      type: String,
      required: [true, 'Product brand is required!'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required!'],
      min: 0,
    },
    category: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message: '{VALUE} is not valid category.',
      },
      required: [true, 'Product category is required!'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required!'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required!'],
      min: 0,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Products = model<ProductType>('Products', productSchema);
