<script>
  import { cart } from '$lib/store.js';
  import Card from "$lib/card.svelte";
</script>

<div>
    <h1>Cart</h1>
    {#each $cart as product (product.id)}
        <Card {product} />
    {/each}
</div>