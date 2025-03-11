<template>
  <div class="category-container">
    <h1>{{ $t("accessories") }}</h1>
    <p class="category-description">{{ $t("accessories_description") }}</p>

    <!-- Buscador productos -->
    <SearchBar :products="complementosProducts" @search-results="updateFilteredProducts" />

    <!-- Listado productos filtrados -->
    <ProductList 
      :products="filteredProducts"
      @add-to-cart="$emit('add-to-cart', $event)"  
      />
  </div>
</template>

<script>
import ProductList from './ProductList.vue';
import SearchBar from './SearchBarTemp.vue';
import comp1 from '@/assets/comp1.jpg';
import comp2 from '@/assets/comp2.jpg';
import comp3 from '@/assets/comp3.jpg';

export default {
  name: 'ComplementosComponent',
  components: {
    ProductList,
    SearchBar,
  },
  data() {
    return {
      complementosProducts: [
        {
          id: 1,
          name: this.$t('hand_bag'),
          description: this.$t('elegant_and_spacious_bag'),
          price: 14.99,
          image: comp1,
        },
        {
          id: 2,
          name: this.$t('necklace'),
          description: this.$t('elegant_necklace'),
          price: 29.99,
          image: comp2,
        },
        {
          id: 3,
          name: this.$t('square_glasses'),
          description: this.$t('modern_and_resistant_glasses'),
          price: 49.99,
          image: comp3,
        },
      ],
      filteredProducts: [],
    };
  },
  created() {
    this.filteredProducts = this.complementosProducts;
  },
  methods: {
    updateFilteredProducts(filtered) {
      this.filteredProducts = filtered;
    },
  },
};
</script>

<style scoped>
.category-container {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(45deg, #ff7eb3, #ff758c);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  animation: fadeIn 1s ease-in-out;
}

.category-description {
  font-size: 1.4rem;
  color: #555;
  font-family: 'Open Sans', sans-serif;
  max-width: 600px;
  margin: 0 auto 20px;
  line-height: 1.5;
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
