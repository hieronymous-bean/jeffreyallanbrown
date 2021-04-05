import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'


import './assets/css/style.css'
import './assets/scss/main.scss'


import './assets/js/scripts.js'


const app = createApp(App)

app.use(router)
app.mount('#app')
