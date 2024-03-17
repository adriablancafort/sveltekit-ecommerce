<script>
  import "../app.css";
  import Cart from "$lib/cart.svelte";
</script>

<div class="flex">
  <slot />
  <Cart />
</div>