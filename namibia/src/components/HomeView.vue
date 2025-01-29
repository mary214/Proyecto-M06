<template>
  <div class="home">
    <section class="intro">
      <h1>Benvinguts a NAMIBIA</h1>
      <p>Descobreix les millors col·leccions de roba, calçat i complements per a dona.</p>
    </section>
    <section class="categories">
      <div class="category">
        <router-link to="/ropa">
          <img src="@/assets/ropa.png" alt="Ropa" class="img-fluid" />
          <h2>Ropa</h2>
        </router-link>
      </div>
      <div class="category">
        <router-link to="/calzado">
          <img src="@/assets/calzado.png" alt="Calzado" class="img-fluid" />
          <h2>Calzado</h2>
        </router-link>
      </div>
      <div class="category">
        <router-link to="/complementos">
          <img src="@/assets/complementos.png" alt="Complementos" class="img-fluid" />
          <h2>Complementos</h2>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PHome',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.intro h1 {
  font-size: 2.5rem;
  color: #333;
}

.intro p {
  font-size: 1.2rem;
  color: #666;
}

.categories {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.category {
  text-align: center;
}

.category img {
  width: 200px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s;
}

.category img:hover {
  transform: scale(1.05);
}

.category h2 {
  margin-top: 10px;
  color: #007bff;
}

.category h2:hover {
    color: #2239be;
  }
  
  @media (max-width: 768px) {
    .categories {
      flex-direction: column;
      align-items: center;
    }
    .category {
      width: 80%;
    }
  }
</style>