<template>
  <header class="header">
    <div class="logo">
      <img alt="Logo NAMIBIA" :src="logoSrc">
    </div>

    <nav class="navigation">
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link to="/ropa" class="nav-link">Ropa</router-link>
      <router-link to="/calzado" class="nav-link">Calzado</router-link>
      <router-link to="/complementos" class="nav-link">Complementos</router-link>
      <router-link to="/contacto" class="nav-link">Contacto</router-link>
    </nav>

    <!-- Botón del carrito -->
    <button @click="toggleCart" class="cart-btn">
      🛒
      <span v-if="cartItems.length" class="cart-count">{{ cartItems.length }}</span>
    </button>

    <!-- Componente PCart -->
    <PCart 
      v-if="showCart" 
      :cartItems="cartItems" 
      @remove-from-cart="$emit('remove-from-cart', $event)"
    />
  </header>
</template>

<script>
import PCart from './PCart.vue';
import logo from '../assets/logoNamibia.jpg';

export default {
  name: 'PHeader',
  components: {
    PCart,
  },
  props: {
    cartItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      logoSrc: logo,
      showCart: false,
    };
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.logo img {
  height: 50px;
}

.navigation {
  display: flex;
  gap: 20px;
}

.nav-link {
  font-size: 16px;
  font-weight: 500;
  color: #1a6d01;
  text-transform: uppercase;
  text-decoration: none;
}

.cart-btn {
  position: relative;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
}

.cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -10px;
}
</style>
