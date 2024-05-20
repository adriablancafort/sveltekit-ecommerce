<script>
  export let product;
</script>

<a href="/product/{product.id}">
  <img src={product.image} alt={product.title} />
  <h3>{product.title}</h3>
  <p>Price: {product.price}</p>
  <p>Category: {product.category}</p>
  <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
</a>