<script>
  import { addToCart } from '$lib/store.js';
  export let data;
  const { product } = data;
</script>

<svelte:head>
  <title>Asilor - {product.title}</title>
</svelte:head>

<div>
  <img class="w-80" src={product.image} alt={product.title} style:--image="image-{product.id}" />
  <h3 class="text-2xl">{product.title}</h3>
  <p>{product.description}</p>
  <p>Price: {product.price}</p>
  <p>Category: {product.category}</p>
  <button class="text-white bg-red-600 hover:bg-red-500 rounded text-lg px-4 py-1" on:click={() => addToCart(product)}>Add to cart</button>
</div>

<style>
  img {
    view-transition-name: var(--image);
  }
</style>
