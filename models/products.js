const connection = require('../db/connection');

const getAllProducts = () => connection.execute('SELECT * FROM products');

module.exports = {
  getAllProducts,
};
