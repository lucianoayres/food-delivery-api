import OrdersService from "../orders/ordersService.js";

async function createOrder(req, res, next) {
  try {
    let { produto, valor, entregue, cliente } = req.body;

    let order = {
      produto: produto,
      valor: valor,
      entregue: entregue,
      cliente: cliente,
    };

    if (
      !order.produto ||
      !order.valor ||
      order.valor == null ||
      order.entregue == null ||
      !order.cliente
    ) {
      throw new Error("Produto, Valor, Entregue e Cliente são obrigatórios.");
    }

    const result = await OrdersService.createOrder(order);

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(result);

    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

async function readOrder(req, res, next) {
  try {
    const { id } = req.params;

    const result = await OrdersService.readOrder(id);

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(result);

    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

async function updateOrder(req, res, next) {
  try {
    let { id, produto, valor, entregue, cliente } = req.body;

    let order = {
      id: id,
      produto: produto,
      valor: valor,
      entregue: entregue,
      cliente: cliente,
    };

    if (
      !order.id ||
      !order.produto ||
      !order.valor ||
      order.valor == null ||
      order.entregue == null ||
      !order.cliente
    ) {
      throw new Error(
        "Id, Produto, Valor, Entregue e Cliente são obrigatórios."
      );
    }

    const result = await OrdersService.updateOrder(order);

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(result);

    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

async function updateOrderStatus(req, res, next) {
  try {
    let { id, produto, valor, entregue, cliente } = req.body;

    let order = {
      id: id,
      produto: produto,
      valor: valor,
      entregue: entregue,
      cliente: cliente,
    };

    if (!order.id || (order.id == null) | (order.entregue == null)) {
      throw new Error("Id e Entregue são obrigatórios.");
    }

    const result = await OrdersService.updateOrderStatus(order);
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(result);
    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

async function deleteOrder(req, res, next) {
  try {
    const { id } = req.params;
    const result = await OrdersService.deleteOrder(id);

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(id);

    logger.info(
      `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
  } catch (err) {
    next(err);
  }
}

export default {
  createOrder,
  readOrder,
  updateOrder,
  updateOrderStatus,
  deleteOrder,
};
