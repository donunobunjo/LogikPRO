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

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },
  {
      name: 'create',
      path: '/createclient',
      component: CreateClient
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
