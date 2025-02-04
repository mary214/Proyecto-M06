<template>
  <div class="ropa">
    <h1 class="title">Colección de Ropa</h1>

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
        { id: 1, name: 'Vestido elegante',
         description: 'Perfecto para eventos',
         price: 49.99,
         image: ropa1 },
         
        { id: 2, name: 'Jersey cómodo', description: 'Ideal para invierno', price: 29.99, image: ropa2 },
        { id: 3, name: 'Pantalones casuales', description: 'Perfectos para uso diario', price: 39.99, image: ropa3 },
        { id: 4, name: 'Vestido de verano', description: 'Fresco y ligero para el verano', price: 34.99, image: ropa4 },
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
