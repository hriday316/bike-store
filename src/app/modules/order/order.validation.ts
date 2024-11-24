import Joi from 'joi';

export const orderValidationSchema = Joi.object({
  email: Joi.string().email().trim().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Email must be a valid email address.',
  }),
  product: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .message('Product is required'),
  quantity: Joi.number().integer().min(1).required().messages({
    'any.required': 'Quantity is required.',
    'number.base': 'Quantity must be a Number',
  }),
  totalPrice: Joi.number().greater(0).required().messages({
    'any.required': 'Quantity is required.',
    'number.base': 'Quantity must be a Number',
  }),
});
