<template>
    <div>
      <h1>Ropa</h1>
      <ProductList :products="ropaProducts" />
    </div>
  </template>
  
  <script>
  import ProductList from './ProductList.vue';
  import rcpa1 from '@/assets/ropa1.jpg';
  import rcpa2 from '@/assets/ropa2.jpg';
  import rcpa3 from '@/assets/ropa3.jpg';
  import rcpa4 from '@/assets/ropa4.jpg';
  
  export default {
    name: 'RopaComponent',
    components: {
      ProductList,
    },
    data() {
      return {
        ropaProducts: [
          {
            id: 1,
            name: 'Vestido azul',
            description: 'Vestido de algodón suave y cómoda',
            price: 59.99,
            image: rcpa1,
          },
          {
            id: 2,
            name: 'Jersey cuello alto',
            description: 'Jersey ideal para días fríos',
            price: 39.99,
            image: rcpa2,
          },
          {
            id: 3,
            name: 'Pantalón',
            description: 'Pantalón de corte moderno',
            price: 49.99,
            image: rcpa3,
          },
          {
            id: 4,
            name: 'Vestido negro',
            description: 'Vestido sedoso',
            price: 99.99,
            image: rcpa4,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>