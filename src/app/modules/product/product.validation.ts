import Joi from 'joi';

const productValidationSchema = Joi.object({
  name: Joi.string().required().message('Name is required'),
  brand: Joi.string().required().message('Brand is required'),
  price: Joi.number().min(0).required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
    'number.min': 'Price must be a positive number',
  }),
  category: Joi.string()
    .valid('Mountain', 'Road', 'Hybrid', 'Electric')
    .required()
    .message('Category must be Mountain or Road or Hybrid or Electric'),
  description: Joi.string().required().message('Description is required'),
  quantity: Joi.number().min(0).required().messages({
    'any.required': 'Quantity is required',
    'number.base': 'Quantity must be a number',
    'number.min': ' Quantity must be a positive number',
  }),
  inStock: Joi.boolean().default(true),
});

export default productValidationSchema;
