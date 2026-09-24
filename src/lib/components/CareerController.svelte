<script>
    import left from "$lib/assets/left-arrow.svg";
    import right from "$lib/assets/right-arrow.svg";
    import RoundButton from "./RoundButton.svelte";

    let { infos } = $props();
    
    let selected = $state(0);
    let currentImg;

    function moveInList(delta) {
        selected += delta;
        if(selected > infos.length - 1) {
            selected = 0;
        }

        if(selected < 0) {
            selected = infos.length - 1
        }

        leftDist.target = ((selected) / (infos.length - 1) * 100);
    }

    import { Tween } from "svelte/motion"; 
    import { expoOut } from 'svelte/easing';

    let leftDist = new Tween(1, {
        duration: 600,
        easing: expoOut
    });
</script>

<div class="
        border-4
        p-8
        rounded-4xl
        border-translucent-black
    "
>

    <span class="font-regular text-translucent-black text-sm">C:\code\career_timeline&gt; start.bat<br>Initializing...<br>&gt;</span>

    <div class="
            mt-10
            flex
            flex-col
            md:flex-row
            justify-left
            items-center
        "
    >
        
        <div class="
                w-25
                h-25
                inline-block
                shrink-0
                m-5
            "
            
        >
            {#await import(`$lib/assets/${infos[selected].img}.jpeg`) then {default: currentImg}}
                <div class="w-full h-full bg-cover rounded-xl"
                    style="background-image: url({currentImg});"
                ></div>
            {/await}
        </div>
        

        <div class="
                text-off-white
                font-regular
                inline-block
                flex-1
            "
        >
            <div class="
                    md:text-2xl
                "
            >
                {infos[selected].name}
            </div>

            <div class="
                    text-gray-500
                    mb-2
                "
            >
                {infos[selected].year}
            </div>

            <div class="
                    overflow-y-scroll
                    h-40
                    border-t-4
                    border-b-4
                    border-translucent-black
                    pt-4
                    pb-4
                    leading-7
                "
            >
                {infos[selected].description}
            </div>
        </div>

    </div>



    <div class="
        flex
        w-full
        justify-between
        mt-10
    ">
        <RoundButton img={left} clickAction={() => {
            moveInList(-1);
        }}/>
            
            <div id="timeline"
                class="
                    inline-block
                    flex-1
                    m-auto
                    ml-10
                    mr-10
                    relative
                "
            >

                <div class="
                        bg-passionate-red
                        h-2
                        text-center
                    "
                ></div>

                <div class="
                        bg-passionate-red
                        -translate-1/2
                        absolute
                        h-8
                        w-8
                        top-1/2
                        rounded-full
                        border-8
                        border-blue-gray
                    "

                    id="dot"
                    style="left: {leftDist.current}%;"
                ></div>
        
            </div>

        <RoundButton img={right} clickAction={() => {
            moveInList(1);
        }}/>
    </div>

</div>