export async function load({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const product = await res.json();
  return {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    description: product.description,
    category: product.category,
  };
}
