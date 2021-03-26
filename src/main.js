import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import './assets/css/font-awesome.min.css'
import './assets/css/icons.css'
import './assets/css/main.css'
import './assets/css/setting.css'

const app = createApp(App);

app.use(router);
app.mount('#app');