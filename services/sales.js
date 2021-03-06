const salesModel = require('../models/sales');

const getSales = async (id = null) => {
  if (id) {
    const [saleId] = await salesModel.getSalesById(id);
    const sale = saleId.map((el) => ({
      date: el.date,
      productId: el.product_id,
      quantity: el.quantity,
    }));
    return sale;
  }
  const [sales] = await salesModel.getAllSales();
  const allSales = sales.map((sale) => ({
      saleId: sale.id,
      date: sale.date,
      productId: sale.product_id,
      quantity: sale.quantity,
  }));
  return allSales;
};

const registerSale = async (sales) => {
  const saleId = await salesModel.registerSale(sales);
  return {
    id: +saleId,
    itemsSold: sales,
  };
};

const uptadeSale = (id, sale) => {
  salesModel.uptadeSale(id, sale[0]);
  return {
    saleId: +id,
    itemUpdated: sale,
  };
};

const daleteSale = async (id) => {
  const [sale] = await salesModel.daleteSale(id);
  if (sale.affectedRows === 0) return { message: 'Sale not found' };
  return sale;
};

module.exports = {
  getSales,
  registerSale,
  uptadeSale,
  daleteSale,
};
