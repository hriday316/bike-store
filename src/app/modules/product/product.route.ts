import express from 'express';
import { productCotrollers } from './product.controller';
const router = express.Router();

router.post('/', productCotrollers.createProduct);
router.get('/:productId', productCotrollers.getSingleProduct);
router.get('/', productCotrollers.getAllProduct);
router.put('/:productId', productCotrollers.updateProduct);
router.delete('/:productId', productCotrollers.deleteProduct);

export const productRouter = router;
