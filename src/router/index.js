import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const My = () => import('../views/my/My')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/my',
    component: My,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
