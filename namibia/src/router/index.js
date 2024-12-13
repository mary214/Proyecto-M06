import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeView.vue';
import Ropa from '../components/RopaComponent.vue';
import Calzado from '../components/CalzadoComponent.vue';
import Complementos from '../components/ComplementosComponent.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/ropa', component: Ropa },
  { path: '/calzado', component: Calzado },
  { path: '/complementos', component: Complementos },
];

// Llamada a crear router, con dos parametros
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;