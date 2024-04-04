import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseModal from './components/UI/BaseModal.vue'

const app = createApp(App)

app.component('BaseCard', BaseCard)
app.component('BaseModal', BaseModal)

app.use(router)

app.mount('#app')
