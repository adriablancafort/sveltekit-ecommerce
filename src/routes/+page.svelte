<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import Card from '$lib/components/card.svelte';

  export let data;
  let { products } = data;
  let page = 1;
  let loading = false;
  let observer;
  const productsStore = writable(products);

  onMount(() => {
    observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting && !loading) {
        loading = true;
        page++;
        const response = await fetch(`https://fakestoreapi.com/products?page=${page}`);
        const newProducts = await response.json();
        $productsStore = [...$productsStore, ...newProducts];
        loading = false;
      }
    });

    observer.observe(document.querySelector('.end'));
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<svelte:head>
  <title>Asilor</title>
</svelte:head>

<div class="grid grid-cols-5 gap-5 p-5">
  {#each $productsStore as product, index (index)}
    <Card {product} />
  {/each}
  <div class="end"></div>
</div>