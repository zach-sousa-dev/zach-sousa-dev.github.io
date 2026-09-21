<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import BusinessCard from "$lib/components/BusinessCard.svelte";
    import Header from "$lib/components/Header.svelte";

    import SocialIcon from "$lib/components/SocialIcon.svelte";
    import linkedIn from "$lib/assets/in.svg";
    import gitHub from "$lib/assets/github.svg";
    import mail from "$lib/assets/mail.svg";

    import './layout.css';

    import { scrollTo, scrollRef, scrollTop, setGlobalOptions } from 'svelte-scrolling'

    import { expoOut } from 'svelte/easing'

    // page scroll options
    setGlobalOptions({
        duration: 800,
        easing: expoOut
    })
</script>



<Navbar>
    <a href="\" use:scrollTo={'about'}>About</a>
    <a href="\" use:scrollTo={'services'}>Services</a>
    <a href="\" use:scrollTo={'portfolio'}>Portfolio</a>
</Navbar>



<section use:scrollRef={'about'}>
    <BusinessCard 
        topMargin="mt-90" 
        img="https://avatars.githubusercontent.com/u/75133905?v=4"
        header="Zachary Sousa"
        body="I've just recently completed the P-TECH program that I was fortunately a part of during my experience at SNP Secondary School (formerly SNP STEAM Academy) and Mohawk College. I've since transferred to another Software Development program at Mohawk!"
    >
        <SocialIcon img={linkedIn} link="https://www.linkedin.com/in/zach-sousa/" />
        <SocialIcon img={gitHub} link="https://github.com/zach-sousa-dev" />
        <SocialIcon img={mail} link="mailto:zacharysousa@outlook.com?subject=I found your website!" />
    </BusinessCard>

    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
</section>


<section use:scrollRef={'services'}>

    <Header>Services</Header>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>

</section>

<section use:scrollRef={'portfolio'}>

    <Header>Portfolio</Header>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>

</section>

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>


