<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/head.svg';

	let { children } = $props();
</script>

<style>
	:global(html) {
		background-color: rgb(43, 45, 66);
	}
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="flex justify-center">
	<div class="flex-col justify-center w-2/3 max-w-4xl">
		{@render children()}
	</div>
</div>