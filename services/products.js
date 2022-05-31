const productsModel = require('../models/products');

const getProducts = async (id = null) => {
  if (id) {
    const [product] = await productsModel.getProductsById(id);
    return {
      id: +product[0].id,
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
  if (hasName) return { message: 'Product already exists' };

  const [product] = await productsModel.registerProduct(name, quantity);
  const result = {
    id: +product.insertId,
    name,
    quantity,
  };
  return result;
};

const uptadeProduct = async (id, { name, quantity }) => {
  const [product] = await productsModel.uptadeProduct(id, name, quantity);
  if (product.affectedRows === 0) return { message: 'Product not found' };

  const result = {
    id: +id,
    name,
    quantity,
  };
  return result;
};

const deteleProduct = async (id) => {
  const [product] = await productsModel.deteleProduct(id);
  if (product.affectedRows === 0) return { message: 'Product not found' };
  return product;
};

module.exports = {
  getProducts,
  registerProduct,
  uptadeProduct,
  deteleProduct,
};
