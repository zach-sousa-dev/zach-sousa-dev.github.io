<script>
    import { Tween } from "svelte/motion"; 
    import { elasticOut } from 'svelte/easing'

    let { img, link } = $props();

    let progress = new Tween(1, {
        duration: 600,
        easing: elasticOut
    });
    
</script>

<div class="
    mr-5
    mt-5
    select-none
">
        <a href={link} target="_blank" 

        onmouseenter={() => {
            progress.target = 1.2
        }}
        
        onmouseleave={() => {
            progress.target = 1
        }}

        style='transform: scale({progress.current})'

        class="
            rounded-full
            bg-passionate-red
            p-4
            flex
            shadow-md/50
            shadow-black
            border-highlight-red
            border-t
            border-l
            select-none
            hover:animate-pulse
        ">

            <img src={img} alt="icon button" class="
                h-12
                w-12
            "/>

        </a>
</div>