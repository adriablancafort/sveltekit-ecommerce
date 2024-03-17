<script>
  import "../app.css";
  import Cart from "./cart.svelte";
</script>

<div class="flex">
  <slot />
  <Cart />
</div>