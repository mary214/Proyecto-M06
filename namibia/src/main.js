import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/styles.css'
createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
