import VueRouter from 'vue-router'
import Auth from '@/components/Auth.vue'
import AuthSuccess from '@/components/AuthSuccess.vue'
import Hello from '@/components/Hello'
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Auth },
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess },
    { path: '/', name: 'Hello', component: Hello }
  ]
})
export default router
