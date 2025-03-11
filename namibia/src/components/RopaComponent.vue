<template>
  <div class="ropa">
    <h1 class="title">{{ $t("clothing_collection") }}</h1>

    <SearchBar :products="products" @search-results="updateFilteredProducts" />


    <section class="products">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </section>
  </div>
</template>

<script>
import SearchBar from './SearchBarTemp.vue';
import ProductCard from './ProductCard.vue';
import ropa1 from '@/assets/ropa1.jpg';
import ropa2 from '@/assets/ropa2.jpg';
import ropa3 from '@/assets/ropa3.jpg';
import ropa4 from '@/assets/ropa4.jpg';

export default {
  name: 'RopaComponent',
  components: {
    SearchBar,
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: this.$t('elegant_dress'),
          description: this.$t('perfect_for_events'),
          price: 49.99,
          image: ropa1,
        },
        {
          id: 2,
          name: this.$t('comfortable_sweater'),
          description: this.$t('ideal_for_winter'),
          price: 29.99,
          image: ropa2,
        },
        {
          id: 3,
          name: this.$t('casual_pants'),
          description: this.$t('perfect_for_daily_use'),
          price: 39.99,
          image: ropa3,
        },
        {
          id: 4,
          name: this.$t('summer_dress'),
          description: this.$t('fresh_and_light_for_summer'),
          price: 34.99,
          image: ropa4,
        },
      ],
      filteredProducts: [],
    };
  },
  created() {
    this.filteredProducts = this.products;
  },
  methods: {
    updateFilteredProducts(results) {
      this.filteredProducts = results;
    },
  },
};
</script>

<style scoped>
.ropa {
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
