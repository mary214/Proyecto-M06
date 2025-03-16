<template>
  <div class="cart" v-if="cartItems.length > 0">
    <h2>{{ $t('cart') }}</h2>
    <div class="cart-items">
      <ul>
        <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-image" />
          <span>{{ item.name }} - {{ item.price }} €</span>
          <button @click="$emit('remove-from-cart', index)" class="remove-btn">❌</button>
        </li>
      </ul>
    </div>
    <button v-if="cartItems.length > 0" @click="goToCheckout" class="checkout-btn">
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
.cart {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.cart-items {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cart-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
}

.remove-btn {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
}

.checkout-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
}
</style>
