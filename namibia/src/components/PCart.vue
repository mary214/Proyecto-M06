<template>
    <div class="cart">
      <h2>Cesta de la compra</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          <img :src="item.image" :alt="item.name" class="cart-image" />
          <span>{{ item.name }} - {{ item.price }} €</span>
          <button @click="$emit('remove-from-cart', index)">❌</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PCart',
    props: {
      cartItems: Array,
    },
  };
  </script>
  
  <style scoped>
  .cart {
    background: white;
    border: 1px solid #ddd;
    padding: 15px;
    width: 330px;
    position: fixed;
    top: 50px;
    right: 20px;
  }
  
  .cart ul {
    list-style: none;
    padding: 0;
  }
  
  .cart li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid #ddd;
  }
  
  .cart-image {
    width: 50px;
  }
  </style>
  