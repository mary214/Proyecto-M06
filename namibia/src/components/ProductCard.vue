<template>
  <div class="product-card">
    <img :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <span class="price">{{ price }} €</span>
    <button @click="addProductToCart">Añadir al carrito</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  emits: ["add-to-cart"], // 🛑 Asegúrate de declarar los eventos emitidos
  props: {
    name: String,
    description: String,
    price: Number,
    image: String,
  },
  methods: {
    addProductToCart() {
      const product = {
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
      };
      console.log("Enviando evento add-to-cart...");
      this.$emit("add-to-cart", product);
      console.log("Evento emitido con producto:", product);

    },
  },
};
</script>


  
  <style scoped>
  
  /* Animació d'aparició */
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
  
  .product-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeIn 0.6s ease;
  }
  
  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  
  .product-card img {
  width: 100%;
  max-width: 370px;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

  
  .price {
    font-size: 1.2rem;
    color: #007bff;
    font-weight: bold;
  }

  .add-to-cart-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  }
  </style>
  