<template>
  <div>
    <PHeader :cartItems="cartItems" @remove-from-cart="removeFromCart" />
    <router-view :cart-items="cartItems" @add-to-cart="addToCart"></router-view>
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';

export default {
  components: {
    PHeader,
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
