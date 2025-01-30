<template>
  <div>
    <h1>Categoría de calzados</h1>
    <p class="category-description">
      Encuentra el mejor calzado para cada ocasión, desde zapatillas cómodas hasta elegantes zapatos casuales.
    </p>
    <ProductList :products="calzadoProducts" />
  </div>
</template>
  
  <script>
  import ProductList from './ProductList.vue';
  import calzado1 from '@/assets/calzado1.jpg';
  import calzado2 from '@/assets/calzado2.jpg';
  import calzado3 from '@/assets/calzado3.jpg';
  
  export default {
    name: 'CalzadoComponent',
    components: {
      ProductList,
    },
    data() {
      return {
        calzadoProducts: [
          {
            id: 1,
            name: 'Zapatillas Running',
            description: 'Zapatillas cómodas para correr',
            price: 79.99,
            image: calzado1,
          },
          {
            id: 2,
            name: 'Botas',
            description: 'Botas resistentes',
            price: 89.99,
            image: calzado2,
          },
          {
            id: 3,
            name: 'Zapatos Casuales',
            description: 'Zapatos ideales para el día a día',
            price: 59.99,
            image: calzado3,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(45deg, #222222, #1d1d1d);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    animation: fadeIn 1s ease-in-out;
  }

  
  .category-description {
    text-align: center;
    font-size: 1.2rem;
    color: #555;
    font-family: 'Open Sans', sans-serif;
    max-width: 600px;
    margin: 0 auto 20px;
    line-height: 1.5;
    opacity: 0;
    animation: fadeIn 1.5s ease-in-out forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>