export async function load({ fetch, params }) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productServer = await response.json();
  return {
    productServer
  };
}