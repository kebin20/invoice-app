import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseModal from './components/UI/BaseModal.vue'

const app = createApp(App)

app.use(createPinia())

app.component('BaseCard', BaseCard)
app.component('BaseModal', BaseModal)

app.mount('#app')
