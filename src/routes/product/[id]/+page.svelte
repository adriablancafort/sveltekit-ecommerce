<script>
  export let data;
  const { image, title, description, category, id, price } = data;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div>
  <img class="w-80" src={image} alt={title} style:--image="image-{id}" />
  <h3 style:--title="title-{id}" class="text-2xl">{title}</h3>
  <p>{description}</p>
  <p>Price: {price}</p>
  <p>Category: {category}</p>
</div>

<style>
  img {
    view-transition-name: var(--image);
  }

  h3 {
    view-transition-name: var(--title);
  }
</style>
