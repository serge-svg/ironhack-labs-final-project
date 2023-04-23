import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
// Configurar la instancia de Supabase
//app.config.globalProperties.$supabase = supabase
app.use(createPinia())
app.use(router)
app.mount('#app')
