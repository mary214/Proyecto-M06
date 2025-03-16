<template>
  <div>
    <PHeader :cartItems="cartItems" @remove-from-cart="removeFromCart" />
    <router-view v-slot="{ Component }">
      <component 
        :is="Component" 
        :cartItems="cartItems" 
        @clear-cart="clearCart" 
        @add-to-cart="addToCart" 
      />
    </router-view>
    <PFooter />
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';
import PFooter from './components/PFooter.vue';

export default {
  components: {
    PHeader,
    PFooter
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
