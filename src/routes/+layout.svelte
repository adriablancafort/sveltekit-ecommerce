<script>
  import "../app.css";
  import Cart from "$lib/cart.svelte";
</script>

<nav>
  <a href="/">Home</a>
  <a href="/cart">Cart</a>
</nav>

<div class="flex">
  <slot />
  <Cart />
</div>