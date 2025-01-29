<template>
  <footer class="footer p-4 text-light">
    <nav class="footer-navigation d-flex justify-content-center gap-4 mb-3">
      <router-link to="/" class="nav-link">Inici</router-link>
      <router-link to="/ropa" class="nav-link">Ropa</router-link>
      <router-link to="/calzado" class="nav-link">Calzado</router-link>
      <router-link to="/complementos" class="nav-link">Complementos</router-link>
      <router-link to="/contacto" class="nav-link">Contacto</router-link>
    </nav>


    <div class="footer-social d-flex justify-content-center gap-4 mb-3">
      <a href="#" target="_blank">
        <img :src="tiktokIcon" alt="Facebook" class="social-icon" />
      </a>
      <a href="#" target="_blank">
        <img :src="linkedinIcon" alt="Twitter" class="social-icon" />
      </a>
      <a href="#" target="_blank">
        <img :src="instagramIcon" alt="Instagram" class="social-icon" />
      </a>
    </div>

    <div class="footer-info text-center">
      <p>&copy; {{ currentYear }} Namibia. Todos los derechos reservados.</p>
    </div>

    
  </footer>
</template>

<script>
import tiktokIcon from '../assets/tik-tok.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';

export default {
  name: 'PFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      tiktokIcon,
      linkedinIcon,
      instagramIcon,
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #576a80;
  color: #ecf0f1;
  padding: 20px;
  border-top: 3px solid #34495e;
}


.footer-navigation .nav-link {
  font-size: 16px;
  font-weight: 500;
  color: #ecf0f1;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-navigation .nav-link:hover {
  color: #1abc9c;
}

.footer-social .social-icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.footer-social .social-icon:hover {
  transform: scale(1.1);
}

.footer-info {
  font-size: 14px;
  margin-top: 10px;
}
</style>
