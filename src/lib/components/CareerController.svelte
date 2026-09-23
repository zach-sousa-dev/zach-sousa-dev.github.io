<script>
    import left from "$lib/assets/left-arrow.svg";
    import right from "$lib/assets/right-arrow.svg";
    import RoundButton from "./RoundButton.svelte";
</script>

<div class="
    flex
    w-full
    justify-between
">
    <RoundButton img={left} />
        
        <div id="timeline"
            class="
                inline-block
                flex-1
                m-auto
                ml-5
                mr-5
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
                    left-1/2
                    top-1/2
                    rounded-full
                    border-8
                    border-blue-gray
                "
            ></div>
    
        </div>

    <RoundButton img={right} />
</div>