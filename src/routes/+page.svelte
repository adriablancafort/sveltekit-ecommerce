<script>
  import { onMount } from "svelte";
  import Card from "./card.svelte";
  let products = [];
  let page = 1;

  async function getProducts() {
    const response = await fetch(
      `https://fakestoreapi.com/products?page=${page}`
    );
    const newProducts = await response.json();
    products = [...products, ...newProducts];
    page += 1;
  }

  function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      getProducts();
    }
  }

  onMount(() => {
    window.addEventListener("scroll", checkScroll);
    getProducts();
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  });
</script>

<svelte:head>
  <title>SvelteKit Ecommerce</title>
</svelte:head>

<h1>Home</h1>

<div class="grid grid-cols-4 gap-8">
  {#each products as product, index (index)}
    <Card {product} />
  {/each}
</div>