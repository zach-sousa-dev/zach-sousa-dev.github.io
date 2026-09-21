<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import BusinessCard from "$lib/components/BusinessCard.svelte";

    import SocialIcon from "$lib/components/SocialIcon.svelte";
    import linkedIn from "$lib/assets/in.svg";
    import gitHub from "$lib/assets/github.svg";
    import mail from "$lib/assets/mail.svg";

    import './layout.css';
    import Header from "$lib/components/Header.svelte";
</script>

<Navbar>
    <a href="/">About</a>
    <a href="/">Services</a>
    <a href="/">Portfolio</a>
</Navbar>

<div 
    class="
        flex
        flex-col
    "
>
    <BusinessCard 
        topMargin="mt-90" 
        img="https://avatars.githubusercontent.com/u/75133905?v=4"
        header="Zachary Sousa"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis placerat mauris vel pharetra. Ut lobortis tortor leo, quis elementum nunc scelerisque iaculis. Duis eget turpis non nunc pharetra sagittis eu in sapien. Nam vestibulum ante sed metus facilisis, sed lobortis quam varius. Integer eget faucibus erat. Vestibulum vitae sodales arcu. Donec vel eleifend dui. Proin facilisis metus sit amet dui semper facilisis. Proin bibendum blandit metus vitae fringilla. Nulla id scelerisque magna. "
    >
        <SocialIcon img={linkedIn} link="https://www.linkedin.com/in/zach-sousa/" />
        <SocialIcon img={gitHub} link="https://github.com/zach-sousa-dev" />
        <SocialIcon img={mail} link="mailto:zacharysousa@outlook.com?subject=I found your website!" />
    </BusinessCard>

</div>