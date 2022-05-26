const express = require('express');

const router = express.Router();

const productsController = require('./controllers/products');

router.use('/products', productsController);

const salesController = require('./controllers/sales');

router.use('/sales', salesController);

module.exports = router;
