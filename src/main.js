import Vue from 'vue'
import App from './App.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../public/css/layout.css'
import '../public/css/framework.css'
//import jquery from '../public/js/jquery.min'
//import '../public/js/jquery.mobilemenu'
//Vue.use(jquery)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueAxios from 'vue-axios'
import axios from 'axios'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)

//const baseURL = 'http://localhost:8080'
const baseURL = 'https://logistiks-pro-api.herokuapp.com'

Vue.config.productionTip = false

Vue.prototype.$axios=axios.create({baseURL})

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
import Chronological from './components/Chronological.vue'
import productSearch from './components/ProductSearch.vue'
import clientSearch from './components/ClientSearch.vue'
import Spinner from './components/spinner.vue'



/*Vue.filter('formatDate',function(value){
    if(value){
      return moment(String(value)).format('DD/MM/YYYY')
    }
})*/




const routes = [
  {
    name: 'spinner',
    path: '/spinner',
    component: Spinner
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
  },
  {
    name: 'chronological',
    path: '/chronological',
    component: Chronological
  },
  {
    name: 'ProductSearch',
    path: '/searchproduct',
    component: productSearch
  },
  {
    name: 'ClientSearch',
    path: '/searchclient',
    component: clientSearch
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
