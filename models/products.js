const connection = require('../db/connection');

const getAllProducts = () => connection.execute('SELECT * FROM products');

const getProductsById = (id) => connection.execute('SELECT * FROM products WHERE id = ?', [id]);

module.exports = {
  getAllProducts,
  getProductsById,
};
