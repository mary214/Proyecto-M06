import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useVuelidate } from '@vuelidate/core';

import './assets/styles.css'
createApp(App)
    .use(router)
    .mount('#app')

App.config.globalProperties.$v = useVuelidate();
