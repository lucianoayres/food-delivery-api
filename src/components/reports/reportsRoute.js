import express from "express";
import ReportsController from "../reports/reportsController.js";

const router = express.Router();

// post body: cliente (string)
router.post("/sales/costumer", ReportsController.totalSalesCostumer);

// post body: produto (string)
router.post("/sales/product", ReportsController.totalSalesProduct);

router.get("/sales", ReportsController.productSales);

// "catch all" error handling
router.use((err, req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(400).send({ error: err.message });
  logger.error(`${err.code}: ${err.message}`);
});

export default router;
