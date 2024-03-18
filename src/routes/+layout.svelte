<script>
  import "../app.css";
  import Cart from "./cart.svelte";
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<main class="overflow-hidden group cart-opened">
  <Cart />
  <div class="mx-auto max-w-[1400px] group-[.cart-opened]:pr-52">
    <slot />
  </div>
</main>
