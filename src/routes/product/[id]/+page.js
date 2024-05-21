export async function load({ fetch, params }) {
  const { id } = params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return { product };
}