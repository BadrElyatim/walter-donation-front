<template>
  <div class="donate-box">
    <h3>Donate Box</h3>
    <p>Any amount will be appreciated</p>
    <div class="amounts" ref="amounts">
        <div class="amount" :class="{'active': this.activeAmount === 1}" @click="changeActiveAmount(1)">1$</div>
        <div class="amount" :class="{'active': this.activeAmount === 2}" @click="changeActiveAmount(2)">5$</div>
        <div class="amount" :class="{'active': this.activeAmount === 3}" @click="changeActiveAmount(3)">10$</div>
    </div>
    <div ref="paypal" class="paypal" style="position: relative; z-index: 0;">
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DonateBox',

    data() {
        return {
            loaded: false,
            paidFor: false,
            amount: 10,
            activeAmount: 3
        };
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AVjRyn0nKJV0MfrCqUgH3vM0EzKZffiDOnngI6Fga3RwnDMxE69CMva7DB9TXXVDghiNXf_FCH4OoXbU";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: this.amount
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            await axios.post('http://127.0.0.1:8000/api/donations', order)
              .then(response => console.log(response));
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    },
    changeActiveAmount(index) {
        this.activeAmount = index
        this.amount = this.$refs.amounts.children[index-1].innerHTML.slice(0, -1)
    }
  }
};

</script>

<style scoped>
    


    .donate-box {
        flex: .8;
    }
    .donate-box h3{
        text-align: center;
        font-size: 1.8rem;
    }

    .donate-box p{
        text-align: center;
        margin: .7em 0 .6em;
    }

    .donate-box .amounts {
        display: flex;
        justify-content: space-between;
        margin: 1.8em .7em;
    }

    .donate-box .amounts .amount {
        background-color: #252423;
        padding: .9em;
        font-weight: 600;
        cursor: pointer;
    }

    .donate-box .amounts .amount.active {
        border: 2px solid #FFD600;
    }

    @media (max-width: 800px) {
      .donate-box h3, .donate-box p{
        text-align: left;
      }

      .donate-box .amounts {
        margin-inline: 0;
      }
    }
</style>