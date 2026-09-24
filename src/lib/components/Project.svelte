<script>
    import { Tween } from "svelte/motion"; 
    import { expoOut } from 'svelte/easing';

    let progress = new Tween(0, {
        duration: 200,
        easing: expoOut
    });

    let { img, title, href } = $props();
</script>


<div class="
        font-regular
        text-black
        h-20
        w-20
        md:h-50
        md:w-50
        aspect-square
    "
>
    <a 
        href="{href}"
        onmouseenter={() => {
            progress.target = 1
        }}
                
        onmouseleave={() => {
            progress.target = 0
        }}
    >
        <div class="
                w-full
                h-full
                bg-cover
                rounded-2xl
                shadow-md/50
                shadow-black
            "
            style="background-image: url({img})"
        >
            <div class="
                    bg-near-opaque-black
                    w-full
                    h-full
                    text-xl
                    flex
                    items-center
                    justify-center
                    text-off-white
                    rounded-2xl
                    text-center
                    p-5
                    invisible
                    md:visible
                "
                style="opacity: {progress.current};"
            >
                {title}
                <br>
                ↪
            </div>
        </div>
    </a>
</div>
