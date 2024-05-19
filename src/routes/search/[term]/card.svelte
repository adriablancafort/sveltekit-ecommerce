<script>
  import { cart } from "$lib/store.js";
  export let product;

  function addToCart() {
    cart.update((items) => {
      return [...items, product];
    });
  }
</script>

<div class="border border-gray-300 rounded p-5 hover:scale-105 hover:shadow-xl">
  <a href="/product/{product.id}">
    <img
      src={product.image}
      alt={product.title}
      style:--image="image-{product.id}"
    />
  </a>
  <h3 style:--title="title-{product.id}" class="text-2xl">{product.title}</h3>
  <p>Price: {product.price}</p>
  <p>Category: {product.category}</p>
  <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
  <button on:click={addToCart}>Add to cart</button>
</div>

<style>
  img {
    view-transition-name: var(--image);
  }

  h3 {
    view-transition-name: var(--title);
  }
</style>
