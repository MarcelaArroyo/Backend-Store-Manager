const express = require('express');

const router = express.Router();

const productsController = require('./controllers/products');
const salesController = require('./controllers/sales');
const productsValidation = require('./middlewares/productsValidation');

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductsById);
router.post('/products', productsValidation, productsController.createProducts);
router.put('/products/:id', productsValidation, productsController.uptadeProduct);
router.delete('/products/:id', productsController.deleteProduct);

router.get('/sales', salesController.getSales);
router.get('/sales/:id', salesController.getSaleById);
router.post('/sales', salesController.createSales);
router.put('/sales/:id', salesController.uptadeSale);
router.delete('/sales/:id', salesController.deleteSale);

module.exports = router;
