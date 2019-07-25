import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Cart from '@/components/Cart'
import Address from '@/components/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/products",
      name: 'Products',
      component: Products
    },
    {
      path: "/cart",
      name: 'Cart',
      component: Cart
    },
    {
      path: "/address",
      name: 'Address',
      component: Address
    }
  ]
})
