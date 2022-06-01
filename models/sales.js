const connection = require('../db/connection');

const getAllSales = () => connection.execute(
  `SELECT * FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sp ON sales.id = sp.sale_id`,
);

const getSalesById = (id) => connection.execute(
  `SELECT * FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sp ON sales.id = sp.sale_id WHERE sales.id = ?`,
    [id],
);

const registerSale = async (sales) => {
  const [row] = await connection.execute('INSERT INTO StoreManager.sales (`date`) VALUES (now())');
  const saleId = row.insertId;
  sales.forEach(({ productId, quantity }) => connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`, [saleId, productId, quantity],
  ));
  return saleId;
};

const uptadeSale = (id, { productId, quantity }) => connection.execute(
  `UPDATE StoreManager.sales_products
    SET product_id = ?, quantity = ?
    WHERE sale_id = ?`, [productId, quantity, id],
);

const daleteSale = (id) => connection.execute(
  `DELETE FROM StoreManager.sales
    WHERE id = ?`, [id],
);

module.exports = {
  getAllSales,
  getSalesById,
  registerSale,
  uptadeSale,
  daleteSale,
};
