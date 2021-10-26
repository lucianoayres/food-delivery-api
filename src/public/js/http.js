baseUrl = "http://localhost:3000/api";

function listSales() {
  return fetchJson(`${baseUrl}/sales`);
}

function getTotalSalesCostumer(cliente) {
  let params = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cliente: cliente }),
  };
  return fetchJson(`${baseUrl}/sales/costumer`, params);
}

function getTotalSalesProduct(produto) {
  let params = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ produto: produto }),
  };
  return fetchJson(`${baseUrl}/sales/product`, params);
}

function findOneOrder(id) {
  return fetchJson(`${baseUrl}/sales/${id}`);
}

async function fetchJson(url, options) {
  try {
    let result = await fetch(url, options);

    if (result.ok) {
      return result.json();
    } else {
      throw new Error(result.statusText);
    }
  } catch (error) {
    showError("Error loading data", error);
  }
}
