<script>
    export let images;

    let activeImage = images[0];
    
    const selectImage = (image) => {
        activeImage = image;
    };
    
    let mouseX = 0;
    let mouseY = 0;
    
    const zoomIn = (event) => {
        const { left, top, width, height } = event.target.getBoundingClientRect();
        mouseX = ((event.pageX - left) / width) * 100;
        mouseY = ((event.pageY - top) / height) * 100;
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

    <div class="rounded-lg overflow-hidden">
        <img 
            src={activeImage} 
            alt="Title" 
            class="zoom-image"
            on:mousemove={zoomIn} 
            style="--mouse-x: {mouseX}%; --mouse-y: {mouseY}%;" 
        />
    </div>
</div>

<style>
    img {
        view-transition-name: var(--image);
    }

    .zoom-image {
        transform-origin: var(--mouse-x) var(--mouse-y);
    }

    .zoom-image:hover {
        transform: scale(2);
    }
</style>