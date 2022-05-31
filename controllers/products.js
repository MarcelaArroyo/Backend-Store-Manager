const express = require('express');

const router = express.Router();

const productsService = require('../services/products');
const productsValidation = require('../middlewares/productsValidation');

router.get('/', async (_req, res) => {
  try {
    const products = await productsService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const product = await productsService.getProducts(id);
      return res.status(200).json(product);
    }
    return res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.post('/', productsValidation, async (req, res) => {
  try {
    const register = await productsService.registerProduct(req.body);
    if (register.message) {
      return res.status(409).json({ message: register.message });
    }
    return res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
