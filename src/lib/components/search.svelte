<script>
    let searchTerm = '';
    let searchResults = [];

    async function search() {
        if (!searchTerm.trim()) {
            searchResults = [];
            return;
        }

        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        searchResults = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    $: searchTerm && search();
</script>

<div class="w-full max-w-xs mx-auto bg-white rounded relative">
    <input
        class="border-none appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search"
        bind:value={searchTerm}
    />

    {#if searchTerm}
        <ul class="-mt-0.5 absolute bg-white w-full z-10">
            {#each searchResults as result (result.id)}
                <a href="/product/{result.id}">
                    <li class="border-t py-2">{result.title}</li>
                </a>
            {/each}
        </ul>
    {/if}
</div>