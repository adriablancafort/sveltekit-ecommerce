<script>
  import Item from '$lib/components/item.svelte';
  import { cart } from "$lib/store.js";
</script>

<div class="cart fixed top-0 right-0 w-52 translate-x-full group-data-[state=open]:translate-x-0 duration-300 ease-in-out">
  <h2 class="text-2xl">Cart</h2>
  {#each $cart as product (product.id)}
    <Item {product} />
  {/each}
</div>

<style>
  .cart {
    view-transition-name: cart;
  }
</style>