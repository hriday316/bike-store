import { model, Schema } from 'mongoose';
import { OrderType } from './order.interface';
import { Products } from '../product/product.model';
import mongoose from 'mongoose';

const orderScheme = new Schema<OrderType>(
  {
    email: {
      type: String,
      required: [true, 'Email is required!'],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      required: [true, 'Product is required'],
    },
    quantity: {
      type: Number,
      min: 1,
      required: [true, 'Quantity is required'],
    },
    totalPrice: {
      type: Number,
      min: 0,
      required: [true, 'Price is required'],
    },
  },
  { timestamps: true },
);

//  post hook middleware for update inventory quantity

orderScheme.post('save', async function (doc: OrderType, next) {
  const productId = doc?.product;
  const orderQuantity = doc?.quantity;
  const product = await Products.findById(productId);
  if (product) {
    const newQuantity = product.quantity - orderQuantity;
    product.quantity = newQuantity;
    if (product.quantity <= 0) {
      product.inStock = false;
    }
    await product.save();
    next();
  } else {
    throw new Error('Bike not found!');
  }
});

export const Orders = model<OrderType>('orders', orderScheme);
