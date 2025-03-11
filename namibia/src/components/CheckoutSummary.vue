<template>
    <div class="checkout-summary">
      <h1>{{ $t('purchase_summary') }}</h1>
      
      <div class="summary-content">
        <div class="products-list">
          <div v-for="(item, index) in cartItems" :key="index" class="product-item">
            <img :src="item.image" :alt="item.name" class="product-image" />
            <div class="product-info">
              <h3>{{ item.name }}</h3>
              <p>{{ item.price }} €</p>
            </div>
          </div>
        </div>
  
        <div class="totals">
          <div class="total-line">
            <span>{{ $t('subtotal') }}:</span>
            <span>{{ subtotal.toFixed(2) }} €</span>
          </div>
          <div class="total-line">
            <span>IVA (21%):</span>
            <span>{{ iva.toFixed(2) }} €</span>
          </div>
          <div class="total-line grand-total">
            <span>{{ $t('total') }}:</span>
            <span>{{ total.toFixed(2) }} €</span>
          </div>
        </div>
  
        <div class="actions">
          <button @click="confirmPurchase" class="buy-btn">{{ $t('buy') }}</button>
          <button @click="continueShopping" class="continue-btn">{{ $t('continue_shopping') }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckoutSummary',
    props: {
      cartItems: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      subtotal() {
        return this.cartItems.reduce((acc, item) => acc + item.price, 0);
      },
      iva() {
        return this.subtotal * 0.21;
      },
      total() {
        return this.subtotal + this.iva;
      }
    },
    methods: {
      confirmPurchase() {
        this.$emit('clear-cart');
        this.$router.push('/');
        alert(this.$t('purchase_completed'));
      },
      continueShopping() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-summary {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }
  
  .summary-content {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 20px;
  }
  
  .products-list {
    margin-bottom: 30px;
  }
  
  .product-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .totals {
    border-top: 2px solid #eee;
    padding-top: 20px;
    margin-top: 20px;
  }
  
  .total-line {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 1.1rem;
  }
  
  .grand-total {
    font-weight: bold;
    font-size: 1.3rem;
    color: #1a6d01;
  }
  
  .actions {
    display: flex;
    gap: 15px;
    margin-top: 30px;
  }
  
  .buy-btn, .continue-btn {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
  }
  
  .buy-btn {
    background-color: #28a745;
    color: white;
  }
  
  .continue-btn {
    background-color: #007bff;
    color: white;
  }
  </style>