const connection = require('../db/connection');

const getAllSales = () => connection.execute(
  'SELECT * FROM sales INNER JOIN sales_products AS sp ON sales.id = sp.sale_id',
);

const getSalesById = (id) => connection.execute(
  'SELECT * FROM sales INNER JOIN sales_products AS sp ON sales.id = sp.sale_id WHERE sales.id = ?',
  [id],
);

module.exports = {
  getAllSales,
  getSalesById,
};
