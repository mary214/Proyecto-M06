<!-- ESTO ESTA MAL CONFIGURADO -->
<template>
  <header>
    <nav>
      <router-link to="/">Inici</router-link> |
      <router-link to="/ropa">Ropa</router-link> |
      <router-link to="/calzado">Calzado</router-link> |
      <router-link to="/complementos">Complementos</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 10px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #007bff;
}
</style>