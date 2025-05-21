import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import axios from 'axios';

const app = createApp(App)
axios.defaults.withCredentials = true;

app
    .use(router)
    .use(autoAnimatePlugin)
    .mount('#app')