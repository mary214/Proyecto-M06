<template>
  <div>
    <PHeader :cartItems="cartItems" @remove-from-cart="removeFromCart" />
    <router-view :cart-items="cartItems" @add-to-cart="addToCart"></router-view>
    <PFooter />
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';
import PFooter from './components/PFooter.vue';

export default {
  components: {
    PHeader,
    PFooter,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
  },
};
</script>
