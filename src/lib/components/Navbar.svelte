<script>
    let { children } = $props();
</script>

<nav class="
    backdrop-blur-md
    border-off-white
    bg-translucent-black
    border-t
    border-l
    flex
    flex-row
    md:flex
    justify-around
    w-11/12
    md:w-2/3
    md:max-w-4xl
    text-xl
    md:text-3xl
    p-3
    rounded-full
    text-off-white
    shadow-sm/50
    shadow-black
    font-regular
    text-center
    fixed
    top-10
    left-1/2
    -translate-x-1/2
    z-1
">
    {@render children?.()}
</nav>