<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :image="product.image"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleAddToCart(product) {
      console.log("ProductList reemitiendo add-to-cart con:", product);
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
