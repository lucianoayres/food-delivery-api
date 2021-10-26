import ReportsService from "../reports/reportsService.js";

async function totalSalesCostumer(req, res, next) {
  try {
    const { cliente } = req.body;

    if (!cliente || cliente == null) {
      throw new Error("Cliente é obrigatório.");
    }

    const result = await ReportsService.totalSalesCostumer(cliente);

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(result);

    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

async function totalSalesProduct(req, res, next) {
  try {
    const { produto } = req.body;

    if (!produto || produto == null) {
      throw new Error("Cliente é obrigatório.");
    }

    const result = await ReportsService.totalSalesProduct(produto);

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(result);

    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

async function productSales(req, res, next) {
  try {
    const result = await ReportsService.productSales();

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(result);

    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

export default {
  totalSalesCostumer,
  totalSalesProduct,
  productSales,
};
