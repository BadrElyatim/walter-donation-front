<template>
  <section class="container">
    <div class="content">
      <h2>You can <span>help</span></h2>
      <p>to save please send your contribution to our fund & keep the series alive</p>
    </div>

    <DonateBox></DonateBox>
  </section>
</template>

<script>
import DonateBox from '@/components/DonateBox.vue'

export default {
    name: 'DonateView',
    components: {
    DonateBox,
}
}
</script>

<style scoped>
  section {
        display: flex;
        align-items: center;
        padding: 9em 0;
        gap: 200px;
    }

    section .content {
        letter-spacing: 1.1px;
        flex: 2;
    }

    section .content h2 {
        padding: 1em 0;
        font-weight: 400;
        font-size: 4.5rem;
    }

    section .content h2 span {
        font-weight: 600;
        color: #FFD600;
    }

    section .content p {
        line-height: 1.7;
        font-size: 2rem;
    }

   


@media (max-width: 1500px) {
        section .content h2 {
            font-size: 3.5rem;
        }

        section .content p {
            font-size: 1.5rem;
        }

        
    }

    @media (max-width: 1100px) {
        section .content h2 {
            font-size: 2.7rem;
        }

        section .content p {
            font-size: 1rem;
        }

      
    }
    @media (max-width: 800px) {
        section {
            
            padding-top: 3em;
            display: block;
            
        }
    section .content {
        padding-bottom: 3em;
        
    }

    
    }
</style>