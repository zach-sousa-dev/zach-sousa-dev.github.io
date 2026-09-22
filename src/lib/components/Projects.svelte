<script>
    let { children } = $props();
</script>

<div class="
    flex
    flex-wrap
    gap-5
    justify-center
    items-center
">
    {@render children?.()}
</div>