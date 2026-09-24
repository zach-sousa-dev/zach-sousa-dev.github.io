<script>
    import { Tween } from "svelte/motion"; 
    import { elasticOut } from 'svelte/easing';

    let { img, clickAction } = $props();

    let progress = new Tween(1, {
        duration: 600,
        easing: elasticOut
    });

    let lastTarget = 1;
    
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="
        select-none
        inline-block
    "
    onclick={(e) => {
        e.preventDefault();
        clickAction();
    }}
>
        <a href={"#"} target="_blank" 

        onmouseenter={() => {
            progress.target = 1.2
        }}
        
        onmouseleave={() => {
            progress.target = 1
        }}
        
        onmousedown={() => {
            lastTarget = progress.target;
            progress.target = 0.8
        }}

        onmouseup={() => {
            progress.target = lastTarget;
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