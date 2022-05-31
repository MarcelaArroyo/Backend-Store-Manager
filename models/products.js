const connection = require('../db/connection');

const getAllProducts = () => connection.execute('SELECT * FROM StoreManager.products');

const getProductsById = (id) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [id],
);

const registerProduct = (name, quantity) => connection.execute(
  `INSERT INTO StoreManager.products (name, quantity)
    VALUES (?, ?)`, [name, quantity],
);

const uptadeProduct = (id, name, quantity) => connection.execute(
  `UPDATE StoreManager.products
    SET name = ?, quantity = ?
    WHERE id = ?`, [name, quantity, id],
);

const deteleProduct = (id) => connection.execute(
  `DELETE FROM StoreManager.products
    WHERE id = ?`, [id],
);

module.exports = {
  getAllProducts,
  getProductsById,
  registerProduct,
  uptadeProduct,
  deteleProduct,
};
