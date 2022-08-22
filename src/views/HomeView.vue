<template>
  <section class="container">
    <div class="content">
      <h2><span>Help</span> Mr.White</h2>
      <p>My dad is amazing, it's funny but I didn't know that until I found out he was going to die.</p>
      <button>DONATE</button>
    </div>

    <div class="walter">
      <img src="@/assets/walter.png" alt="">
    </div>
  
  </section>
</template>

<style scoped>
  section {
    display: flex;
    padding: 9em 0 0;
  }

  section .content {
    letter-spacing: 1.1px;
    padding-top: 4em;
  }

  section .content h2 {
    padding: 1em 0;
    font-weight: 400;
    font-size: 4.5rem;
  }

  section .content h2 span {
    font-weight:600;
    color: #FFD600;
  }

  section .content p {
    line-height: 1.7;
    font-size: 2.5rem;
  }

  section .content button {
    margin-top: 20px;
    background-color: #FFD600;
    padding: 0.8em 2em;
    border-radius: 6px;
    color: #000;
    font-weight: 600;
    cursor: pointer;
  }

  section .walter {
    position: relative;
    right: 70px;
    bottom: 90px;
    z-index: -1;
  }

  section .walter img {
    max-width: 140%;
  }

   @media (max-width: 900px) {
    section .walter{
      right: 0;
    }
  }
   @media (max-width: 750px) {
    section{
      flex-direction: column-reverse;
      padding: 7em 0 0;
    }

    section .content {
      padding-top: 0;
      padding-bottom: 3em;
    }

    section .content h2 {
      padding-top: 0;
    }
    section .walter img{
      
      bottom: 0;
      max-width: 100%;
    }
  }
      @media (max-width: 1500px) {
        section .content h2 {
            font-size: 3.5rem;
        }

        section .content p {
            font-size: 1.5rem;
        }

        section .stats h3 {
            font-size: 1.8rem;
        }
    }
    @media (max-width: 1100px) {
        section .content h2 {
            font-size: 2.7rem;
        }

        section .content p {
            font-size: 1rem;
        }

        section .stats h3 {
            font-size: 2rem;
        }
    }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  
}
</script>
