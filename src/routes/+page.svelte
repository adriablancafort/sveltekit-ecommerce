<script>
  import { onMount } from 'svelte';
  import { products, loadProducts } from '$lib/store.js';
  import Card from '$lib/components/card.svelte';

  let page = 1;
  let end;

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadProducts(fetch, ++page);
      }
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
  <div bind:this={end}></div>
</div>