import { createRouter, createWebHistory } from 'vue-router'

import CreateInvoice from './pages/CreateInvoice.vue'
import InvoiceDetail from './pages/InvoiceDetail.vue'
import EditInvoice from './pages/EditInvoice.vue'
import InvoiceList from './pages/InvoiceList.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/invoices' },
    { path: '/invoices', component: InvoiceList },
    { path: '/invoices/new', component: CreateInvoice },
    {
      path: '/invoices/:id',
      component: InvoiceDetail,
      children: [{ path: 'edit', component: EditInvoice }]
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router
