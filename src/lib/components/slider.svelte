<script>
    export let images;

    let activeImage = images[0];

    const selectImage = (image) => {
        activeImage = image;
    };
</script>

<div class="flex space-x-4">
    <div class="w-16 space-y-4">
        {#each images as image (image)}
            <img 
                src={image} 
                alt="Title" 
                on:mouseover={() => selectImage(image)} 
                on:focus={() => selectImage(image)}
                style:--image="image-{image}"
                class:outline-2={image === activeImage}
            />
        {/each}
    </div>

    <img src={activeImage} alt="Title" class="rounded-lg" />
</div>

<style>
  img {
    view-transition-name: var(--image);
  }
</style>