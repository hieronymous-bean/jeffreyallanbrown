import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import 'bootstrap'

import './assets/css/style.css'
import './assets/js/scripts.js'


const app = createApp(App)

app.use(router)
app.mount('#app')
