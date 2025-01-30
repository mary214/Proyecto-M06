<template>
  <header class="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
    <div class="logo">
      <img alt="Logo NAMIBIA" :src="logoSrc">

    </div>
    <nav class="navigation">
      <router-link to="/" class="nav-link">Inici</router-link>
      <router-link to="/ropa" class="nav-link">Ropa</router-link>
      <router-link to="/calzado" class="nav-link">Calzado</router-link>
      <router-link to="/complementos" class="nav-link">Complementos</router-link>
      <router-link to="/contacto" class="nav-link">Contacto</router-link>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/logoNamibia.jpg';

export default {
  name: 'PHeader',
  data() {
    return {
      logoSrc: logo,
    };
  },
};
</script>


<style scoped>

body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  margin-top: 0;
  padding-top: 0;
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #34495e;
  border-bottom: 2px solid #2c3e50;
}
.logo img {
  height: 50px;
}
.navigation {
  display: flex;
  gap: 20px;
}
.navigation .nav-link {
  font-size: 16px;
  font-weight: 500;
  color: #1a6d01;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
}
.navigation .nav-link:hover {
  color: #1abc9c;
}
.navigation .nav-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #1abc9c;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -3px;
  left: 0;
}
.navigation .nav-link:hover::after {
  width: 100%;
}
</style>
