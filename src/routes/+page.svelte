<script>
  import Card from "$lib/Card.svelte";
  let products = [];

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();
  }
  getProducts();
</script>

<svelte:head>
  <title>Brickoram</title>
</svelte:head>

<h1>Brickoram</h1>

<div class="grid grid-cols-5 gap-8">
  {#each products as product (product.id)}
    <Card {product} />
  {/each}
</div>