<script>
  import { onMount } from 'svelte';
  import { products, loadProducts } from '$lib/store.js';
  import Card from '$lib/components/card.svelte';

  let page = 0;
  let end;
  let loadCount = 1;
  const loadLimit = 4;

  function resetLoad() {
    loadProducts(fetch, ++page);
    loadCount = 0;
  }

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && loadCount < loadLimit) {
        loadProducts(fetch, ++page);
        loadCount++;
      }
    }, {
      rootMargin: '800px'
    });

    observer.observe(end);
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Asilor</title>
</svelte:head>

<div class="grid grid-cols-5 gap-5 p-5" >
  {#each $products as product, index (index)}
    <Card {product} />
  {/each}
</div>
<div class="text-center" bind:this={end}>
  {#if loadCount >= loadLimit}
    <button class="text-white bg-black hover:bg-gray-950 rounded text-lg px-4" on:click={resetLoad}>Load more</button>
  {/if}
</div>