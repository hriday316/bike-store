import Joi from 'joi';

const productValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    ' string.empty': 'Name cannot be empty.',
  }),
  brand: Joi.string().required().messages({
    'any.required': 'Brand is required',
    ' string.empty': 'Brand cannot be empty.',
  }),
  price: Joi.number().min(0).required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
    'number.min': 'Price must be a positive number',
  }),
  category: Joi.string()
    .valid('Mountain', 'Road', 'Hybrid', 'Electric')
    .required()
    .messages({
      'any.required': 'category is required',
      ' string.empty': 'category cannot be empty.',
    }),
  description: Joi.string().required().messages({
    'any.required': 'Description is required',
    ' string.empty': 'Description cannot be empty.',
  }),
  quantity: Joi.number().min(0).required().messages({
    'any.required': 'Quantity is required',
    'number.base': 'Quantity must be a number',
    'number.min': ' Quantity must be a positive number',
  }),
  inStock: Joi.boolean().default(true),
});

export default productValidationSchema;
