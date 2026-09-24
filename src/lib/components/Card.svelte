<script>
    let { img, subtitle, title } = $props();

</script>

<div class="
        max-w-50
        md:max-w-3xs
        md:ml-5
        md:mr-5
        mt-2
        mb-2
        md:mt-0
        md:mb-0
        font-regular
        text-blue-gray
    "
>
    <div class="bg-off-white rounded-t-4xl">
        <p class="pl-5 pt-2 text-xs md:text-sm md:pt-5">{subtitle}</p>
        <p class="pl-5 md:pb-5 text-lg md:text-3xl">{title}</p>
    </div>

    <div class="
            bg-cover
            rounded-b-4xl
        "
        style="background-image: url({img});"
    >
        <div class="
            bg-linear-to-b
            from-off-white
            to-transparent
            to-30%
            rounded-b-4xl
            shadow-md/50
            shadow-black
        "
        >
            <img src={img} alt="card" class="
                object-scale-down
                invisible
                w-40
                md:w-fit
            "   
        />
        </div>
    </div>
    
</div>