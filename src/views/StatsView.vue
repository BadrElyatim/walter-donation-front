<template>
  <section class="container">
    <div class="content">
      <h2>Every penny <span>counts</span></h2>
      <p>this time Hisenberg will remember your names</p>
    </div>

    <div class="stats">
        <h3>Last 5 donations</h3>

        <DonationsComp></DonationsComp>
    </div>
  </section>
</template>

<script>
import DonationsComp from '@/components/DonationsComp.vue'

export default {
    components: {
        DonationsComp,
    }
};
</script>

<style scoped>
    section {
        display: flex;
        align-items: center;
        padding: 9em 0;
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

    section .stats {
        flex: .8;
    }

    section .stats h3 {
        font-size: 2.8rem;
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
    @media (max-width: 800px) {
        section {
            flex-direction: column;
            display: block;
            padding: 3em 0;
        }

        .stats {
            padding-top: 4em;
        }
    }
   
</style>
