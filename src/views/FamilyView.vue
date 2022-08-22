<template>
   <section class="container">
    <div class="content">
      <h2><span>Family &</span> Friends</h2>
      <p>Notes from family & friends</p>
    </div>

    <div class="family-quotes">
      <FamilyQuote class="quote" author="Jessy P." img="Jesse.jpg">Mr. White…he’s the devil. You know, he is…smarter than you, he is luckier than you.</FamilyQuote>
      <FamilyQuote class="quote" author="Walter Jr." img="WalterJr.jpg">Just Shut Up. Just Stop It. I Don't Want Anything From You.</FamilyQuote>
      <FamilyQuote class="quote" author="Skyler" img="Skyler_White.png">f I Have To Hear One More Time That You Did This For The Family ...</FamilyQuote>
    </div>
  
  </section>
</template>

<script>
import FamilyQuote from '@/components/FamilyQuote.vue';

export default {
    name: 'FamilyView',
    components: {
    FamilyQuote,
}
}
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    padding: 9em 0;
  }

  section .content {
    letter-spacing: 1.1px;
    flex: 1;

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


    section .family-quotes {
        flex: .8;
    }

    section .family-quotes .quote {
        margin: 1.4em 0;
    }

  @media (max-width: 750px) {
    section{
      flex-direction: column;
      padding-top: 3em;
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