import express from "express";
import OrdersController from "../orders/ordersController.js";

const router = express.Router();

// post body: produto (string) valor (float) cliente (string)
router.post("/order", OrdersController.createOrder);

router.get("/order/:id", OrdersController.readOrder);

// post body: id (int) produto (string) valor (float) cliente (string) entregue (boolean)
router.put("/order", OrdersController.updateOrder);

// post body: id (int) entregue (boolean)
router.patch("/order/status", OrdersController.updateOrderStatus);

// post body: id (int)
router.delete("/order/:id", OrdersController.deleteOrder);

// "catch all" error handling
router.use((err, req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(400).send({ error: `Erro ${err.message}` });
  logger.error(`${err.code}: ${err.message}`);
});

export default router;
