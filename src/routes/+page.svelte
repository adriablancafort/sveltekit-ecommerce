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

<div class="mx-auto max-w-[1400px] pr-52">
  <section class="grid grid-cols-5 gap-5 p-5">
    {#each products as product, index (index)}
      <Card {product} />
    {/each}
  </section>
</div>
