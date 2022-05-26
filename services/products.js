const productsModel = require('../models/products');

const getProducts = (id = null) => {
  if (id) {
    return productsModel.getProductsById(id);
  }
  return productsModel.getAllProducts();
};

module.exports = {
  getProducts,
};
