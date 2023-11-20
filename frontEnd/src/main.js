import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from './axios'
import store from './store'

createApp(App)
   .use(router,axios)
   .use(store)
   .mount('#app')

