// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import fastClick from 'fastclick';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import store from './store/index';
import 'babel-polyfill';   //用于手机测试时不支持promise白屏的情况
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

Vue.config.productionTip = false
fastClick.attach(document.body);   //解决移动端点击延迟

Vue.use(VueRouter);
Vue.use(iView);

Vue.prototype.$http = axios;  
axios.interceptors.request.use(function(config){  
    store.dispatch('showloader')  
    return config  
},function(err){  
    return Promise.reject(err)  
});  
axios.interceptors.response.use(function(response){  
    store.dispatch('hideloader')  
    return response  
},function(err){  
    return Promise.reject(err)  
}); 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
