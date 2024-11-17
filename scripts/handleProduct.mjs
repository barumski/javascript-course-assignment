import { RAINY_DAYS_API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateProduct } from "./generateProduct.mjs";

function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

const displayContainer = document.querySelector('#display-container');

async function main() {
  const jacketId = getIdFromURL();
  const jacketData = await fetchData(`${RAINY_DAYS_API_URL}/${jacketId}`)
  const singleProduct = generateProduct(jacketData);  
  displayContainer.append(singleProduct);
}

main();