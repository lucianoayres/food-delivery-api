const divSales = document.getElementById("sales");
const divCostumer = document.getElementById("totalCostumer");
const divProduct = document.getElementById("totalProduct");

async function init() {
  [sales, salesCostumer, salesProduct] = await Promise.all([
    listSales(),
    getTotalSalesCostumer("Bento Torcato"),
    getTotalSalesProduct("Pizza Atum"),
  ]);

  divSales.textContent = sales;
  divCostumer.textContent = salesCostumer;
  divProduct.textContent = salesProduct;
}

init();
