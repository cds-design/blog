<script>
    export let src = "";
    export let alt = ""
</script>

<img {src} {alt} />


<style>
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.75em;
        overflow: hidden;
        aspect-ratio: 16/9;
    }
</style>