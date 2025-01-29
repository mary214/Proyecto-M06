<template>
  <div>
    <h1>Complementos</h1>
    <ProductList :products="complementosProducts" />
  </div>
</template>

<script>
import ProductList from './ProductList.vue';
import comp1 from '@/assets/comp1.jpg';
import comp2 from '@/assets/comp2.jpg';
import comp3 from '@/assets/comp3.jpg';

export default {
  name: 'ComplementosComponent',
  components: {
    ProductList,
  },
  data() {
    return {
      complementosProducts: [
        {
          id: 1,
          name: 'Bolso de mano',
          description: 'Bolso elegante y espacioso',
          price: 14.99,
          image: comp1,
        },
        {
          id: 2,
          name: 'Collar',
          description: 'Collar elegante',
          price: 29.99,
          image: comp2,
        },
        {
          id: 3,
          name: 'Gafas cuadradas',
          description: 'Gafas moderno y resistente',
          price: 49.99,
          image: comp3,
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