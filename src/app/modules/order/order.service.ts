import { Products } from '../product/product.model';
import { OrderType } from './order.interface';
import { Orders } from './order.model';
//create a new order
const createOrderIntoDB = async (orderData: OrderType) => {
  const productId = orderData.product;
  const product = await Products.findById(productId);
  // check product and product quantity
  if (!product) {
    throw new Error('No bike found!');
  } else if (product.quantity < orderData.quantity) {
    throw new Error('Bike stock is insufficient!');
  }
  // calculate total order price
  orderData.totalPrice = product.price * orderData.quantity;

  const order = await Orders.create(orderData);
  return order;
};

// calculate order revenue
const calculateOrdersRevenue = async function () {
  const result = await Orders.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    { $project: { totalRevenue: 1, _id: 0 } },
  ]);

  return result;
};

export const orderServies = { createOrderIntoDB, calculateOrdersRevenue };
