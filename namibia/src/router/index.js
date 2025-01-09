import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import RopaComponent from '../components/RopaComponent.vue';
import CalzadoComponent from '../components/CalzadoComponent.vue';
import ComplementosComponent from '../components/ComplementosComponent.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/ropa', component: RopaComponent },
  { path: '/calzado', component: CalzadoComponent },
  { path: '/complementos', component: ComplementosComponent },
];

// Llamada a crear router, con dos parametros
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;