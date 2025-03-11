<template>
   <div class="cart" v-if="cartItems.length > 0">
    <h2>{{ $t('cart') }}</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        <img :src="item.image" :alt="item.name" class="cart-image" />
        <span>{{ item.name }} - {{ item.price }} €</span>
        <button @click="$emit('remove-from-cart', index)">❌</button>
      </li>
    </ul>
    <button 
      v-if="cartItems.length > 0" 
      @click="goToCheckout"
      class="checkout-btn"
    >
      {{ $t('finalize_purchase') }}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToCheckout() {
      this.$router.push('/checkout');
    }
  },

  props: {
    cartItems: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.checkout-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
}
</style>