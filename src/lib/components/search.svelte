<script>
    let input = '';
    let results = [];

    const search = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const products = await response.json();
        if (input !== '') {
            results = products.filter(product => product.title.toLowerCase().includes(input.toLowerCase()));
        } else {
            results = [];
        }
    }

    $: input, search();
</script>

<div class="w-full max-w-xs mx-auto bg-white rounded relative">
    <input
        class="border-none outline-none shadow-outline w-full py-2 px-3"
        type="text"
        placeholder="Search"
        bind:value={input}
    />

    <ul class="absolute w-full bg-white z-10 rounded-b pt-1 -mt-1">
        {#each results as result (result.id)}
            <a href="/product/{result.id}">
                <li class="border-t py-2">{result.title}</li>
            </a>
        {/each}
    </ul>
</div>