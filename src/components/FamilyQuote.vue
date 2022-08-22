<template>
    <div class="family-quote">
        <div class="author">
            <div class="author-img" :style="'background-image: url(' + require('../assets/' + img) + ')'"></div>
            <span>{{ author }}</span>
        </div>
        <p class="quote">
            <slot></slot>
        </p>
    </div>
</template>

<style scoped>
    .family-quote {
        display: flex;
        padding: 1em;
        background-color: #191819;
        border-radius: 7px;
    }

    .author .author-img{
        width: 70px;
        height: 70px;
        border: 3px solid #FFD600;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .family-quote .quote {
        margin-left: 2em;
        padding-top: 5px;
        font-size: .9rem;
        line-height: 1.8;
    }

    .family-quote .author span {
        display: block;
        text-align: center;
        margin-top: .5em;
    }

   
</style>


<script>
export default {
    props: {
        img: {
            type: String, 
            required: true

        },
        author: {
            type: String,
            required: true
        }
        

    }
}
</script>
