const productsModel = require('../models/products');

const getProducts = async (id = null) => {
  if (id) {
    const [product] = await productsModel.getProductsById(+id);
    return {
      id: product[0].id,
      name: product[0].name,
      quantity: product[0].quantity,
    };
  }
  const [products] = await productsModel.getAllProducts();
  return products;
};

module.exports = {
  getProducts,
};

getProducts(1);
