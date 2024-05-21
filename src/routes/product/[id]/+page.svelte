<script>
  import { addToCart } from '$lib/store.js';
  export let data;
  const { product } = data;
  import Slider from '$lib/components/slider.svelte';
</script>

<svelte:head>
  <title>{product.title} - Asilor</title>
</svelte:head>

<nav aria-label="Breadcrumb">
    <ol class="flex space-x-2 py-6">
        <li><a href="/" class="hover:underline">Home</a></li>
        <span>/</span>
        <li><a href="/{product.category}" class="hover:underline">{product.category}</a></li>
        <span>/</span>
        <li><a href="/product/{product.id}">{product.title}</a></li>
    </ol>
</nav>

<div class="grid grid-cols-2 space-x-12">
    <Slider images={product.images} />

    <div class="space-y-4">
        <h1 class="text-4xl">{product.title}</h1>

        <div>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>

        <button class="bg-red-600 hover:bg-red-500 text-white rounded px-8 py-1 text-lg" on:click={() => addToCart(product)}>Add to cart</button>
    </div>
</div>