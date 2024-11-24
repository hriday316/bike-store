import { Types } from 'mongoose';

export type OrderType = {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
