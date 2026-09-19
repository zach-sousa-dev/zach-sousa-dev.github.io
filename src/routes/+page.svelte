<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import BusinessCard from "$lib/components/BusinessCard.svelte";
    import './layout.css';
</script>

<Navbar>
    <a href="/">About</a>
    <a href="/">Services</a>
    <a href="/">Portfolio</a>
</Navbar>

<div class="
    flex
    flex-col
">
    <BusinessCard topMargin="mt-90" img="https://avatars.githubusercontent.com/u/75133905?v=4" />
</div>