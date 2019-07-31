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
import ProductTimeline from './components/ProductTimeline.vue'
import ClientTimeline from './components/ClientTimeline.vue'
import ClientProductTimeline from './components/ClientProductTimeline.vue'
import Test from './components/Test.vue'



/*Vue.filter('formatDate',function(value){
    if(value){
      return moment(String(value)).format('DD/MM/YYYY')
    }
})*/




const routes = [
  {
    name: 'test',
    path: '/test',
    component: Test
  },
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
  },
  {
    name: 'producttimeline',
    path: '/producttimeline',
    component: ProductTimeline
  },
  {
    name: 'clienttimeline',
    path: '/clienttimeline',
    component: ClientTimeline
  },
  {
    name: 'clientproducttimeline',
    path: '/clientproducttimeline',
    component: ClientProductTimeline
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
