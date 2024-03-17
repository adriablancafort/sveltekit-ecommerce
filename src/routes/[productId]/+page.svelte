<script>
    export let data;
</script>

<div>
  <img class="w-96" src={data.image} alt={data.title} />
  <h3>{data.title}</h3>
  <p>{data.description}</p>
  <p>Price: {data.price}</p>
  <p>Category: {data.category}</p>
</div>
