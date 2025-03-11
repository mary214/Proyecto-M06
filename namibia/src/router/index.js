import { createRouter, createWebHistory } from 'vue-router';
import PHome from '../components/PHome.vue';
import RopaComponent from '../components/RopaComponent.vue';
import CalzadoComponent from '../components/CalzadoComponent.vue';
import ComplementosComponent from '../components/ComplementosComponent.vue';
import PContacto from '../components/PContacto.vue';
import CheckoutSummary from '../components/CheckoutSummary.vue';


const routes = [
  { path: '/', component: PHome },
  { path: '/ropa', component: RopaComponent },
  { path: '/calzado', component: CalzadoComponent },
  { path: '/complementos', component: ComplementosComponent },
  { path: '/contacto', component: PContacto },
  { path: '/checkout', name: 'Checkout', component: CheckoutSummary
  }
];

// Llamada a crear router, con dos parametros
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;