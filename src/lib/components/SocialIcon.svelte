<script>
    let { children, img, link } = $props();
</script>

<div class="
    mr-5
    mt-5
">
        <a href={link} target="_blank" class="
            rounded-full
            bg-passionate-red
            p-4
            flex
        ">
            <img src={img} alt="icon button" class="
                h-12
                w-12
            "/>
        </a>
</div>