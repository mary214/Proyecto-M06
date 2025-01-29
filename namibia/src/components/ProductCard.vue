<template>
    <div class="product-card">
      <img :src="image" :alt="name" />
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <span class="price">{{ price }} €</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
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
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .price {
    font-size: 1.2rem;
    color: #007bff;
    font-weight: bold;
  }
  </style>
  