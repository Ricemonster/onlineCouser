import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'
import 'view-design/dist/styles/iview.css';
import './assets/styles/reset.css'


Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
