export async function load({ fetch, page }) {
  const response = await fetch(`https://fakestoreapi.com/products?page=${page}`);
  const products = await response.json();
  return { products };
}