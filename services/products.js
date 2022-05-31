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

const registerProduct = async ({ name, quantity }) => {
  const products = await getProducts();
  const hasName = products.some((product) => product.name === name);
  if (hasName) {
    return { message: 'Product already exists' };
  }
  const [product] = await productsModel.registerProduct(name, quantity);
  const result = {
    id: product.insertId,
    name,
    quantity,
  };
  return result;
};

registerProduct({ name: 'produto1', quantity: 10 });

module.exports = {
  getProducts,
  registerProduct,
};
