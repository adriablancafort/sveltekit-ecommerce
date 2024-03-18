export async function load({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();
  return {
    product: product
  };
}