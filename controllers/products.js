const productsService = require('../services/products');

const getProducts = async (_req, res) => {
  try {
    const products = await productsService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsById = async (req, res) => {
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
};

const createProducts = async (req, res) => {
  try {
    const register = await productsService.registerProduct(req.body);
    if (register.message) return res.status(409).json({ message: register.message });
    return res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const uptadeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const uptade = await productsService.uptadeProduct(id, req.body);
    if (uptade.message) return res.status(404).json({ message: uptade.message });
    return res.status(200).json(uptade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const exclude = await productsService.deteleProduct(id);
    if (exclude.message) return res.status(404).json({ message: exclude.message });
    return res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  uptadeProduct,
  deleteProduct,
};
