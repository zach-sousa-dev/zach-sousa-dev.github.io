<script>
    let { children, href, icon, classes } = $props();

    import { Tween } from "svelte/motion"; 
    import { elasticOut } from 'svelte/easing';

    let progress = new Tween(1, {
        duration: 600,
        easing: elasticOut
    });
</script>

<div class={classes}>

    <a href={href}
        target="_blank" 
        class="
            font-regular
            text-2xl
            pt-5
            pb-5
            flex
            justify-center
            items-center
            bg-passionate-red
            rounded-2xl
            text-blue-gray
            shadow-md/50
            shadow-black
            border-highlight-red
            border-t
            border-l
            hover:animate-pulse
        "

        onmouseenter={() => {
                progress.target = 1.1
            }}
            
        onmouseleave={() => {
            progress.target = 1
        }}
        style='transform: scale({progress.current})'
    >
        {#if icon}
            <img src="{icon}" alt="" class="
                    w-8
                    ml-5
                    mr-5
                "
            >
        {/if}
        {@render children?.() }
    </a>

</div>