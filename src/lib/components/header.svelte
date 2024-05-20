<script>
    import { onMount } from 'svelte';

    let hide = false;
    let last = 0;

    function handleScroll() {
        const current = scrollY;
        hide = current >= last;
        last = current;
    }

    onMount(() => {
        addEventListener('scroll', handleScroll);
        return () => {
            removeEventListener('scroll', handleScroll);
        };
    });
</script>

<header class="sticky top-0 z-40 bg-black px-6 py-4 duration-300" class:-translate-y-full={hide}>
    <a href="/">
        <img src="/asilor-logo-light.svg" alt="Asilor Logo" width="129" height="33">
    </a>
</header>

<style>
  header {
    view-transition-name: main-header;
  }
</style>