<template>
  <div>
    <h1>{{ $t("footwear_category") }}</h1>
    <p class="category-description">{{ $t("footwear_description") }}</p>

    <!-- Buscador productos-->
    <SearchBar :products="calzadoProducts" @search-results="updateFilteredProducts" />

    <!-- Listado productos filtrados -->
    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import ProductList from './ProductList.vue';
import SearchBar from './SearchBarTemp.vue';
import calzado1 from '@/assets/calzado1.jpg';
import calzado2 from '@/assets/calzado2.jpg';
import calzado3 from '@/assets/calzado3.jpg';

export default {
  name: 'CalzadoComponent',
  components: {
    ProductList,
    SearchBar,
  },
  data() {
    return {
      calzadoProducts: [
        {
          id: 1,
          name: this.$t('running_shoes'), 
          description: this.$t('comfortable_running_shoes'),
          price: 79.99,
          image: calzado1,
        },
        {
          id: 2,
          name: this.$t('boots'),
          description: this.$t('resistant_boots'),
          price: 89.99,
          image: calzado2,
        },
        {
          id: 3,
          name: this.$t('casual_shoes'),
          description: this.$t('daily_shoes'),
          price: 59.99,
          image: calzado3,
        },
      ],
      filteredProducts: [],
    };
  },
  created() {
    // Muestra todos los productos por default
    this.filteredProducts = this.calzadoProducts;
  },
  methods: {
    updateFilteredProducts(filtered) {
      // Actualizar lista productos filtrados
      this.filteredProducts = filtered;
    },
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
