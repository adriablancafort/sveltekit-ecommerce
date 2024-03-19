<script>
  import "../app.css";
  import Cart from "./cart.svelte";
  import { onNavigate } from "$app/navigation";
  import { onMount } from "svelte";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let mainElement;

  onMount(() => {
    setTimeout(() => {
      mainElement.dataset.state = "open";
    }, 2000);
  });
</script>

<main bind:this={mainElement} class="overflow-hidden group" data-state="closed">
  <div
    class="mx-auto max-w-[1400px] group-data-[state=open]:pr-52 duration-300 ease-in-out"
  >
    <slot />
  </div>
  <Cart />
</main>
