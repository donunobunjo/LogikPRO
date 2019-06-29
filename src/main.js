import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/layout.css'
import '../public/css/framework.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueAxios from 'vue-axios'
import axios from 'axios'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import Home from './components/Home.vue'
import CreateClient from './components/CreateClient.vue'
import CreateProduct from './components/CreateProduct.vue'
import StockIn from './components/StockIn.vue'
import StockOut from './components/StockOut.vue'
import ReturnIn from './components/ReturnIn.vue'
import ReturnOut from './components/ReturnOut.vue'

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },
  {
      name: 'createclient',
      path: '/createclient',
      component: CreateClient
  },
  {
    name: 'createproduct',
    path: '/createproduct',
    component: CreateProduct
  },
  {
    name: 'stockin',
    path: '/stockin',
    component: StockIn
  },
  {
    name: 'stockout',
    path: '/stockout',
    component: StockOut
  },
  {
    name: 'returnin',
    path: '/returnin',
    component: ReturnIn
  },
  {
    name: 'returnout',
    path: '/returnout',
    component: ReturnOut
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
