import OrdersRepository from "../orders/ordersRepository.js";

async function createOrder(order) {
  return await OrdersRepository.createOrder(order);
}

async function readOrder(id) {
  return await OrdersRepository.readOrder(id);
}

async function updateOrder(order) {
  return await OrdersRepository.updateOrder(order);
}

async function updateOrderStatus(order) {
  let tempOrder = await OrdersRepository.readOrder(order.id);
  tempOrder.entregue = order.entregue;
  tempOrder = await OrdersRepository.updateOrder(tempOrder);
  return tempOrder;
}

async function deleteOrder(id) {
  await OrdersRepository.deleteOrder(id);
}

export default {
  createOrder,
  readOrder,
  updateOrder,
  updateOrderStatus,
  deleteOrder,
};
