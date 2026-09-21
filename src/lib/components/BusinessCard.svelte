<script>
    let { img, topMargin = "mt-90", children, body, header } = $props();
    import Header from "$lib/components/Header.svelte";
</script>


<div class="
    grid
    grid-cols-3
    gap-4
    w-full
    max-w-4xl
    items-center
    justify-center
    {topMargin} 
">

    <div class="
        col-start-1
        col-span-1
    ">
        <img class="
                rounded-full
            "
            src={img}
            alt="Profile icon"
        >
    </div>
    

    <div class="
        col-start-2
        col-span-2
    ">
        <!--HEADER-->
        <Header>
            {header}
        </Header>

        <!--BODY-->
        <div <div class="
            text-off-white
            font-regular
        ">
            {body}
        </div>

        <!--FOOTER-->
        <div class="
            flex
            justify-start
        ">
            {@render children?.()}
        </div>
    </div>
</div>

