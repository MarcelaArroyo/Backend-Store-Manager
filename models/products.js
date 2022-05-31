const connection = require('../db/connection');

const getAllProducts = () => connection.execute('SELECT * FROM StoreManager.products');

const getProductsById = (id) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [id],
);

module.exports = {
  getAllProducts,
  getProductsById,
};
