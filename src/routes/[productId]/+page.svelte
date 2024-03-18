<script>
    export let data;
</script>

<div>
  <img class="w-96" src={data.image} alt={data.title} style:--image="image-{data.id}" />
  <h3 style:--title="title-{data.id}" class="text-2xl" >{data.title}</h3>
  <p>{data.description}</p>
  <p>Price: {data.price}</p>
  <p>Category: {data.category}</p>
</div>

<style>
img {
    view-transition-name: var(--image);
}

h3 {
    view-transition-name: var(--title);
}
</style>