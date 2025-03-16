<template>
  <div>
    <PHeader :cartItems="cartItems" @remove-from-cart="removeFromCart" />
    <router-view @add-to-cart="addToCart" />
    <CheckoutSummary 
      v-if="$route.path === '/checkout'"
      :cartItems="cartItems"
      @clear-cart="clearCart"
    />
    <PFooter />
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';
import PFooter from './components/PFooter.vue';
import CheckoutSummary from './components/CheckoutSummary.vue';

export default {
  components: {
    PHeader,
    PFooter,
    CheckoutSummary
  },
  data() {
    return {
      cartItems: [],
      productos: [],
    };
  },
  methods: {
    addToCart(product) {
      console.log("Producto agregado en App.vue:", product);
      this.cartItems.push(product);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    clearCart() {
      this.cartItems = [];
    }
  }
};
</script>