<script>
  export let data;
  const { product } = data;
</script>

<svelte:head>
  <title>{product.title}</title>
</svelte:head>

<div>
  <img class="w-80" src={product.image} alt={product.title} style:--image="image-{product.id}" />
  <h3 style:--title="title-{product.id}" class="text-2xl">{product.title}</h3>
  <p>{product.description}</p>
  <p>Price: {product.price}</p>
  <p>Category: {product.category}</p>
</div>

<style>
  img {
    view-transition-name: var(--image);
  }

  h3 {
    view-transition-name: var(--title);
  }
</style>
