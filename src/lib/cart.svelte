<script>
  import Card from "$lib/card.svelte";
  import { cart } from "$lib/store.js";
</script>

<div>
  <h1>Cart</h1>
  {#each $cart as product (product.id)}
    <Card {product} />
  {/each}
</div>
