const connection = require('../db/connection');

const getAllProducts = () => connection.execute('SELECT * FROM StoreManager.products');

const getProductsById = (id) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [id],
);

const registerProduct = (name, quantity) => connection.execute(
  `INSERT INTO StoreManager.products (name, quantity)
    VALUES (?, ?)`, [name, quantity],
);

module.exports = {
  getAllProducts,
  getProductsById,
  registerProduct,
};
