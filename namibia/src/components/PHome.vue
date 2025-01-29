<template>
  <div class="home">
    <!-- Sección de introducción -->
    <section class="intro">
      <h1>Benvinguts a <span>NAMIBIA</span></h1>
      <p>Descobreix les millors col·leccions de roba, calçat i complements per a dona.</p>
    </section>

    <!-- Sección de categorías -->
    <section class="categories">
      <div class="category">
        <router-link to="/ropa" class="no-link">
          <img src="@/assets/ropa.png" alt="Ropa" class="img-fluid" />
          <h2>Ropa</h2>
        </router-link>
      </div>
      <div class="category">
        <router-link to="/calzado" class="no-link">
          <img src="@/assets/calzado.png" alt="Calzado" class="img-fluid" />
          <h2>Calzado</h2>
        </router-link>
      </div>
      <div class="category">
        <router-link to="/complementos" class="no-link">
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
  padding: 50px 20px;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro {
  margin-bottom: 50px;
}

.intro h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 15px;
  animation: fadeIn 1s ease-in-out;
}

.intro h1 span {
  color: #007bff;
  font-weight: 800;
}

.intro p {
  font-size: 1.6rem;
  color: #555;
  font-family: 'Open Sans', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  animation: fadeIn 1.5s ease-in-out;
}

/* Sección de categorías */
.categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 30px;
}

.category {
  text-align: center;
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 320px;
}

/* Quitar estilos de enlace */
.no-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.category:hover {
  transform: translateY(-12px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.category img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.category img:hover {
  transform: scale(1.08);
}

.category h2 {
  margin-top: 20px;
  font-size: 2rem;
  color: #007bff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: color 0.3s ease;
}

.category h2:hover {
  color: #2239be;
}

/* Animaciones */
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

/* Responsive design */
@media (max-width: 768px) {
  .categories {
    flex-direction: column;
    align-items: center;
  }

  .category {
    width: 85%;
    margin-bottom: 20px;
  }

  .intro h1 {
    font-size: 2.8rem;
  }

  .intro p {
    font-size: 1.4rem;
  }
}
</style>
