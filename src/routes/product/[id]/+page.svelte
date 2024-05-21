<script>
  import { addToCart } from '$lib/store.js';
  export let data;
  const { product } = data;
</script>

<svelte:head>
  <title>{product.title} - Asilor</title>
</svelte:head>

<nav aria-label="Breadcrumb">
    <ol class="flex space-x-2 py-6">
        <li><a href="/" class="hover:underline">Asilor</a></li>
        <span>/</span>
        <li><a href="/{product.category}" class="hover:underline">{product.category}</a></li>
        <span>/</span>
        <li><a href="/product/{product.id}">{product.title}</a></li>
    </ol>
</nav>

<div class="grid grid-cols-2 space-x-12">
    <img src={product.image} alt={product.title} class="rounded-lg border mb-8" style:--image="image-{product.id}"/>

    <div class="space-y-4">
        <h1 class="text-4xl">{product.title}</h1>

        <button class="bg-red-600 hover:bg-red-500 text-white rounded px-8 py-1 text-lg" on:click={() => addToCart(product)}>Add to cart</button>

        <div>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
          <p>Description: {product.description}</p>
        </div>
    </div>
</div>

<style>
  img {
    view-transition-name: var(--image);
  }
</style>