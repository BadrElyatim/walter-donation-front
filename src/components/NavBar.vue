<template>
  <header class="container">
    <div class="logo">
        <router-link :to="{name: 'home'}"><img src="@/assets/Logo.svg" alt="logo"></router-link>
        <p>Father, Husband & Teacher<br/>Save Mr.Walter</p>
    </div>
    <div class="nav">
        <ul :class="{'toggleNav': navIsActivated}" style="z-index: 1;">
            <li><router-link :to="{name: 'stats'}" >STATS</router-link></li>
            <li><router-link :to="{name: 'donate'}">DONATE</router-link></li>
            <li><router-link :to="{name: 'family'}" >FAMILY</router-link></li>
        </ul>
        <img @click="toggleNav" src="@/assets/hamburger.svg" alt="" style="z-index: 2;position: relative;">
    </div>
  </header>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navIsActivated: false
        }
    },
    methods: {
        toggleNav() {
            this.navIsActivated = !this.navIsActivated
        }
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
    }

    header .logo {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    header .logo img {
        width: 60px;
    }

    header .logo p {
        color: #5F5B5B;
    }

    header .nav ul {
        list-style-type: none;
        transition: .3s all ease;
    }
    
    header .nav ul li {
        display: inline;
        margin-inline: 30px;
    }

    header .nav ul li a {
        text-decoration: none;
        color: #FFF;
        position: relative;
    }

    header .nav ul li a::before {
        content: '';
        width: 0;
        height: 2px;
        background-color: #FFD600;
        position: absolute;
        bottom: -4px;
        transition: .3s width ease;
    }

    header .nav ul li a:hover::before{
        width: 100%;
        
    }

    .nav img {
        display: none;
        cursor: pointer;
        filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(196deg) brightness(104%) contrast(101%);
    }

    .toggleNav {
        display: flex !important;
        right: 0 !important;
    }

    header .nav .router-link-active {
        color: #FFD600;
    }

    @media (max-width: 800px) {
        .nav ul {
            display: none;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            right: -100%;
            background: #5F5B5B;
            
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .nav img {
            display: block;
        }
    }
</style>