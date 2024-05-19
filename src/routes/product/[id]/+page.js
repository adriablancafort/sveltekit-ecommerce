export async function load({ fetch, params, data }) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productClient = await response.json();
  const { productServer } = data;
  return {
    title: productServer.title,
    description: productServer.description,
    category: productServer.category,
    image: productServer.image,
    id: productServer.id,
    price: productClient.price,
  };
}
