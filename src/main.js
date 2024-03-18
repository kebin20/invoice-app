import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'
import Navbar from './components/Navbar.vue'

const app = createApp(App)

app.component('navbar', Navbar)

app.use(createPinia())

app.mount('#app')
