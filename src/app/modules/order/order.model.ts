import { model, Schema, Types } from 'mongoose';
import { OrderType } from './order.interface';
import { Products } from '../product/product.model';

const orderScheme = new Schema<OrderType>(
  {
    email: {
      type: String,
      required: [true, 'Email is required!'],
    },
    product: {
      type: Types.ObjectId,
      ref: 'Products',
      required: [true, 'Product is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Price is required'],
    },
  },
  { timestamps: true },
);

//  post hook middleware for update inventory quantity

orderScheme.post('save', async function (doc, next) {
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
