<script>
  import { cart } from "$lib/store.js";
  export let product;
</script>

<div>
<img src={product.image} alt={product.title} />
<h3>{product.title}</h3>
  <p>Price: {product.price}</p>
  <p>Category: {product.category}</p>
  <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
</div>
