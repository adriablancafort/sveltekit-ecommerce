export async function load({ fetch, params }) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return {
    title: product.title,
    description: product.description,
    category: product.category,
    image: product.image,
    id: product.id,
  };
}

//export const prerender = true;
// export const prerender = 'auto';
