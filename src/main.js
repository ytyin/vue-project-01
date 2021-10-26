import Vue from 'vue'
import App from './App.vue'
// import router from './route/index.js'
import routerPath from './routePath.js'
import '@/assets/base.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routerPath,
  render: h => h(App),
}).$mount('#app')
