import Joi from 'joi';

export const orderValidationSchema = Joi.object({
  email: Joi.string().email().trim().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Email must be a valid email address.',
    'string.empty': 'Email can not be empty.',
  }),
  product: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'any.required': 'Name is required',
      ' string.empty': 'Name cannot be empty.',
    }),

  quantity: Joi.number().integer().min(1).required().messages({
    'any.required': 'Quantity is required.',
    'number.base': 'Quantity must be a Number',
    'number.integer': 'Quantity must be an integer.',
    'number.min': 'Quantity must be at least 1.',
  }),
  totalPrice: Joi.number().min(0).required().messages({
    'any.required': 'Quantity is required.',
    'number.base': 'Quantity must be a Number',
    'number.min': 'Total price must be positive number.',
  }),
});
