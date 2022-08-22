<template>
  <div class="donations">
    <div v-for="donation in LastDonations" class="donation" :key="donation.id">
        <span>{{ donation.firstname }}</span>
        <span>{{ donation.amount }}$</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DonationsComp',
    data() {
        return {
            LastDonations: []
        }
    },
    async created() {
        await axios.get('https://walter-donation.herokuapp.com/api/donations')
            .then(response => this.LastDonations = response.data)
    },
}
</script>

<style scoped>
    .donations {
        margin-top: 2em;
    }

    .donations .donation {
        display: flex;
        justify-content: space-between;
        padding: .7em 2em;
        color: #FFD600;
        border: 1px solid #FFD600;
        border-radius: 8px;
        margin-bottom: 11px;
    }
</style>