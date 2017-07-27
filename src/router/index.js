import VueRouter from 'vue-router'
import Auth from '@/components/Auth.vue'
import AuthSuccess from '@/components/AuthSuccess.vue'

import Layout from '@/containers/layout'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Layout,
      children: [
        {path: '/', component: Auth},
        {path: '/auth', component: Auth},
        {path: '/success', component: AuthSuccess}
      ]
    }
  ]
})
export default router
