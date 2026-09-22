<script>
    let { img, subtitle, title } = $props();

</script>

<div class="
        max-w-3xs
        ml-5
        mr-5
        font-regular
        text-blue-gray
    "
>
    <div class="bg-off-white rounded-t-4xl">
        <p class="pl-5 pt-5">{subtitle}</p>
        <p class="pl-5 pb-5 text-3xl">{title}</p>
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
            "   
        />
        </div>
    </div>
    
</div>