import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from "../views/home/home";
// import category from "../views/category/category";
const home=()=>import('../views/home/home')
const category=()=>import('../views/category/category')
const cart=()=>import('../views/cart/cart')
const profile=()=>import('../views/profile/profile')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      redirect:home
    },
    {
      path: '/home',
      component: home
    },

    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/profile',
      component: profile
    }
  ]
})
