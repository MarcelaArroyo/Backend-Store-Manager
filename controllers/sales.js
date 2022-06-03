const salesService = require('../services/sales');

const getSales = async (_req, res) => {
  try {
    const sales = await salesService.getSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const sale = await salesService.getSales(id);
      if (!sale || sale.length === 0) {
        return res.status(404).json({ message: 'Sale not found' });
      }
      return res.status(200).json(sale);
    }
    return res.status(404).json({ message: 'Sale not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSales = async (req, res) => {
  try {
    const register = await salesService.registerSale(req.body);
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const uptadeSale = async (req, res) => {
  try {
    const { id } = req.params;
    const update = salesService.uptadeSale(id, req.body);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    const exclude = await salesService.daleteSale(id);
    if (exclude.message) return res.status(404).json({ message: exclude.message });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSales,
  getSaleById,
  createSales,
  uptadeSale,
  deleteSale,
};
