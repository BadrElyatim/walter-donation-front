<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #070404;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;

  }

  .container {
    margin-inline: 12rem;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  @media (max-width: 1500px) {
    .container{
      margin-inline: 9rem;
    }
  }
  @media (max-width: 1300px) {
    .container{
      margin-inline: 6rem;
    }
  }
  @media (max-width: 1050px) {
    .container{
      margin-inline: 3rem;
    }
  }
</style>

<script>
import NavBar from "./components/NavBar.vue";

  export default {
    components: { NavBar }
}
</script>
