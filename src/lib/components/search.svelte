<script>
    let input = '';
    let results = [];

    const search = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${input}`);
        const data = await response.json();
        if (input === '') {
            results = [];
        } else {
            results = data.products;
        }
    }

    $: search(), input;
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
                <li class="border-t py-2 px-3">{result.title}</li>
            </a>
        {/each}
    </ul>
</div>