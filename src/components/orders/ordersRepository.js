// importar 'promises' para não precisar trabalhar
// com callbacks
import { promises as fs, write } from "fs";

// desestrutura os métodos readFile, writeFile do objeto 'fs'
// para puder chamar direto pelo nome (ex: readFile), ao invés
// de 'fs.readFile'
const { readFile, writeFile } = fs;

async function createOrder(order) {
  const data = JSON.parse(await readFile(global.DATA_FILENAME));

  order = {
    id: data.nextId++,
    produto: order.produto,
    valor: order.valor,
    entregue: order.entregue,
    cliente: order.cliente,
    timestamp: new Date(),
  };

  data.pedidos.push(order);
  await writeFile(global.DATA_FILENAME, JSON.stringify(data, null, 2));

  return order;
}

async function getOrders() {
  const data = JSON.parse(await readFile(global.DATA_FILENAME));
  return data.pedidos;
}

async function readOrder(id) {
  const orders = await getOrders();
  const order = orders.find((order) => order.id === parseInt(id));
  if (order) {
    return order;
  }
  throw new Error("Registro não encontrado.");
}

async function updateOrder(order) {
  const data = JSON.parse(await readFile(global.DATA_FILENAME));
  const index = data.pedidos.findIndex((ord) => ord.id === order.id);
  if (index === -1) {
    throw new Error("Registro não encontrado");
  }

  data.pedidos[index].produto = order.produto;
  data.pedidos[index].valor = order.valor;
  data.pedidos[index].entregue = order.entregue;
  data.pedidos[index].cliente = order.cliente;

  await writeFile(global.DATA_FILENAME, JSON.stringify(data, null, 2));

  return data.pedidos[index];
}

async function updateOrderStatus(order) {
  return order;
}

async function deleteOrder(id) {
  const data = JSON.parse(await readFile(global.DATA_FILENAME));
  data.pedidos = data.pedidos.filter((order) => order.id !== parseInt(id));
  if (data.pedidos === undefined) {
    throw new Error("Registro não encontrado");
  }
  await writeFile(global.DATA_FILENAME, JSON.stringify(data, null, 2));
  return id;
}

export default {
  createOrder,
  readOrder,
  updateOrder,
  updateOrderStatus,
  deleteOrder,
};
