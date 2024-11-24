import { Request, Response } from 'express';
import { orderServies } from './order.service';
import { orderValidationSchema } from './order.validation';

// create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    // joi order validation
    const { error, value } = orderValidationSchema.validate(orderData);
    if (error) {
      res.status(500).json({
        message: error?.message || 'Validation Error',
        success: false,
        data: error,
        stack: error?.stack,
      });
    } else {
      const result = await orderServies.createOrderIntoDB(value);
      res.status(200).json({
        message: 'Order created successfully!',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Order unsuccesfull!',
      success: false,
      data: error,
      stack: error?.stack,
    });
  }
};

//order total revenue
const ordersRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServies.calculateOrdersRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Total revenue calculate unsuccessfull!',
      success: false,
      data: error,
      stack: error?.stack,
    });
  }
};

export const orderControllers = { createOrder, ordersRevenue };
