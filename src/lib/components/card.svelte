<script>
  import { addToCart } from '$lib/store.js';
  export let product;
</script>

<div class="border border-gray-300 rounded p-5 hover:scale-105 hover:shadow-xl">
  <a href="/product/{product.id}">
    <img
      src={product.thumbnail}
      alt={product.title}
      style:--image="image-{product.id}"
    />
  </a>
  <h3 class="text-2xl">{product.title}</h3>
  <p>Price: {product.price}</p>
  <p>Category: {product.category}</p>
  <button class="text-white bg-red-600 hover:bg-red-500 rounded text-lg px-4" on:click={() => addToCart(product)}>Add to cart</button>
</div>

<style>
  img {
    view-transition-name: var(--image);
  }
</style>
