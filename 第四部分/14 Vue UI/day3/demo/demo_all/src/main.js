import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

//导入Mint UI组件库
import MintUI from 'mint-ui';

//导入Mint UI的样式表文件
import 'mint-ui/lib/style.min.css';

//通过Vue.use()方法将MintUI注册为组件
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
