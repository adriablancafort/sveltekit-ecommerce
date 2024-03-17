<script>
  import Item from "./item.svelte";
  import { cart } from "$lib/store.js";
</script>

<div class="w-40">
  <h1>Cart</h1>
  {#each $cart as product (product.id)}
    <Item {product} />
  {/each}
</div>