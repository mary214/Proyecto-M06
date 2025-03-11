<template>
  <div>
    <PHeader :cartItems="cartItems" @remove-from-cart="removeFromCart" />
    <router-view @add-to-cart="addToCart" /> <!-- 🟢 Escucha el evento aquí -->
    <PFooter />
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';
import PFooter from './components/PFooter.vue';
// import ProductList from './components/ProductList.vue';

export default {
  components: {
    PHeader,
    PFooter,
   // ProductList,
  },
  data() {
    return {
      cartItems: [],
      productos: [
        { id: 1, name: 'Jersey cómodo', description: 'Ideal para invierno', price: 29.99, image: '/img/ropa2.b35b2d3e.jpg' },
        { id: 2, name: 'Pantalones casuales', description: 'Perfectos para uso diario', price: 39.99, image: '/img/ropa3.7293b36b.jpg' },
        // Agrega más productos según necesites...
      ],
    };
  },
  methods: {
    addToCart(product) {
      console.log("✅ Producto agregado en App.vue:", product);
      this.cartItems.push(product);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
  },
};
</script>
