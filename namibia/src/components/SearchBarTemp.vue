<template>
  <div class="search-bar-container">
    <form @submit.prevent="validateSearch">
      <input
        type="text"
        v-model="searchQueryInput"
        placeholder="Busca un producto..."
        class="search-bar"
      />
      <button type="submit" class="search-btn">Buscar</button>
    </form>

    <p v-if="searchError" class="error-message">{{ searchError }}</p>
    <p v-if="!searchError && filteredProducts.length === 0" class="no-results">
      No se ha encontrado ningún producto.
    </p>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQueryInput: '',
      searchQuery: '',
      searchError: '',
    };
  },
  computed: {
    filteredProducts() {
      if (this.searchQuery === '') return this.products; // Mostra todos los productos si el campo buscar esta vacio

      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    validateSearch() {
      const query = this.searchQueryInput;

      // Validar solo si contiene espacios en blanco
      if (query.trim() === '' && query !== '') {
        this.searchError = 'No se permiten solo espacios en la búsqueda.';
        this.searchQuery = '';
      } else {
        this.searchError = '';
        this.searchQuery = query.trim(); // Permite campo vacio para mostrar todos lo s productos
      }

      this.$emit('search-results', this.filteredProducts);
    },
  },
};
</script>

<style scoped>
.search-bar-container {
  text-align: center;
  margin-bottom: 20px;
}

.search-bar {
  padding: 10px;
  width: 80%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.search-btn:hover {
  background-color: #0056b3;
}

.error-message {
  color: rgb(119, 119, 119);
  font-weight: bold;
}

.no-results {
  color: #999;
  margin-top: 10px;
}
</style>
