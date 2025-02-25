<template>
  <div>
    <PHeader :cartItems="cartItems" @remove-from-cart="removeFromCart" />
    <!-- Usamos un scoped slot en router-view -->
    <router-view v-slot="{ Component }">
      <component 
        :is="Component" 
        :cart-items="cartItems" 
        @add-to-cart="addToCart" 
      />
    </router-view>
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';

export default {
  name: 'App',
  components: { PHeader },
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    addToCart(product) {
      console.log('App.vue: Producto recibido', product);
      this.cartItems.push(product);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
  },
};
</script>
