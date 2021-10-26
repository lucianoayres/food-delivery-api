import ReportsRepository from "../reports/reportsRepository.js";

async function totalSalesCostumer(cliente) {
  return await ReportsRepository.totalSalesCostumer(cliente);
}

async function totalSalesProduct(produto) {
  return await ReportsRepository.totalSalesProduct(produto);
}

async function productSales() {
  return await ReportsRepository.productSales();
}

export default { totalSalesCostumer, totalSalesProduct, productSales };
