<script>
    let { img, topMargin = "mt-90" } = $props();
</script>

<div class="
    flex
    justify-center
">
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
            <div class="
                text-5xl
                mb-5
                font-header
                text-off-white
                border-b-4
                border-passionate-red
                leading-relaxed
            ">
                Zachary Sousa
            </div>

            <!--BODY-->
            <div <div class="
                text-off-white
                font-regular
            ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis placerat mauris vel pharetra. Ut lobortis tortor leo, quis elementum nunc scelerisque iaculis. Duis eget turpis non nunc pharetra sagittis eu in sapien. Nam vestibulum ante sed metus facilisis, sed lobortis quam varius. Integer eget faucibus erat. Vestibulum vitae sodales arcu. Donec vel eleifend dui. Proin facilisis metus sit amet dui semper facilisis. Proin bibendum blandit metus vitae fringilla. Nulla id scelerisque magna. 
            </div>

            <!--FOOTER-->
            <div class="
                flex
                justify-start
            ">
                <div>Icon</div>
                <div>Icon</div>
                <div>Icon</div>
                {topMargin}
            </div>
        </div>
    </div>
</div>
