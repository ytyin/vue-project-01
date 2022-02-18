import Vue from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
import VCharts from 'v-charts'
import MintUI from 'mint-ui'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import router from './route/index.js'
import routerPath from './routePath.js'
import '@/assets/base.css'
import myPlugin from 'yyt-components'

Vue.use(myPlugin)

Vue.config.productionTip = false
Vue.use(VCharts)
Vue.use(MintUI)
Vue.use(Element)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'rgNj9QsRKtx3Qp9ZKP2xLdgEkYrkmTM3'  // 浏览器端/android应用/服务端	
})

new Vue({
  el: '#app',
  router: routerPath,
  render: h => h(App),
}).$mount('#app')
