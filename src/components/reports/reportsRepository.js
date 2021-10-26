// importar 'promises' para não precisar trabalhar
// com callbacks
import { promises as fs, write } from "fs";

// desestrutura os métodos readFile, writeFile do objeto 'fs'
// para puder chamar direto pelo nome (ex: readFile), ao invés
// de 'fs.readFile'
const { readFile, writeFile } = fs;

async function totalSalesCostumer(cliente) {
  const data = JSON.parse(await readFile(global.DATA_FILENAME));
  const pedidos = data.pedidos;
  let costumerOrdersValues = [];
  let result = 0;

  const validateCostumer = pedidos.find((order) => order.cliente === cliente);

  if (!validateCostumer) {
    throw new Error("Registro não encontrado");
  }

  // sugestão do professor: item.cliente && item.cliente.toUpperCase === cliente.toUpperCase() ...
  // verifica se o item tem um 'cliente' cadastrado, (item.cliente &&...)
  // para evitar erro caso exista algum pedido sem 'cliente'
  // e depois converte as strings do 'cliente' para upperCase antes de comparar
  // para permitir que a busca por cliente não seja 'case sensitive', facilitando a busca
  costumerOrdersValues = pedidos
    .filter((item) => item.cliente === cliente && item.entregue === true)
    .map((item) => item.valor);

  // Implementação do 'reduce' do professor
  // .reduce((prev,curr) => prev + curr, 0);
  result = costumerOrdersValues.reduce((sum, value) => {
    return sum + value;
  }, 0);

  return result;
}

async function totalSalesProduct(produto) {
  const data = JSON.parse(await readFile(global.DATA_FILENAME));
  const pedidos = data.pedidos;
  let productOrdersValues = [];
  let result = 0;

  const validateProduct = pedidos.find((order) => order.produto === produto);

  if (!validateProduct) {
    throw new Error("Registro não encontrado");
  }

  productOrdersValues = pedidos
    .filter((item) => item.produto === produto && item.entregue === true)
    .map((item) => item.valor);

  result = productOrdersValues.reduce((sum, value) => {
    return sum + value;
  }, 0);

  return result;
}

async function productSales() {
  const data = JSON.parse(await readFile(global.DATA_FILENAME));
  const pedidos = data.pedidos;
  let tempResultArray = [];
  let result = [];

  let productSales = pedidos.filter((item) => item.entregue === true);
  let produto, listLenBefore, listLenAfter;

  while (productSales.length > 0) {
    listLenBefore = productSales.length;
    produto = productSales[0].produto;
    productSales = productSales.filter((item) => item.produto != produto);
    listLenAfter = productSales.length;
    tempResultArray.push({
      produto: produto,
      total: listLenBefore - listLenAfter,
    });
  }

  tempResultArray = tempResultArray.sort((a, b) => {
    return b.total - a.total;
  });

  tempResultArray.forEach((item) => {
    item.label = item.produto + " - " + item.total;
  });

  for (var element of tempResultArray) {
    result.push(element.label);
  }

  return result;
}

export default { totalSalesCostumer, totalSalesProduct, productSales };
