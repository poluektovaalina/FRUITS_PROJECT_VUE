import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App   )

app
    .use(router)
    .use(autoAnimatePlugin)
    .mount('#app')
