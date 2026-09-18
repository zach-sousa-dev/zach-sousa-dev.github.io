<script>
    let props = $props();
</script>

<div class="
    grid
    grid-cols-3
    gap-4
    w-full
    max-w-4xl
    items-center
    justify-center
    mt-100
">

    <div class="
        col-start-1
        col-span-1
    ">
        <img class="
                rounded-full
            "
            src={props.img}
            alt="Profile icon"
        >
    </div>
    

    <div class="
        col-start-2
        col-span-2
    ">
        <!--HEADER-->
        <div>
            Zachary Sousa
        </div>

        <!--BODY-->
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis placerat mauris vel pharetra. Ut lobortis tortor leo, quis elementum nunc scelerisque iaculis. Duis eget turpis non nunc pharetra sagittis eu in sapien. Nam vestibulum ante sed metus facilisis, sed lobortis quam varius. Integer eget faucibus erat. Vestibulum vitae sodales arcu. Donec vel eleifend dui. Proin facilisis metus sit amet dui semper facilisis. Proin bibendum blandit metus vitae fringilla. Nulla id scelerisque magna. 
        </div>

        <!--FOOTER-->
        <div>

        </div>

    </div>

</div>