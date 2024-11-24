import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/product/product.route';
import { orderRouter } from './app/modules/order/order.route';

const app = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('hello developers');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: 'Something went wrong!',
    success: false,
    data: err,
    stack: err?.stack,
  });
});
export default app;
